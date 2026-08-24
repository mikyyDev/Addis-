import { useEffect, useState } from "react";

import { X, ListMusic, Check } from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import { usePlaylistStore } from "../../../store/playlist.store";

import {
  Overlay,
  Modal,
  Header,
  Title,
  Subtitle,
  CloseButton,
  List,
  PlaylistItem,
  Checkbox,
  Thumb,
  PlaceholderThumb,
  ItemInfo,
  ItemName,
  ItemCount,
  AddedBadge,
  Empty,
  Footer,
  CancelButton,
  AddButton,
} from "./AddToPlaylistModal.styles";

interface Props {
  onNotify: (type: "success" | "error", message: string) => void;
}

const AddToPlaylistModal = ({ onNotify }: Props) => {
  const { playlistTarget, closeAddToPlaylist, addSongToPlaylists } =
    useSongStore();

  const { playlists, fetchPlaylists, loading } = usePlaylistStore();

  const [selected, setSelected] = useState<string[]>([]);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (playlistTarget) {
      fetchPlaylists();
    }
  }, [playlistTarget, fetchPlaylists]);

  if (!playlistTarget) {
    return null;
  }

  const songId = playlistTarget._id;

  const existingPlaylistIds = new Set(
    playlists
      .filter((playlist) =>
        playlist.songs.some((playlistSong) => playlistSong._id === songId),
      )
      .map((playlist) => playlist._id),
  );

  const toggle = (playlistId: string) => {
    setSelected((current) =>
      current.includes(playlistId)
        ? current.filter((id) => id !== playlistId)
        : [...current, playlistId],
    );
  };

  const handleClose = () => {
    closeAddToPlaylist();
  };

  const handleAdd = async () => {
    const toAdd = selected.filter((id) => !existingPlaylistIds.has(id));

    if (!toAdd.length) {
      return;
    }

    try {
      setSaving(true);

      await addSongToPlaylists(songId, toAdd);

      onNotify(
        "success",
        `Added "${playlistTarget.title}" to ${toAdd.length} ${
          toAdd.length === 1 ? "playlist" : "playlists"
        }`,
      );
    } catch (error) {
      onNotify(
        "error",
        error instanceof Error ? error.message : "Failed to add song to playlist",
      );
    } finally {
      setSaving(false);

      closeAddToPlaylist();
    }
  };

  return (
    <Overlay onMouseDown={handleClose}>
      <Modal onMouseDown={(event) => event.stopPropagation()}>
        <Header>
          <div>
            <Title>Add to Playlist</Title>

            <Subtitle>
              Add <strong>"{playlistTarget.title}"</strong> to:
            </Subtitle>
          </div>

          <CloseButton type="button" onClick={handleClose} aria-label="Close">
            <X size={20} />
          </CloseButton>
        </Header>

        <List>
          {loading && !playlists.length ? (
            <Empty>Loading your playlists...</Empty>
          ) : playlists.length === 0 ? (
            <Empty>
              <ListMusic size={28} style={{ marginBottom: 8 }} />
              <br />
              No playlists yet — create one on the Playlists page first.
            </Empty>
          ) : (
            playlists.map((playlist) => {
              const alreadyAdded = existingPlaylistIds.has(playlist._id);

              const checked = alreadyAdded || selected.includes(playlist._id);

              return (
                <PlaylistItem
                  key={playlist._id}
                  style={{
                    cursor: alreadyAdded ? "default" : "pointer",
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    disabled={alreadyAdded}
                    onChange={() => toggle(playlist._id)}
                  />

                  {playlist.image ? (
                    <Thumb src={playlist.image} alt={playlist.name} />
                  ) : (
                    <PlaceholderThumb>
                      {playlist.name.slice(0, 2).toUpperCase()}
                    </PlaceholderThumb>
                  )}

                  <ItemInfo>
                    <ItemName>{playlist.name}</ItemName>

                    <ItemCount>
                      {playlist.songs.length}{" "}
                      {playlist.songs.length === 1 ? "song" : "songs"}
                    </ItemCount>
                  </ItemInfo>

                  {alreadyAdded && (
                    <AddedBadge>
                      <Check size={12} style={{ marginRight: 3 }} />
                      Added
                    </AddedBadge>
                  )}
                </PlaylistItem>
              );
            })
          )}
        </List>

        <Footer>
          <CancelButton type="button" onClick={handleClose}>
            Cancel
          </CancelButton>

          <AddButton
            type="button"
            disabled={saving || selected.length === 0}
            onClick={handleAdd}
          >
            {saving ? "Adding..." : "Add"}
          </AddButton>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default AddToPlaylistModal;
