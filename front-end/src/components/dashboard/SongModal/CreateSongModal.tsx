import { X } from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import SongForm from "./SongForm";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
} from "./CreateSongModal.styles";

const CreateSongModal = () => {
  const { isCreateSongModalOpen, closeCreateSongModal } = useSongStore();

  if (!isCreateSongModalOpen) return null;

  return (
    <Overlay onClick={closeCreateSongModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add New Song</Title>

          <CloseButton onClick={closeCreateSongModal}>
            <X size={22} />
          </CloseButton>
        </Header>

        <SongForm />
      </Modal>
    </Overlay>
  );
};

export default CreateSongModal;
