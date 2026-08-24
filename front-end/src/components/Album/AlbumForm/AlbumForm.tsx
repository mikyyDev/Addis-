import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useAlbumStore } from "../../../store/album.store";
import { useArtistStore } from "../../../store/artist.store";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ErrorText,
  Actions,
  CancelButton,
  SubmitButton,
  ServerError,
} from "./AlbumForm.styles";

interface AlbumFormData {
  name: string;
  releaseYear: string;
  artistId: string;
  image: string;
}

const AlbumForm = () => {
  const {
    selectedAlbum,
    createAlbum,
    updateAlbum,
    closeCreateModal,
    closeEditModal,
    loading,
    error,
  } = useAlbumStore();

  const { artists, fetchArtists } = useArtistStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AlbumFormData>({
    defaultValues: {
      name: "",
      releaseYear: "",
      artistId: "",
      image: "",
    },
  });

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  useEffect(() => {
    if (selectedAlbum) {
      reset({
        name: selectedAlbum.name,

        releaseYear: selectedAlbum.releaseYear?.toString() ?? "",

        artistId: selectedAlbum.artistId?._id ?? "",

        image: selectedAlbum.image ?? "",
      });
    } else {
      reset({
        name: "",
        releaseYear: "",
        artistId: "",
        image: "",
      });
    }
  }, [selectedAlbum, reset]);

  const onSubmit = async (data: AlbumFormData) => {
    const name = data.name.trim();

    const image = data.image.trim();

    if (!name || !data.artistId) {
      return;
    }

    const releaseYear = data.releaseYear ? Number(data.releaseYear) : undefined;

    const payload = {
      name,

      artistId: data.artistId,

      ...(releaseYear !== undefined && {
        releaseYear,
      }),

      ...(image && {
        image,
      }),
    };

    if (selectedAlbum) {
      await updateAlbum(selectedAlbum._id, payload);

      return;
    }

    await createAlbum(payload);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <ServerError>{error}</ServerError>}

      <FormGroup>
        <Label htmlFor="album-name">Album Name</Label>

        <Input
          id="album-name"
          type="text"
          placeholder="Enter album name"
          {...register("name", {
            required: "Album name is required",
          })}
        />

        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="album-artist">Artist</Label>

        <Select
          id="album-artist"
          {...register("artistId", {
            required: "Please select an artist",
          })}
        >
          <option value="">Select an artist</option>

          {artists.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {artist.name}
            </option>
          ))}
        </Select>

        {errors.artistId && <ErrorText>{errors.artistId.message}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="release-year">Release Year</Label>

        <Input
          id="release-year"
          type="number"
          placeholder="e.g. 2024"
          min="1900"
          max="2100"
          {...register("releaseYear")}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="album-image">Album Image URL</Label>

        <Input
          id="album-image"
          type="url"
          placeholder="https://example.com/album.jpg"
          {...register("image")}
        />
      </FormGroup>

      <Actions>
        <CancelButton
          type="button"
          onClick={selectedAlbum ? closeEditModal : closeCreateModal}
          disabled={loading}
        >
          Cancel
        </CancelButton>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Saving..." : selectedAlbum ? "Update Album" : "Add Album"}
        </SubmitButton>
      </Actions>
    </Form>
  );
};

export default AlbumForm;
