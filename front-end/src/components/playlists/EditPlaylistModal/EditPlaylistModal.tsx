import { useState } from "react";

import { X, Loader, Save, Globe, Lock } from "lucide-react";

import { usePlaylistStore } from "../../../store/playlist.store";

import type { Playlist } from "../../../types/playlist.types";

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
} from "./EditPlaylistModal.styles";

interface EditPlaylistModalProps {
  playlist: Playlist;
  onClose: () => void;
  onNotify: (type: "success" | "error", message: string) => void;
}

const EditPlaylistModal = ({
  playlist,
  onClose,
  onNotify,
}: EditPlaylistModalProps) => {
  const { updatePlaylist } = usePlaylistStore();

  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description ?? "");
  const [image, setImage] = useState(playlist.image ?? "");
  const [isPublished, setIsPublished] = useState(playlist.isPublished);
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
      await updatePlaylist(playlist._id, {
        name: name.trim(),
        description: description.trim() || undefined,
        image: image.trim() || null,
        isPublished,
      });

      onNotify("success", "Playlist updated!");
      onClose();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to update playlist";
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
          <Title>Edit Playlist</Title>

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
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="My favorite Ethiopian songs..."
            />
          </Field>

          <Field>
            <Label>Cover Image URL</Label>
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
              {submitting ? <Loader size={14} /> : <Save size={15} />}
              {submitting ? "Saving..." : "Save Changes"}
            </Button>
          </Actions>
        </form>
      </Panel>
    </Backdrop>
  );
};

export default EditPlaylistModal;
