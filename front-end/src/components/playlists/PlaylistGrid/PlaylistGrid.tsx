import { useEffect, useState } from "react";

import { ListMusic, SearchX } from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import type { Playlist } from "../../../types/playlist.types";

import PlaylistCard from "../PlaylistCard/PlaylistCard";
import PlaylistCreateModal from "../PlaylistCreateModal/PlaylistCreateModal";

import { Grid, Skeleton, Empty, EmptyTitle, EmptyText, CreateButton } from "./PlaylistGrid.styles";

interface PlaylistGridProps {
  onOpen: (playlist: Playlist) => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const PlaylistGrid = ({ onOpen, onNotify }: PlaylistGridProps) => {
  const { playlists, loading, search, fetchPlaylists } = usePlaylistStore();

  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  const trimmed = search.trim().toLowerCase();

  const filtered = trimmed
    ? playlists.filter(
        (playlist) =>
          playlist.name.toLowerCase().includes(trimmed) ||
          (playlist.description ?? "").toLowerCase().includes(trimmed),
      )
    : playlists;

  if (loading && playlists.length === 0) {
    return (
      <Grid>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </Grid>
    );
  }

  if (playlists.length === 0) {
    return (
      <Empty>
        <ListMusic size={44} style={{ opacity: 0.5 }} />
        <EmptyTitle>No playlists yet</EmptyTitle>
        <EmptyText>
          Create your first playlist to start organizing your songs into
          collections.
        </EmptyText>
        <CreateButton onClick={() => setCreateOpen(true)}>
          + Create Playlist
        </CreateButton>
      </Empty>
    );
  }

  if (filtered.length === 0) {
    return (
      <Empty>
        <SearchX size={44} style={{ opacity: 0.5 }} />
        <EmptyTitle>No playlists found</EmptyTitle>
        <EmptyText>Nothing matches "{search}". Try a different search.</EmptyText>
      </Empty>
    );
  }

  return (
    <>
      <Grid>
        {filtered.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            playlist={playlist}
            onOpen={onOpen}
          />
        ))}
      </Grid>

      {createOpen && (
        <PlaylistCreateModal
          onClose={() => setCreateOpen(false)}
          onNotify={onNotify}
        />
      )}
    </>
  );
};

export default PlaylistGrid;
