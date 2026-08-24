import { AlertTriangle, X } from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import {
  Overlay,
  Modal,
  CloseButton,
  IconContainer,
  Title,
  Message,
  Actions,
  CancelButton,
  DeleteButton,
} from "./DeleteSongModal.styles";

const DeleteSongModal = () => {
  const { selectedSong, selectSong, deleteSong } = useSongStore();

  if (!selectedSong) {
    return null;
  }

  const handleClose = () => {
    selectSong(null);
  };

  const handleDelete = async () => {
    try {
      await deleteSong(selectedSong._id);

      selectSong(null);
    } catch (error) {
      console.error("Failed to delete song:", error);
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={handleClose} aria-label="Close">
          <X size={20} />
        </CloseButton>

        <IconContainer>
          <AlertTriangle size={24} />
        </IconContainer>

        <Title>Delete "{selectedSong.title}"?</Title>

        <Message>
          This will remove the song from your library and from every playlist
          that contains it.
        </Message>

        <Actions>
          <CancelButton type="button" onClick={handleClose}>
            Cancel
          </CancelButton>

          <DeleteButton type="button" onClick={handleDelete}>
            Delete Song
          </DeleteButton>
        </Actions>
      </Modal>
    </Overlay>
  );
};

export default DeleteSongModal;
