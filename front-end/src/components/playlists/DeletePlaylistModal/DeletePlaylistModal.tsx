import { useState } from "react";

import { X, Loader, Trash2 } from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import type { Playlist } from "../../../types/playlist.types";

import {
  Backdrop,
  Panel,
  Header,
  Title,
  CloseButton,
  Note,
  Actions,
  Button,
  ErrorText,
} from "../PlaylistModal/PlaylistModal.styles";

interface DeletePlaylistModalProps {
  playlist: Playlist;
  onClose: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const DeletePlaylistModal = ({
  playlist,
  onClose,
  onNotify,
}: DeletePlaylistModalProps) => {
  const { deletePlaylist } = usePlaylistStore();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const songCount = playlist.songs?.length ?? 0;

  const handleDelete = async () => {
    setError("");
    setSubmitting(true);

    try {
      await deletePlaylist(playlist._id);

      onNotify("success", `Playlist "${playlist.name}" deleted`);
      onClose();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to delete playlist";
      setError(message);
      onNotify("error", message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Backdrop onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Delete playlist?</Title>

          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </CloseButton>
        </Header>

        <Note>
          <strong>"{playlist.name}"</strong> contains {songCount}{" "}
          {songCount === 1 ? "song" : "songs"}.
        </Note>

        <Note>
          Deleting the playlist will <strong>not</strong> delete the songs from
          your library.
        </Note>

        {error && <ErrorText>{error}</ErrorText>}

        <Actions>
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>

          <Button
            type="button"
            variant="danger"
            disabled={submitting}
            onClick={handleDelete}
          >
            {submitting ? <Loader size={14} /> : <Trash2 size={15} />}
            {submitting ? "Deleting..." : "Delete"}
          </Button>
        </Actions>
      </Panel>
    </Backdrop>
  );
};

export default DeletePlaylistModal;
