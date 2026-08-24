import { AlertTriangle } from "lucide-react";

import { useArtistStore } from "../../../store/artist.store";

import {
  Overlay,
  Modal,
  IconWrapper,
  Title,
  Message,
  ArtistName,
  Actions,
  CancelButton,
  DeleteButton,
} from "./DeleteArtistModal.styles";

const ArtistDeleteModal = () => {
  const {
    selectedArtist,
    isDeleteModalOpen,
    closeDeleteModal,
    deleteArtist,
    loading,
  } = useArtistStore();

  if (!isDeleteModalOpen || !selectedArtist) {
    return null;
  }

  const handleDelete = async () => {
    await deleteArtist(selectedArtist._id);
  };

  return (
    <Overlay>
      <Modal>
        <IconWrapper>
          <AlertTriangle size={28} />
        </IconWrapper>

        <Title>Delete Artist?</Title>

        <Message>
          Are you sure you want to delete
          <ArtistName>{selectedArtist.name}</ArtistName>?
        </Message>

        <Message>This action cannot be undone.</Message>

        <Actions>
          <CancelButton type="button" onClick={closeDeleteModal}>
            Cancel
          </CancelButton>

          <DeleteButton type="button" onClick={handleDelete} disabled={loading}>
            {loading ? "Deleting..." : "Delete Artist"}
          </DeleteButton>
        </Actions>
      </Modal>
    </Overlay>
  );
};

export default ArtistDeleteModal;
