import { Play } from "lucide-react";

import type { Song } from "../../../types/song.types";

import { useSongStore } from "../../../store/song.store";

import SongActionsMenu from "../SongActionsMenu/SongActionsMenu";

import {
  Row,
  IndexCell,
  IndexNumber,
  IndexPlay,
  SongCell,
  Thumb,
  Title,
  Artist,
  Album,
  GenreBadges,
  GenreBadge,
  Duration,
  Actions,
} from "./SongRow.styles";

interface Props {
  song: Song;
  index: number;
}

const SongRow = ({ song, index }: Props) => {
  const { openSongDetails } = useSongStore();

  return (
    <Row className="song-row" onClick={() => openSongDetails(song)}>
      <IndexCell>
        <IndexNumber>{index + 1}</IndexNumber>

        <IndexPlay>
          <Play size={14} fill="currentColor" />
        </IndexPlay>
      </IndexCell>

      <SongCell>
        <Thumb
          src={song.image || "/images/song-placeholder.jpg"}
          alt={song.title}
        />

        <Title title={song.title}>{song.title}</Title>
      </SongCell>

      <Artist title={song.artistId?.name || ""}>
        {song.artistId?.name || "Unknown Artist"}
      </Artist>

      <Album title={song.albumId?.name || ""}>
        {song.albumId?.name || "—"}
      </Album>

      <GenreBadges>
        {(song.genre ?? []).slice(0, 2).map((genre) => (
          <GenreBadge key={genre._id}>{genre.name}</GenreBadge>
        ))}
      </GenreBadges>

      <Duration>—</Duration>

      <Actions onClick={(event) => event.stopPropagation()}>
        <SongActionsMenu song={song} />
      </Actions>
    </Row>
  );
};

export default SongRow;
