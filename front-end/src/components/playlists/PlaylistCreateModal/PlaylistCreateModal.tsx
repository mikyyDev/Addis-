import { useState } from "react";

import { X, Loader, ListPlus, Globe, Lock } from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import {
  Backdrop,
  Panel,
  Header,
  Title,
  CloseButton,
  Field,
  Label,
  Input,
  Textarea,
  ErrorText,
  Actions,
  Button,
} from "../PlaylistModal/PlaylistModal.styles";

import {
  VisibilityToggle,
  VisibilityOption,
} from "./PlaylistCreateModal.styles";

interface PlaylistCreateModalProps {
  onClose: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const PlaylistCreateModal = ({ onClose, onNotify }: PlaylistCreateModalProps) => {
  const { createPlaylist } = usePlaylistStore();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Playlist name is required");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      await createPlaylist({
        name: name.trim(),
        description: description.trim() || undefined,
        image: image.trim() || undefined,
        isPublished,
      });

      onNotify("success", `Playlist "${name.trim()}" created!`);
      onClose();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to create playlist";
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
          <Title>Create Playlist</Title>

          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </CloseButton>
        </Header>

        <form onSubmit={handleSubmit}>
          <Field>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ethiopian Hits"
              autoFocus
            />
          </Field>

          <Field>
            <Label>Description (Optional)</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="My favorite Ethiopian songs..."
            />
          </Field>

          <Field>
            <Label>Cover Image URL (Optional)</Label>
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
            />
          </Field>

          <Field>
            <Label>Visibility</Label>
            <VisibilityToggle>
              <VisibilityOption
                active={!isPublished}
                type="button"
                onClick={() => setIsPublished(false)}
              >
                <Lock size={14} />
                Private
              </VisibilityOption>
              <VisibilityOption
                active={isPublished}
                type="button"
                onClick={() => setIsPublished(true)}
              >
                <Globe size={14} />
                Public
              </VisibilityOption>
            </VisibilityToggle>
          </Field>

          {error && <ErrorText>{error}</ErrorText>}

          <Actions>
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? <Loader size={14} /> : <ListPlus size={15} />}
              {submitting ? "Creating..." : "Create"}
            </Button>
          </Actions>
        </form>
      </Panel>
    </Backdrop>
  );
};

export default PlaylistCreateModal;
