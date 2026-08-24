import { AlertTriangle } from "lucide-react";

import { useAlbumStore } from "../../../store/album.store";

import {
  Overlay,
  Modal,
  IconWrapper,
  Title,
  Message,
  AlbumName,
  Actions,
  CancelButton,
  DeleteButton,
} from "./DeleteAlbumModal.styles";

const DeleteAlbumModal = () => {
  const {
    selectedAlbum,
    isDeleteModalOpen,
    closeDeleteModal,
    deleteAlbum,
    loading,
  } = useAlbumStore();

  if (!isDeleteModalOpen || !selectedAlbum) {
    return null;
  }

  const handleDelete = async () => {
    await deleteAlbum(selectedAlbum._id);
  };

  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeDeleteModal();
        }
      }}
    >
      <Modal>
        <IconWrapper>
          <AlertTriangle size={26} />
        </IconWrapper>

        <Title>Delete Album?</Title>

        <Message>
          Are you sure you want to delete{" "}
          <AlbumName>"{selectedAlbum.name}"</AlbumName>? This action cannot be
          undone.
        </Message>

        <Actions>
          <CancelButton
            type="button"
            onClick={closeDeleteModal}
            disabled={loading}
          >
            Cancel
          </CancelButton>

          <DeleteButton type="button" onClick={handleDelete} disabled={loading}>
            {loading ? "Deleting..." : "Delete Album"}
          </DeleteButton>
        </Actions>
      </Modal>
    </Overlay>
  );
};

export default DeleteAlbumModal;
