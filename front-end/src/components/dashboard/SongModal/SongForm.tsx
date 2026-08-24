import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createSongSchema, type CreateSongSchema } from "./song.schema";

import { useSongStore } from "../../../store/song.store";
import { useArtistStore } from "../../../store/artist.store";
import { useAlbumStore } from "../../../store/album.store";
import { useGenreStore } from "../../../store/genre.store";
import { usePlaylistStore } from "../../../store/playlist.store";

import SearchableSelect from "../../common/SearchableSelect/SearchableSelect";

import {
  Form,
  FormGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
} from "./SongForm.styles";

const SongForm = () => {
  const { createSong, closeCreateSongModal, loading } = useSongStore();

  const { artists, fetchArtists } = useArtistStore();
  const { albums, fetchAlbums } = useAlbumStore();
  const { genres, fetchGenres } = useGenreStore();
  const { playlists, fetchPlaylists } = usePlaylistStore();

  useEffect(() => {
    fetchArtists();
    fetchAlbums();
    fetchGenres();
    fetchPlaylists();
  }, [fetchArtists, fetchAlbums, fetchGenres, fetchPlaylists]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateSongSchema>({
    resolver: zodResolver(createSongSchema),
    defaultValues: {
      title: "",
      artistId: "",
      albumId: "",
      genre: "",
      spotifyUrl: "",
      image: "",
      playlistId: "",
    },
  });

  const onSubmit = async (data: CreateSongSchema) => {
    try {
      await createSong(data);

      alert("Song created successfully!");

      reset();

      setTimeout(() => {
        closeCreateSongModal();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Song Title</Label>

        <Input {...register("title")} />

        <ErrorText>{errors.title?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Artist</Label>

        <Controller
          control={control}
          name="artistId"
          render={({ field }) => (
            <SearchableSelect
              value={field.value}
              onChange={field.onChange}
              placeholder="Choose Artist"
              options={artists.map((artist) => ({
                label: artist.name,
                value: artist._id,
              }))}
            />
          )}
        />

        <ErrorText>{errors.artistId?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Album</Label>

        <Controller
          control={control}
          name="albumId"
          render={({ field }) => (
            <SearchableSelect
              value={field.value}
              onChange={field.onChange}
              placeholder="Choose Album"
              options={albums.map((album) => ({
                label: album.name,
                value: album._id,
              }))}
            />
          )}
        />

        <ErrorText>{errors.albumId?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Genre</Label>

        <Controller
          control={control}
          name="genre"
          render={({ field }) => (
            <SearchableSelect
              value={field.value}
              onChange={field.onChange}
              placeholder="Choose Genre"
              options={genres.map((genre) => ({
                label: genre.name,
                value: genre._id,
              }))}
            />
          )}
        />

        <ErrorText>{errors.genre?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Spotify URL</Label>

        <Input {...register("spotifyUrl")} />

        <ErrorText>{errors.spotifyUrl?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Image URL</Label>

        <Input {...register("image")} />

        <ErrorText>{errors.image?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Playlist</Label>

        <Controller
          control={control}
          name="playlistId"
          render={({ field }) => (
            <SearchableSelect
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder="Select Playlist"
              options={playlists.map((playlist) => ({
                label: playlist.name,
                value: playlist._id,
              }))}
            />
          )}
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Song"}
      </SubmitButton>
    </Form>
  );
};

export default SongForm;
