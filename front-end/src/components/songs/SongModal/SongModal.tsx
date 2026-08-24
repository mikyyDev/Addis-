import { X } from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import SongForm from "../SongForm/SongForm";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  Body,
} from "./SongModal.styles";

const SongModal = () => {
  const {
    isCreateSongModalOpen,
    editingSong,
    closeCreateSongModal,
  } = useSongStore();

  if (!isCreateSongModalOpen) {
    return null;
  }

  const isEditing = Boolean(editingSong);

  const handleClose = () => {
    closeCreateSongModal();
  };

  return (
    <Overlay onMouseDown={handleClose}>
      <Modal onMouseDown={(event) => event.stopPropagation()}>
        <Header>
          <Title>
            {isEditing ? "Edit Song" : "Add Song"}
          </Title>

          <CloseButton
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </CloseButton>
        </Header>

        <Body>
          <SongForm />
        </Body>
      </Modal>
    </Overlay>
  );
};

export default SongModal;