import { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { createSongSchema, type CreateSongSchema } from "./song.schema";

import { useSongStore } from "../../../store/song.store";
import { useArtistStore } from "../../../store/artist.store";
import { useAlbumStore } from "../../../store/album.store";
import { useGenreStore } from "../../../store/genre.store";
import { usePlaylistStore } from "../../../store/playlist.store";

import GenreMultiSelect from "./GenreMultiSelect";

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
} from "./SongForm.styles";

const SongForm = () => {
  const { createSong, updateSong, closeCreateSongModal, editingSong, loading } =
    useSongStore();

  const { artists, fetchArtists } = useArtistStore();

  const { albums, fetchAlbums } = useAlbumStore();

  const { genres, fetchGenres } = useGenreStore();

  const { playlists, fetchPlaylists } = usePlaylistStore();

  const isEditing = Boolean(editingSong);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateSongSchema>({
    resolver: zodResolver(createSongSchema),

    defaultValues: {
      title: "",
      artistId: "",
      albumId: "",
      genre: [],
      spotifyUrl: "",
      providerUrl: "",
      lastfmUrl: "",
      image: "",
      playlistId: "",
    },
  });

  /*
   * Load all data required by the select fields.
   */
  useEffect(() => {
    fetchArtists();
    fetchAlbums();
    fetchGenres();
    fetchPlaylists();
  }, [fetchArtists, fetchAlbums, fetchGenres, fetchPlaylists]);

  /*
   * Populate the form when editing.
   */
  useEffect(() => {
    if (!editingSong) {
      reset({
        title: "",
        artistId: "",
        albumId: "",
        genre: [],
        spotifyUrl: "",
        providerUrl: "",
        lastfmUrl: "",
        image: "",
        playlistId: "",
      });

      return;
    }

    const artistId =
      typeof editingSong.artistId === "string"
        ? editingSong.artistId
        : (editingSong.artistId?._id ?? "");

    const albumId =
      typeof editingSong.albumId === "string"
        ? editingSong.albumId
        : (editingSong.albumId?._id ?? "");

    const genreIds = Array.isArray(editingSong.genre)
      ? editingSong.genre
          .map((genre) => (typeof genre === "string" ? genre : genre?._id))
          .filter((id): id is string => typeof id === "string")
      : [];

    const playlistId =
      typeof editingSong.playlistId === "string"
        ? editingSong.playlistId
        : (editingSong.playlistId?._id ?? "");

    reset({
      title: editingSong.title ?? "",

      artistId,

      albumId,

      genre: genreIds,

      spotifyUrl: editingSong.spotifyUrl ?? "",

      providerUrl: editingSong.providerUrl ?? "",

      lastfmUrl: editingSong.lastfmUrl ?? "",

      image: editingSong.image ?? "",

      playlistId,
    });
  }, [editingSong, reset]);

  /*
   * Submit
   */
  const onSubmit = async (data: CreateSongSchema) => {
    const payload = {
      title: data.title,
      artistId: data.artistId,
      albumId: data.albumId,
      genre: data.genre,
      ...(data.spotifyUrl ? { spotifyUrl: data.spotifyUrl } : {}),
      ...(data.providerUrl ? { providerUrl: data.providerUrl } : {}),
      ...(data.lastfmUrl ? { lastfmUrl: data.lastfmUrl } : {}),
      ...(data.image ? { image: data.image } : {}),
      ...(data.playlistId ? { playlistId: data.playlistId } : {}),
    };

    if (isEditing && editingSong) {
      await updateSong(editingSong._id, payload);
    } else {
      await createSong(payload);
    }

    reset();

    closeCreateSongModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* TITLE */}

      <FormGroup>
        <Label htmlFor="title">Song Title</Label>

        <Input
          id="title"
          type="text"
          placeholder="Enter song title"
          {...register("title")}
        />

        {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
      </FormGroup>

      {/* ARTIST */}

      <FormGroup>
        <Label htmlFor="artistId">Artist</Label>

        <Controller
          name="artistId"
          control={control}
          render={({ field }) => (
            <Select id="artistId" value={field.value} onChange={field.onChange}>
              <option value="">Select Artist</option>

              {artists.map((artist) => (
                <option key={artist._id} value={artist._id}>
                  {artist.name}
                </option>
              ))}
            </Select>
          )}
        />

        {errors.artistId && <ErrorText>{errors.artistId.message}</ErrorText>}
      </FormGroup>

      {/* ALBUM */}

      <FormGroup>
        <Label htmlFor="albumId">Album</Label>

        <Controller
          name="albumId"
          control={control}
          render={({ field }) => (
            <Select id="albumId" value={field.value} onChange={field.onChange}>
              <option value="">Select Album</option>

              {albums.map((album) => (
                <option key={album._id} value={album._id}>
                  {album.name}
                </option>
              ))}
            </Select>
          )}
        />

        {errors.albumId && <ErrorText>{errors.albumId.message}</ErrorText>}
      </FormGroup>

      {/* GENRES */}

      <FormGroup>
        <Label>Genres</Label>

        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <GenreMultiSelect
              genres={genres}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        {errors.genre && <ErrorText>{errors.genre.message}</ErrorText>}
      </FormGroup>

      {/* SPOTIFY */}

      <FormGroup>
        <Label htmlFor="spotifyUrl">Spotify URL</Label>

        <Input
          id="spotifyUrl"
          type="url"
          placeholder="https://open.spotify.com/..."
          {...register("spotifyUrl")}
        />

        {errors.spotifyUrl && (
          <ErrorText>{errors.spotifyUrl.message}</ErrorText>
        )}
      </FormGroup>

      {/* YOUTUBE */}

      <FormGroup>
        <Label htmlFor="providerUrl">YouTube URL</Label>

        <Input
          id="providerUrl"
          type="url"
          placeholder="https://www.youtube.com/..."
          {...register("providerUrl")}
        />

        {errors.providerUrl && (
          <ErrorText>{errors.providerUrl.message}</ErrorText>
        )}
      </FormGroup>

      {/* LAST.FM */}

      <FormGroup>
        <Label htmlFor="lastfmUrl">Last.fm URL</Label>

        <Input
          id="lastfmUrl"
          type="url"
          placeholder="https://www.last.fm/music/..."
          {...register("lastfmUrl")}
        />

        {errors.lastfmUrl && <ErrorText>{errors.lastfmUrl.message}</ErrorText>}
      </FormGroup>

      {/* IMAGE */}

      <FormGroup>
        <Label htmlFor="image">Cover Image URL</Label>

        <Input
          id="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          {...register("image")}
        />

        {errors.image && <ErrorText>{errors.image.message}</ErrorText>}
      </FormGroup>

      {/* PLAYLIST */}

      <FormGroup>
        <Label htmlFor="playlistId">Playlist</Label>

        <Controller
          name="playlistId"
          control={control}
          render={({ field }) => (
            <Select
              id="playlistId"
              value={field.value ?? ""}
              onChange={field.onChange}
            >
              <option value="">No Playlist</option>

              {playlists.map((playlist) => (
                <option key={playlist._id} value={playlist._id}>
                  {playlist.name}
                </option>
              ))}
            </Select>
          )}
        />

        {errors.playlistId && (
          <ErrorText>{errors.playlistId.message}</ErrorText>
        )}
      </FormGroup>

      {/* ACTIONS */}

      <Actions>
        <CancelButton
          type="button"
          onClick={closeCreateSongModal}
          disabled={loading}
        >
          Cancel
        </CancelButton>

        <SubmitButton type="submit" disabled={loading}>
          {loading
            ? isEditing
              ? "Updating..."
              : "Creating..."
            : isEditing
              ? "Update Song"
              : "Create Song"}
        </SubmitButton>
      </Actions>
    </Form>
  );
};

export default SongForm;
