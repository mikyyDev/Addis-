import { useState, useCallback, useRef } from "react";

import { X, Search, Loader, Music2, Plus, ListMusic } from "lucide-react";

import { lastfmService } from "../../../services/lastfm.service";

import type { Playlist } from "../../../types/playlist.types";
import type { LastFMTrack } from "../../../types/lastfm.types";

import AddToPlaylistFromLastFm from "../AddToPlaylistFromLastFm/AddToPlaylistFromLastFm";

import { Header, Title, CloseButton } from "../PlaylistModal/PlaylistModal.styles";

import {
  Panel,
  SearchContainer,
  SearchInput,
  List,
  Row,
  Thumb,
  ThumbPlaceholder,
  Info,
  SongTitle,
  SongArtist,
  AddButton,
  CenterState,
  ErrorText,
} from "./AddSongsModal.styles";

interface AddSongsModalProps {
  playlist: Playlist;
  onClose: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const AddSongsModal = ({ playlist, onClose, onNotify }: AddSongsModalProps) => {
  const [results, setResults] = useState<LastFMTrack[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<LastFMTrack | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchLastFm = useCallback(async (query: string) => {
    const trimmed = query.trim();

    if (trimmed.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setSearchError("");

    try {
      const response = await lastfmService.searchTracks(trimmed);
      setResults(response.data);
    } catch (err: unknown) {
      setSearchError(
        err instanceof Error ? err.message : "Failed to search Last.fm",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearchChange = (value: string) => {
    setSearch(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (value.trim().length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(() => {
      searchLastFm(value);
    }, 500);
  };

  const handleAddClick = (track: LastFMTrack) => {
    setSelectedTrack(track);
  };

  // If a track is selected, show the form modal
  if (selectedTrack) {
    return (
      <AddToPlaylistFromLastFm
        track={selectedTrack}
        playlistId={playlist._id}
        playlistName={playlist.name}
        onClose={() => {
          setSelectedTrack(null);
          onClose();
        }}
        onNotify={onNotify}
      />
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <Panel onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add Songs to "{playlist.name}"</Title>

          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </CloseButton>
        </Header>

        <SearchContainer>
          <Search size={16} />

          <SearchInput
            placeholder="Search Last.fm..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </SearchContainer>

        {searchError && <ErrorText>{searchError}</ErrorText>}

        {loading ? (
          <CenterState>
            <Loader size={26} style={{ animation: "spin 0.8s linear infinite" }} />
          </CenterState>
        ) : results.length === 0 ? (
          <CenterState>
            <div style={{ textAlign: "center" }}>
              <ListMusic size={36} style={{ marginBottom: 10, opacity: 0.5 }} />
              <p>
                {search.trim().length < 2
                  ? "Type at least 2 characters to search Last.fm"
                  : `No results for "${search}"`}
              </p>
            </div>
          </CenterState>
        ) : (
          <List>
            {results.map((track) => (
              <Row key={track.id}>
                <Thumb>
                  {track.image ? (
                    <img src={track.image} alt="" loading="lazy" />
                  ) : (
                    <ThumbPlaceholder>
                      <Music2 size={17} />
                    </ThumbPlaceholder>
                  )}
                </Thumb>

                <Info>
                  <SongTitle title={track.title}>{track.title}</SongTitle>
                  <SongArtist title={track.artist}>
                    {track.artist}
                  </SongArtist>
                </Info>

                <AddButton
                  type="button"
                  onClick={() => handleAddClick(track)}
                >
                  <Plus size={14} />
                  Add
                </AddButton>
              </Row>
            ))}
          </List>
        )}
      </Panel>
    </div>
  );
};

export default AddSongsModal;
