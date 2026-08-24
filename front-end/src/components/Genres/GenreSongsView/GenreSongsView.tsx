import { Music2, Play, ArrowLeft } from "lucide-react";

import type { Song } from "../../../types/song.types";
import type { Genre } from "../../../types/genre.types";

import { useSongStore } from "../../../store/song.store";

import SongDetailsModal from "../../songs/SongDetailsModal/SongDetailsModal";

import {
  Container,
  BackButton,
  GenreHero,
  GenreTitle,
  GenreMeta,
  SongList,
  SongRow,
  Artwork,
  ArtworkPlaceholder,
  SongInfo,
  SongTitle,
  SongArtist,
  SongAlbum,
  PlayButton,
  EmptyState,
  EmptyIcon,
} from "./GenreSongsView.styles";

interface GenreSongsViewProps {
  genre: Genre;
  songs: Song[];
  onBack: () => void;
}

const GenreSongsView = ({ genre, songs, onBack }: GenreSongsViewProps) => {
  const { openSongDetails } = useSongStore();

  return (
    <Container>
      <BackButton type="button" onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back to Genres</span>
      </BackButton>

      <GenreHero>
        <GenreTitle>{genre.name}</GenreTitle>
        <GenreMeta>
          {songs.length} {songs.length === 1 ? "song" : "songs"}
        </GenreMeta>
      </GenreHero>

      {songs.length === 0 ? (
        <EmptyState>
          <EmptyIcon>
            <Music2 size={28} />
          </EmptyIcon>
          <p>No songs in this genre yet.</p>
        </EmptyState>
      ) : (
        <SongList>
          {songs.map((song, index) => (
            <SongRow key={song._id} onClick={() => openSongDetails(song)}>
              <span className="song-index">{index + 1}</span>

              <Artwork>
                {song.image ? (
                  <img src={song.image} alt={song.title} loading="lazy" />
                ) : (
                  <ArtworkPlaceholder>
                    <Music2 size={18} />
                  </ArtworkPlaceholder>
                )}
              </Artwork>

              <SongInfo>
                <SongTitle>{song.title}</SongTitle>
                <SongArtist>{song.artistId?.name}</SongArtist>
              </SongInfo>

              <SongAlbum>{song.albumId?.name || "—"}</SongAlbum>

              <PlayButton>
                <Play size={16} fill="currentColor" />
              </PlayButton>
            </SongRow>
          ))}
        </SongList>
      )}

      <SongDetailsModal hideActions />
    </Container>
  );
};

export default GenreSongsView;
