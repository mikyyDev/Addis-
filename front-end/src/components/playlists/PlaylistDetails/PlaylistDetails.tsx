import { useState } from "react";

import {
  ArrowLeft,
  Play,
  Plus,
  Pencil,
  Trash2,
  ListMusic,
  Globe,
  Lock,
} from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import PlaylistCover from "../PlaylistCover/PlaylistCover";
import PlaylistSongRow from "../PlaylistSongRow/PlaylistSongRow";
import AddSongsModal from "../AddSongsModal/AddSongsModal";
import EditPlaylistModal from "../EditPlaylistModal/EditPlaylistModal";
import DeletePlaylistModal from "../DeletePlaylistModal/DeletePlaylistModal";

import {
  BackButton,
  Hero,
  Cover,
  Info,
  PlaylistLabel,
  Title,
  Description,
  StatsRow,
  StatBox,
  StatValue,
  StatLabel,
  Actions,
  PrimaryButton,
  GhostButton,
  DangerButton,
  SongTableHeader,
  SongTableHeaderNum,
  SongTableHeaderTitle,
  SongTableHeaderLinks,
  EmptySongs,
  EmptySongsTitle,
  EmptySongsText,
  AddSongsButton,
  DragHint,
  VisibilityBadge,
} from "./PlaylistDetails.styles";

interface PlaylistDetailsProps {
  onBack: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const PlaylistDetails = ({ onBack, onNotify }: PlaylistDetailsProps) => {
  const { selectedPlaylist, reorderSongs, removeSong } = usePlaylistStore();

  const [addSongsOpen, setAddSongsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  if (!selectedPlaylist) {
    return null;
  }

  const playlist = selectedPlaylist;
  const songs = playlist.songs ?? [];

  const uniqueArtists = Array.from(
    new Set(songs.map((song) => song.artistId?.name).filter(Boolean)),
  );

  const uniqueAlbums = Array.from(
    new Set(songs.map((song) => song.albumId?.name).filter(Boolean)),
  );

  const handleDrop = (targetSongId: string) => {
    if (!draggedId || draggedId === targetSongId) {
      setDraggedId(null);
      setDragOverId(null);
      return;
    }

    const from = songs.findIndex((song) => song._id === draggedId);
    const to = songs.findIndex((song) => song._id === targetSongId);

    if (from !== -1 && to !== -1) {
      const reordered = [...songs];
      const [moved] = reordered.splice(from, 1);
      reordered.splice(to, 0, moved);

      reorderSongs(
        playlist._id,
        reordered.map((song) => song._id),
      );
    }

    setDraggedId(null);
    setDragOverId(null);
  };

  const handleRemoveSong = async (song: (typeof songs)[number]) => {
    try {
      await removeSong(playlist._id, song._id);
      onNotify("success", `Removed "${song.title}" from "${playlist.name}"`);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to remove song";
      onNotify("error", message);
    }
  };

  const handlePlayAll = () => {
    const first = songs.find(
      (song) => song.providerUrl || song.spotifyUrl,
    );

    if (!first) {
      onNotify("error", "No playable songs in this playlist");
      return;
    }

    window.open(
      first.providerUrl ?? first.spotifyUrl!,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <BackButton type="button" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to Playlists
      </BackButton>

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <Hero>
        <Cover>
          <PlaylistCover image={playlist.image} songs={songs} />
        </Cover>

        <Info>
          <PlaylistLabel>Playlist</PlaylistLabel>

          <Title>{playlist.name}</Title>

          {playlist.description && (
            <Description>{playlist.description}</Description>
          )}

          <VisibilityBadge $public={playlist.isPublished}>
            {playlist.isPublished ? <Globe size={12} /> : <Lock size={12} />}
            {playlist.isPublished ? "Public" : "Private"}
          </VisibilityBadge>

          <StatsRow>
            <StatBox>
              <StatValue>{songs.length}</StatValue>
              <StatLabel>Songs</StatLabel>
            </StatBox>

            <StatBox>
              <StatValue>{uniqueArtists.length}</StatValue>
              <StatLabel>Artists</StatLabel>
            </StatBox>

            <StatBox>
              <StatValue>{uniqueAlbums.length}</StatValue>
              <StatLabel>Albums</StatLabel>
            </StatBox>
          </StatsRow>

          <Actions>
            <PrimaryButton type="button" onClick={handlePlayAll}>
              <Play size={16} fill="currentColor" />
              Play All
            </PrimaryButton>

            <GhostButton type="button" onClick={() => setAddSongsOpen(true)}>
              <Plus size={16} />
              Add Songs
            </GhostButton>

            <GhostButton type="button" onClick={() => setEditOpen(true)}>
              <Pencil size={15} />
              Edit
            </GhostButton>

            <DangerButton type="button" onClick={() => setDeleteOpen(true)}>
              <Trash2 size={15} />
              Delete
            </DangerButton>
          </Actions>
        </Info>
      </Hero>

      {/* ═══════════════════════════════════════════
          SONG TABLE
      ═══════════════════════════════════════════ */}
      {songs.length === 0 ? (
        <EmptySongs>
          <ListMusic size={42} style={{ opacity: 0.5 }} />
          <EmptySongsTitle>This playlist is empty</EmptySongsTitle>
          <EmptySongsText>
            Add songs from your library to start building this playlist.
          </EmptySongsText>
          <AddSongsButton type="button" onClick={() => setAddSongsOpen(true)}>
            <Plus size={15} />
            Add Songs
          </AddSongsButton>
        </EmptySongs>
      ) : (
        <>
          <SongTableHeader>
            <SongTableHeaderNum>#</SongTableHeaderNum>
            <SongTableHeaderTitle>Title</SongTableHeaderTitle>
            <SongTableHeaderLinks>YouTube</SongTableHeaderLinks>
            <SongTableHeaderLinks>Spotify</SongTableHeaderLinks>
          </SongTableHeader>

          {songs.map((song, index) => (
            <PlaylistSongRow
              key={song._id}
              song={song}
              index={index}
              isDragging={draggedId === song._id}
              isDragOver={dragOverId === song._id}
              onDragStart={setDraggedId}
              onDragOver={setDragOverId}
              onDrop={handleDrop}
              onDragEnd={() => {
                setDraggedId(null);
                setDragOverId(null);
              }}
              onRemove={handleRemoveSong}
            />
          ))}

          <DragHint>Drag songs to reorder them</DragHint>
        </>
      )}

      {/* ═══════════════════════════════════════════
          MODALS
      ═══════════════════════════════════════════ */}
      {addSongsOpen && (
        <AddSongsModal
          playlist={playlist}
          onClose={() => setAddSongsOpen(false)}
          onNotify={onNotify}
        />
      )}

      {editOpen && (
        <EditPlaylistModal
          playlist={playlist}
          onClose={() => setEditOpen(false)}
          onNotify={onNotify}
        />
      )}

      {deleteOpen && (
        <DeletePlaylistModal
          playlist={playlist}
          onClose={() => setDeleteOpen(false)}
          onNotify={onNotify}
        />
      )}
    </>
  );
};

export default PlaylistDetails;
