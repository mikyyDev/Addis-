import { AlertTriangle, X } from "lucide-react";

import type { Genre } from "../../../types/genre.types";

import {
  Overlay,
  Modal,
  IconWrapper,
  Header,
  Title,
  Message,
  GenreName,
  Actions,
  CancelButton,
  DeleteButton,
  CloseButton,
} from "./DeleteGenreModal.styles";

interface GenreDeleteModalProps {
  open: boolean;
  genre: Genre | null;
  loading?: boolean;

  onClose: () => void;
  onConfirm: () => void;
}

const GenreDeleteModal = ({
  open,
  genre,
  loading = false,
  onClose,
  onConfirm,
}: GenreDeleteModalProps) => {
  if (!open || !genre) {
    return null;
  }

  return (
    <Overlay onMouseDown={onClose}>
      <Modal
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <CloseButton
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          <X size={18} />
        </CloseButton>

        <IconWrapper>
          <AlertTriangle size={24} />
        </IconWrapper>

        <Header>
          <Title>Delete Genre?</Title>

          <Message>
            Are you sure you want to delete{" "}
            <GenreName>"{genre.name}"</GenreName>?
          </Message>

          <Message>This action cannot be undone.</Message>
        </Header>

        <Actions>
          <CancelButton type="button" onClick={onClose} disabled={loading}>
            Cancel
          </CancelButton>

          <DeleteButton type="button" onClick={onConfirm} disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </DeleteButton>
        </Actions>
      </Modal>
    </Overlay>
  );
};

export default GenreDeleteModal;
