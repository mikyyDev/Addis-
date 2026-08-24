import { Play, MoreHorizontal, Music2 } from "lucide-react";

import type { Song } from "../../../../types/song.types";

import { usePlayerStore } from "../../../../store/player.store";

import {
  Row,
  SongInfo,
  Cover,
  SongDetails,
  SongTitle,
  Artist,
  Album,
  Genre,
  Actions,
  ActionButton,
} from "./SongRow.styles";

interface Props {
  song: Song;
}

const SongRow = ({ song }: Props) => {
  const { setCurrentSong } = usePlayerStore();

  return (
    <Row className="dashboard-song-row">
      <SongInfo>
        <Cover>
          {song.image ? (
            <img src={song.image} alt={song.title} />
          ) : (
            <Music2 size={20} />
          )}
        </Cover>

        <SongDetails>
          <SongTitle>{song.title}</SongTitle>
          <Artist>{song.artistId?.name}</Artist>
        </SongDetails>
      </SongInfo>

      <Album>{song.albumId?.name || "—"}</Album>

      <Genre>{song.genre?.map((item) => item.name).join(", ") || "—"}</Genre>

      <Actions>
        <ActionButton
          onClick={() => setCurrentSong(song)}
          title="Play"
        >
          <Play size={15} fill="currentColor" />
        </ActionButton>

        <ActionButton title="More options">
          <MoreHorizontal size={15} />
        </ActionButton>
      </Actions>
    </Row>
  );
};

export default SongRow;
