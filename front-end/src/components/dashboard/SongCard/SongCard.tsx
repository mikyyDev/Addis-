import { Play } from "lucide-react";

import type { Song } from "../../../types/song.types";
import { usePlayerStore } from "../../../store/player.store";

import {
  Card,
  Cover,
  Overlay,
  PlayButton,
  Title,
  Artist,
} from "./SongCard.styles";

interface SongCardProps {
  song: Song;
}

const SongCard = ({ song }: SongCardProps) => {
  const { setCurrentSong } = usePlayerStore();

  return (
    <Card onClick={() => setCurrentSong(song)}>
      <Cover src={song.image} alt={song.title} />

      <Overlay>
        <PlayButton>
          <Play size={20} fill="white" />
        </PlayButton>
      </Overlay>

      <Title>{song.title}</Title>

      <Artist>{song.artistId.name}</Artist>
    </Card>
  );
};

export default SongCard;
