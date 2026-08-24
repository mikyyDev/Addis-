import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useArtistStore } from "../../../store/artist.store";

import {
  Form,
  FormGroup,
  Label,
  Input,
  ErrorText,
  Actions,
  CancelButton,
  SubmitButton,
} from "./ArtistForm.styles";

interface ArtistFormData {
  name: string;
  image: string;
}

const ArtistForm = () => {
  const {
    selectedArtist,
    createArtist,
    updateArtist,
    closeCreateModal,
    closeEditModal,
    loading,
  } = useArtistStore();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ArtistFormData>({
    defaultValues: {
      name: "",
      image: "",
    },
  });

  const imageUrl = useWatch({
    control,
    name: "image",
  });

  useEffect(() => {
    if (selectedArtist) {
      reset({
        name: selectedArtist.name,
        image: selectedArtist.image ?? "",
      });
    } else {
      reset({
        name: "",
        image: "",
      });
    }
  }, [selectedArtist, reset]);

  const onSubmit = async (data: ArtistFormData) => {
    const name = data.name.trim();
    const image = data.image.trim();

    if (!name) return;

    try {
      if (selectedArtist) {
        await updateArtist(selectedArtist._id, {
          name,
          image: image || undefined,
        });
      } else {
        await createArtist({
          name,
          image: image || undefined,
        });
      }
    } catch (error) {
      // The store handles and displays the error.
      console.error("Failed to save artist:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="artist-name">Artist Name</Label>

        <Input
          id="artist-name"
          type="text"
          placeholder="Enter artist name"
          {...register("name", {
            required: "Artist name is required",
          })}
        />

        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="artist-image">Artist Image</Label>

        <Input
          id="artist-image"
          type="url"
          placeholder="https://example.com/artist.jpg"
          {...register("image", {
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif)(?:\?.*)?)$/i,
              message: "Enter a valid image URL",
            },
          })}
        />

        {errors.image && <ErrorText>{errors.image.message}</ErrorText>}
      </FormGroup>

      {imageUrl && (
        <div
          style={{
            width: "100%",
            height: "180px",
            marginTop: "8px",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            alt="Artist preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <Actions>
        <CancelButton
          type="button"
          onClick={selectedArtist ? closeEditModal : closeCreateModal}
          disabled={loading}
        >
          Cancel
        </CancelButton>

        <SubmitButton type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : selectedArtist
              ? "Update Artist"
              : "Add Artist"}
        </SubmitButton>
      </Actions>
    </Form>
  );
};

export default ArtistForm;
