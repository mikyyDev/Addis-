import { useState, useEffect } from "react";

import { X, Loader } from "lucide-react";

import type { LastFMTrack } from "../../../types/lastfm.types";
import type { Genre } from "../../../types/genre.types";

import { songService } from "../../../services/song.service";
import { artistService } from "../../../services/artist.service";
import { albumService } from "../../../services/album.service";
import { genreService } from "../../../services/genre.service";
import { usePlaylistStore } from "../../../store/playlist.store";

import CustomDropdown from "../../LastFM/AddToLibraryModal/CustomDropdown";
import GenreMultiSelect from "../../songs/SongForm/GenreMultiSelect";

import {
  Backdrop,
  Panel,
  Header,
  Title,
  CloseButton,
  TrackPreview,
  TrackImage,
  TrackInfo,
  TrackName,
  TrackArtistName,
  TrackSource,
  Field,
  Label,
  Input,
  FieldRow,
  CreateButton,
  CancelCreateButton,
  ErrorText,
  Actions,
  Button,
} from "./AddToPlaylistFromLastFm.styles";

interface Artist {
  _id: string;
  name: string;
}

interface Album {
  _id: string;
  name: string;
}

interface AddToPlaylistFromLastFmProps {
  track: LastFMTrack;
  playlistId: string;
  playlistName: string;
  onClose: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const AddToPlaylistFromLastFm = ({
  track,
  playlistId,
  playlistName,
  onClose,
  onNotify,
}: AddToPlaylistFromLastFmProps) => {
  const { addSong } = usePlaylistStore();

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

  // Load the user's existing artists, albums, and genres on mount.
  useEffect(() => {
    const loadData = async () => {
      try {
        const [artistsList, albumsList, genresRes] = await Promise.all([
          artistService.getArtists(),
          albumService.getAlbums(),
          genreService.getGenres(),
        ]);

        setArtists(Array.isArray(artistsList) ? artistsList : []);
        setAlbums(Array.isArray(albumsList) ? albumsList : []);
        setGenres(Array.isArray(genresRes.data) ? genresRes.data : []);
      } catch (err) {
        console.error("Error loading artists/genres:", err);
      }
    };

    loadData();
  }, []);

  const handleCreateArtist = async () => {
    if (!newArtistName.trim()) {
      setValidationError("Artist name is required");
      return;
    }

    try {
      const newArtist = await artistService.createArtist({
        name: newArtistName,
      });

      setArtists([...artists, newArtist]);
      setSelectedArtistId(newArtist._id);
      setShowCreateArtist(false);
      setNewArtistName("");
      setValidationError("");
    } catch (err: unknown) {
      setValidationError(
        err instanceof Error ? err.message : "Failed to create artist",
      );
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

      setAlbums([...albums, newAlbum]);
      setSelectedAlbumId(newAlbum._id);
      setShowCreateAlbum(false);
      setNewAlbumTitle("");
      setValidationError("");
    } catch (err: unknown) {
      setValidationError(
        err instanceof Error ? err.message : "Failed to create album",
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!title.trim()) {
      setValidationError("Song title is required");
      return;
    }

    if (!selectedArtistId) {
      setValidationError("Please select or create an artist");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the song in library
      const songData = {
        title: title.trim(),
        artistId: selectedArtistId,
        albumId: selectedAlbumId || undefined,
        genre: selectedGenreIds.length > 0 ? selectedGenreIds : undefined,
        image: imageUrl.trim() || undefined,
        spotifyUrl: spotifyUrl.trim() || undefined,
        providerUrl: youtubeSearchUrl.trim() || undefined,
      };

      const createdSong = await songService.createSong(songData);

      // Add to playlist
      await addSong(playlistId, createdSong._id);

      onNotify("success", `"${createdSong.title}" added to "${playlistName}"`);
      onClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to add song";
      onNotify("error", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Backdrop onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add to "{playlistName}"</Title>

          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </CloseButton>
        </Header>

        {/* Last.fm track preview */}
        <TrackPreview>
          <TrackImage src={track.image || ""} alt="" />
          <TrackInfo>
            <TrackName>{track.title}</TrackName>
            <TrackArtistName>{track.artist}</TrackArtistName>
            <TrackSource>From Last.fm — edit before saving</TrackSource>
          </TrackInfo>
        </TrackPreview>

        <form onSubmit={handleSubmit}>
          {/* Song Title */}
          <Field>
            <Label>Song Title</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Song title"
            />
          </Field>

          {/* Artist Selection/Creation */}
          <Field>
            <Label>Artist</Label>

            {!showCreateArtist ? (
              <FieldRow>
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
                <CreateButton
                  type="button"
                  onClick={() => setShowCreateArtist(true)}
                >
                  + New
                </CreateButton>
              </FieldRow>
            ) : (
              <FieldRow>
                <Input
                  type="text"
                  value={newArtistName}
                  onChange={(e) => setNewArtistName(e.target.value)}
                  placeholder="Artist name"
                  autoFocus
                />
                <CreateButton type="button" onClick={handleCreateArtist}>
                  Create
                </CreateButton>
                <CancelCreateButton
                  type="button"
                  onClick={() => {
                    setShowCreateArtist(false);
                    setNewArtistName("");
                  }}
                >
                  Cancel
                </CancelCreateButton>
              </FieldRow>
            )}
          </Field>

          {/* Album Selection/Creation */}
          <Field>
            <Label>Album (Optional)</Label>

            {!showCreateAlbum ? (
              <FieldRow>
                <div style={{ flex: 1 }}>
                  <CustomDropdown
                    value={selectedAlbumId}
                    onChange={setSelectedAlbumId}
                    options={[
                      {
                        value: "",
                        label: "Select an album (or leave empty)",
                      },
                      ...albums.map((album) => ({
                        value: album._id,
                        label: album.name,
                      })),
                    ]}
                  />
                </div>
                <CreateButton
                  type="button"
                  onClick={() => setShowCreateAlbum(true)}
                  disabled={!selectedArtistId}
                >
                  + New
                </CreateButton>
              </FieldRow>
            ) : (
              <FieldRow>
                <Input
                  type="text"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                  placeholder="Album title"
                  autoFocus
                />
                <CreateButton type="button" onClick={handleCreateAlbum}>
                  Create
                </CreateButton>
                <CancelCreateButton
                  type="button"
                  onClick={() => {
                    setShowCreateAlbum(false);
                    setNewAlbumTitle("");
                  }}
                >
                  Cancel
                </CancelCreateButton>
              </FieldRow>
            )}
          </Field>

          {/* Genre Selection */}
          <Field>
            <Label>Genres (Optional)</Label>
            <GenreMultiSelect
              genres={genres}
              value={selectedGenreIds}
              onChange={setSelectedGenreIds}
            />
          </Field>

          {/* Image URL */}
          <Field>
            <Label>Image URL (Optional)</Label>
            <Input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/cover.jpg"
            />
          </Field>

          {/* Spotify URL */}
          <Field>
            <Label>Spotify URL</Label>
            <Input
              type="text"
              value={spotifyUrl}
              onChange={(e) => setSpotifyUrl(e.target.value)}
              placeholder="https://open.spotify.com/..."
            />
          </Field>

          {/* YouTube URL */}
          <Field>
            <Label>YouTube URL</Label>
            <Input
              type="text"
              value={youtubeSearchUrl}
              onChange={(e) => setYoutubeSearchUrl(e.target.value)}
              placeholder="https://www.youtube.com/..."
            />
          </Field>

          {validationError && <ErrorText>{validationError}</ErrorText>}

          <Actions>
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? <Loader size={14} /> : null}
              {isSubmitting ? "Adding..." : "Add Song"}
            </Button>
          </Actions>
        </form>
      </Panel>
    </Backdrop>
  );
};

export default AddToPlaylistFromLastFm;
