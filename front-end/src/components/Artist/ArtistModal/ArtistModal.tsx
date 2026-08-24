import { X } from "lucide-react";

import { useArtistStore } from "../../../store/artist.store";

import ArtistForm from "../ArtistForm/ArtistForm";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  Body,
} from "./ArtistModal.styles";

const ArtistModal = () => {
  const {
    isCreateModalOpen,
    isEditModalOpen,
    selectedArtist,
    closeCreateModal,
    closeEditModal,
  } = useArtistStore();

  const isOpen = isCreateModalOpen || isEditModalOpen;
  const closeModal = selectedArtist ? closeEditModal : closeCreateModal;

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={closeModal}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Header>
          <Title>{selectedArtist ? "Edit Artist" : "Add Artist"}</Title>

          <CloseButton
            type="button"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={20} />
          </CloseButton>
        </Header>

        <Body>
          <ArtistForm />
        </Body>
      </Modal>
    </Overlay>
  );
};

export default ArtistModal;
