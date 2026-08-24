import { useState } from "react";
import { X } from "lucide-react";

import type { Genre } from "../../../types/genre.types";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  Form,
  Label,
  Input,
  ErrorMessage,
  Actions,
  CancelButton,
  SubmitButton,
} from "./GenreModal.styles";

interface GenreModalProps {
  open: boolean;
  genre?: Genre | null;
  loading?: boolean;
  error?: string | null;

  onClose: () => void;
  onSubmit: (name: string) => void;
}

const GenreModal = ({
  open,
  genre,
  loading = false,
  error = null,
  onClose,
  onSubmit,
}: GenreModalProps) => {
  const [name, setName] = useState(genre?.name ?? "");

  const isEditing = Boolean(genre);

  if (!open) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    onSubmit(trimmedName);
  };

  return (
    <Overlay onMouseDown={onClose}>
      <Modal
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        <Header>
          <Title>{isEditing ? "Edit Genre" : "Add Genre"}</Title>

          <CloseButton
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            disabled={loading}
          >
            <X size={19} />
          </CloseButton>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="genre-name">Genre name</Label>

          <Input
            id="genre-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Ethiopian"
            autoFocus
            disabled={loading}
            maxLength={50}
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Actions>
            <CancelButton type="button" onClick={onClose} disabled={loading}>
              Cancel
            </CancelButton>

            <SubmitButton type="submit" disabled={loading || !name.trim()}>
              {loading
                ? "Saving..."
                : isEditing
                  ? "Save Changes"
                  : "Create Genre"}
            </SubmitButton>
          </Actions>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default GenreModal;
