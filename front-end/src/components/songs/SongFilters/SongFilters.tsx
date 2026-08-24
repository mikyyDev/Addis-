import { useMemo } from "react";

import { useSongStore } from "../../../store/song.store";

import type { SongSortBy } from "../../../store/song.store";

import {
  Toolbar,
  Filters,
  Select,
  Right,
  ResultCount,
} from "./SongFilters.styles";

const SORT_OPTIONS: { value: SongSortBy; label: string }[] = [
  { value: "recent", label: "Recently Added" },
  { value: "title-asc", label: "Song Name A → Z" },
  { value: "title-desc", label: "Song Name Z → A" },
  { value: "artist-asc", label: "Artist A → Z" },
  { value: "artist-desc", label: "Artist Z → A" },
];

const SongFilters = ({ count }: { count: number }) => {
  const {
    songs,
    artistFilter,
    albumFilter,
    genreFilter,
    sortBy,
    setArtistFilter,
    setAlbumFilter,
    setGenreFilter,
    setSortBy,
  } = useSongStore();

  const options = useMemo(() => {
    const artists = new Map<string, string>();
    const albums = new Map<string, string>();
    const genres = new Map<string, string>();

    for (const song of songs) {
      if (song.artistId?._id) {
        artists.set(song.artistId._id, song.artistId.name);
      }

      if (song.albumId?._id) {
        albums.set(song.albumId._id, song.albumId.name);
      }

      for (const genre of song.genre ?? []) {
        if (genre?._id) {
          genres.set(genre._id, genre.name);
        }
      }
    }

    const sort = (map: Map<string, string>) =>
      [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));

    return {
      artists: sort(artists),
      albums: sort(albums),
      genres: sort(genres),
    };
  }, [songs]);

  return (
    <Toolbar>
      <Filters>
        <Select
          value={artistFilter}
          onChange={(event) => setArtistFilter(event.target.value)}
          aria-label="Filter by artist"
        >
          <option value="">All Artists</option>

          {options.artists.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>

        <Select
          value={albumFilter}
          onChange={(event) => setAlbumFilter(event.target.value)}
          aria-label="Filter by album"
        >
          <option value="">All Albums</option>

          {options.albums.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>

        <Select
          value={genreFilter}
          onChange={(event) => setGenreFilter(event.target.value)}
          aria-label="Filter by genre"
        >
          <option value="">All Genres</option>

          {options.genres.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>

        <Select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value as SongSortBy)}
          aria-label="Sort songs"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Filters>

      <Right>
        <ResultCount>
          {count} {count === 1 ? "song" : "songs"}
        </ResultCount>
      </Right>
    </Toolbar>
  );
};

export default SongFilters;
