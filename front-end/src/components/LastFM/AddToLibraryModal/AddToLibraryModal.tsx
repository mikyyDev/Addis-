import { useState, useEffect } from "react";
import { X, Loader } from "lucide-react";
import { createPortal } from "react-dom";
import type { LastFMTrack } from "../../../types/lastfm.types";
import type { Genre } from "../../../types/genre.types";
import { songService } from "../../../services/song.service";
import { artistService } from "../../../services/artist.service";
import { albumService } from "../../../services/album.service";
import { genreService } from "../../../services/genre.service";
import CustomDropdown from "./CustomDropdown";
import GenreMultiSelect from "../../songs/SongForm/GenreMultiSelect";

interface AddToLibraryModalProps {
  track: LastFMTrack;
  onClose: () => void;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

interface Artist {
  _id: string;
  name: string;
}

interface Album {
  _id: string;
  name: string;
}

const AddToLibraryModal = ({
  track,
  onClose,
  onSuccess,
  onError,
}: AddToLibraryModalProps) => {
  // Form state
  const [title, setTitle] = useState(track.title || "");
  const [selectedArtistId, setSelectedArtistId] = useState("");
  const [selectedAlbumId, setSelectedAlbumId] = useState("");
  const [selectedGenreIds, setSelectedGenreIds] = useState<string[]>([]);
  const [spotifyUrl, setSpotifyUrl] = useState(track.spotifySearchUrl || "");
  const [youtubeSearchUrl, setYoutubeSearchUrl] = useState(
    track.youtubeSearchUrl || "",
  );
  const [imageUrl, setImageUrl] = useState(track.image || "");
  const [imagePreviewError, setImagePreviewError] = useState(false);

  // Dropdown data
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  // Create new artist/album state
  const [showCreateArtist, setShowCreateArtist] = useState(false);
  const [newArtistName, setNewArtistName] = useState(track.artist || "");
  const [showCreateAlbum, setShowCreateAlbum] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState(track.album || "");

  // Loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Load artists and genres on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [artistsList, genresRes] = await Promise.all([
          artistService.getArtists(),
          genreService.getGenres(),
        ]);

        setArtists(Array.isArray(artistsList) ? artistsList : []);
        setGenres(Array.isArray(genresRes.data) ? genresRes.data : []);
      } catch (err) {
        console.error("Error loading artists/genres:", err);
      }
    };

    loadData();
  }, []);

  // Load albums when artist is selected
  useEffect(() => {
    const loadAlbums = async () => {
      if (!selectedArtistId) {
        setAlbums([]);
        setSelectedAlbumId("");
        return;
      }

      try {
        const albumsList = await albumService.getAlbums({
          artist: selectedArtistId,
        });
        setAlbums(Array.isArray(albumsList) ? albumsList : []);
        setSelectedAlbumId("");
      } catch (err) {
        console.error("Error loading albums:", err);
        setAlbums([]);
      }
    };

    loadAlbums();
  }, [selectedArtistId]);

  const handleCreateArtist = async () => {
    if (!newArtistName.trim()) {
      setValidationError("Artist name is required");
      return;
    }

    try {
      const newArtist = await artistService.createArtist({
        name: newArtistName,
      });

      const artistId = newArtist._id;

      setArtists([...artists, newArtist]);
      setSelectedArtistId(artistId);
      setShowCreateArtist(false);
      setNewArtistName("");
      setValidationError("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create artist";
      setValidationError(errorMessage);
    }
  };

  const handleCreateAlbum = async () => {
    if (!newAlbumTitle.trim()) {
      setValidationError("Album title is required");
      return;
    }

    if (!selectedArtistId) {
      setValidationError("Please select an artist first");
      return;
    }

    try {
      const newAlbum = await albumService.createAlbum({
        name: newAlbumTitle,
        artistId: selectedArtistId,
      });

      const albumId = newAlbum._id;

      setAlbums([...albums, newAlbum]);
      setSelectedAlbumId(albumId);
      setShowCreateAlbum(false);
      setNewAlbumTitle("");
      setValidationError("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create album";
      setValidationError(errorMessage);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Validate required fields
    if (!title.trim()) {
      setValidationError("Song title is required");
      return;
    }

    if (!selectedArtistId) {
      setValidationError("Please select or create an artist");
      return;
    }

    const trimmedImageUrl = imageUrl.trim();

    if (trimmedImageUrl) {
      try {
        const parsed = new URL(trimmedImageUrl);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
          throw new Error("Only http(s) URLs are allowed");
        }
      } catch {
        setValidationError(
          "Invalid image URL — please enter a full http(s) URL",
        );
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const songData = {
        title: title.trim(),
        artistId: selectedArtistId,
        albumId: selectedAlbumId || undefined,
        genre: selectedGenreIds.length > 0 ? selectedGenreIds : undefined,
        image: trimmedImageUrl || undefined,
        spotifyUrl: spotifyUrl.trim() || undefined,
        providerUrl: youtubeSearchUrl.trim() || undefined,
      };

      const createdSong = await songService.createSong(songData);

      onSuccess(`Added "${createdSong.title || title}" to your library!`);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to add song to library";
      onError(errorMessage);
      console.error("Error creating song:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldLabelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    color: "#aaa",
    fontSize: "12px",
    fontWeight: "500",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const sectionStyle: React.CSSProperties = { marginBottom: "16px" };

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1200,
        padding: "16px",
        boxSizing: "border-box",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: "12px",
          padding: "24px",
          width: "90%",
          maxWidth: "500px",
          maxHeight: "calc(100vh - 32px)",
          overflow: "auto",
          boxSizing: "border-box",
          border: "1px solid rgba(108, 99, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontSize: "20px" }}>
            Add to My Library
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#aaa",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Last.fm preview */}
        {track.image && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <img
              src={track.image}
              alt=""
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {track.title}
              </div>
              <div style={{ color: "#aaa", fontSize: "12px" }}>
                {track.artist}
              </div>
              <div
                style={{
                  color: "#6c63ff",
                  fontSize: "11px",
                  marginTop: 2,
                  wordBreak: "break-all",
                }}
              >
                From Last.fm — edit the details below before saving
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Song Title */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>Song Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
              placeholder="Song title"
            />
          </div>

          {/* Artist Selection/Creation */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>Artist</label>

            {!showCreateArtist ? (
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <CustomDropdown
                    value={selectedArtistId}
                    onChange={setSelectedArtistId}
                    options={[
                      { value: "", label: "Select an artist" },
                      ...artists.map((artist) => ({
                        value: artist._id,
                        label: artist.name,
                      })),
                    ]}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowCreateArtist(true)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(108, 99, 255, 0.3)",
                    background: "rgba(108, 99, 255, 0.15)",
                    color: "#6c63ff",
                    cursor: "pointer",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  + New
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  value={newArtistName}
                  onChange={(e) => setNewArtistName(e.target.value)}
                  style={inputStyle}
                  placeholder="Artist name"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleCreateArtist}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                    background: "rgba(76, 175, 80, 0.15)",
                    color: "#4caf50",
                    cursor: "pointer",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateArtist(false);
                    setNewArtistName("");
                  }}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#aaa",
                    cursor: "pointer",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Album Selection/Creation */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>
              Album {selectedArtistId ? "(Optional)" : "(Select artist first)"}
            </label>

            {!showCreateAlbum ? (
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <CustomDropdown
                    value={selectedAlbumId}
                    onChange={setSelectedAlbumId}
                    disabled={!selectedArtistId}
                    options={[
                      { value: "", label: "Select an album (or leave empty)" },
                      ...albums.map((album) => ({
                        value: album._id,
                        label: album.name,
                      })),
                    ]}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowCreateAlbum(true)}
                  disabled={!selectedArtistId}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(108, 99, 255, 0.3)",
                    background: selectedArtistId
                      ? "rgba(108, 99, 255, 0.15)"
                      : "rgba(108, 99, 255, 0.05)",
                    color: "#6c63ff",
                    cursor: selectedArtistId ? "pointer" : "not-allowed",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    opacity: selectedArtistId ? 1 : 0.5,
                  }}
                >
                  + New
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                  style={inputStyle}
                  placeholder="Album title"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleCreateAlbum}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                    background: "rgba(76, 175, 80, 0.15)",
                    color: "#4caf50",
                    cursor: "pointer",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateAlbum(false);
                    setNewAlbumTitle("");
                  }}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#aaa",
                    cursor: "pointer",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Genre Selection */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>Genres (Optional)</label>
            <GenreMultiSelect
              genres={genres}
              value={selectedGenreIds}
              onChange={setSelectedGenreIds}
            />
          </div>

          {/* Image URL */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>Image URL (Optional)</label>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImagePreviewError(false);
                }}
                style={inputStyle}
                placeholder="https://example.com/cover.jpg"
              />
              {imageUrl.trim() && !imagePreviewError && (
                <img
                  src={imageUrl.trim()}
                  alt="Cover preview"
                  onError={() => setImagePreviewError(true)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    objectFit: "cover",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          </div>

          {/* Spotify URL */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>Spotify URL</label>
            <input
              type="text"
              value={spotifyUrl}
              onChange={(e) => setSpotifyUrl(e.target.value)}
              style={inputStyle}
              placeholder="https://open.spotify.com/..."
            />
          </div>

          {/* YouTube URL */}
          <div style={sectionStyle}>
            <label style={fieldLabelStyle}>YouTube URL</label>
            <input
              type="text"
              value={youtubeSearchUrl}
              onChange={(e) => setYoutubeSearchUrl(e.target.value)}
              style={inputStyle}
              placeholder="https://www.youtube.com/results?search_query=..."
            />
          </div>

          {/* Last.fm URL (Display only) */}
          {track.lastfmUrl && (
            <div style={sectionStyle}>
              <label style={fieldLabelStyle}>Last.fm URL</label>
              <div
                style={{
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(255, 255, 255, 0.02)",
                  color: "#6c63ff",
                  fontSize: "12px",
                  wordBreak: "break-all",
                  overflow: "auto",
                }}
              >
                {track.lastfmUrl}
              </div>
            </div>
          )}

          {/* Error Message */}
          {validationError && (
            <div
              style={{
                marginBottom: "16px",
                padding: "10px 12px",
                borderRadius: "6px",
                background: "rgba(244, 67, 54, 0.2)",
                color: "#f44336",
                fontSize: "12px",
              }}
            >
              {validationError}
            </div>
          )}

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#bbb",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "8px",
                border: "2px solid rgba(108, 99, 255, 0.5)",
                background: isSubmitting
                  ? "linear-gradient(135deg, rgba(108, 99, 255, 0.2) 0%, rgba(108, 99, 255, 0.1) 100%)"
                  : "linear-gradient(135deg, rgba(108, 99, 255, 0.3) 0%, rgba(108, 99, 255, 0.15) 100%)",
                color: "#6c63ff",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "600",
                opacity: isSubmitting ? 0.6 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              {isSubmitting && <Loader size={14} />}
              {isSubmitting ? "Adding..." : "Add Song"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default AddToLibraryModal;
