import type { Song } from "../../../types/song.types";

import SongRow from "../SongRow/SongRow";

import {
  List,
  ListHeader,
  HeaderIndex,
  HeaderSong,
  HeaderArtist,
  HeaderAlbum,
  HeaderGenre,
  HeaderDuration,
  HeaderActions,
} from "./SongListView.styles";

interface Props {
  songs: Song[];
}

const SongListView = ({ songs }: Props) => {
  return (
    <List>
      <ListHeader>
        <HeaderIndex>#</HeaderIndex>

        <HeaderSong>Song</HeaderSong>

        <HeaderArtist>Artist</HeaderArtist>

        <HeaderAlbum>Album</HeaderAlbum>

        <HeaderGenre>Genre</HeaderGenre>

        <HeaderDuration>Duration</HeaderDuration>

        <HeaderActions />
      </ListHeader>

      {songs.map((song, index) => (
        <SongRow key={song._id} song={song} index={index} />
      ))}
    </List>
  );
};

export default SongListView;
