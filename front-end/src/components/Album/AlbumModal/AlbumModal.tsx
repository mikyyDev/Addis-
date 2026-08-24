import { X } from "lucide-react";

import { useAlbumStore } from "../../../store/album.store";

import AlbumForm from "../AlbumForm/AlbumForm";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
} from "./AlbumModal.styles";

const AlbumModal = () => {
  const {
    isCreateModalOpen,
    isEditModalOpen,
    selectedAlbum,
    closeCreateModal,
    closeEditModal,
  } = useAlbumStore();

  const isOpen = isCreateModalOpen || isEditModalOpen;

  if (!isOpen) {
    return null;
  }

  const isEditing = Boolean(selectedAlbum) && isEditModalOpen;

  const handleClose = () => {
    if (isEditing) {
      closeEditModal();
    } else {
      closeCreateModal();
    }
  };

  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <Modal>
        <Header>
          <Title>{isEditing ? "Edit Album" : "Add Album"}</Title>

          <CloseButton type="button" onClick={handleClose}>
            <X size={20} />
          </CloseButton>
        </Header>

        <AlbumForm />
      </Modal>
    </Overlay>
  );
};

export default AlbumModal;
