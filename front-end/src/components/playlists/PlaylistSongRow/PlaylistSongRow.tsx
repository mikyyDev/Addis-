import { Music2 } from "lucide-react";

import type { PlaylistSong } from "../../../types/playlist.types";

import {
  Row,
  IndexCell,
  TitleCell,
  Thumb,
  ThumbPlaceholder,
  Info,
  SongTitle,
  SongArtist,
  LinksCell,
  YtButton,
  SpButton,
  NoLinkText,
} from "./PlaylistSongRow.styles";

interface PlaylistSongRowProps {
  song: PlaylistSong;
  index: number;
  isDragging: boolean;
  isDragOver: boolean;
  onDragStart: (songId: string) => void;
  onDragOver: (songId: string) => void;
  onDrop: (targetSongId: string) => void;
  onDragEnd: () => void;
  onRemove: (song: PlaylistSong) => void;
}

const PlaylistSongRow = ({
  song,
  index,
  isDragging,
  isDragOver,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}: PlaylistSongRowProps) => {
  const artistName = song.artistId?.name ?? "Unknown artist";
  const albumName = song.albumId?.name ?? "";

  return (
    <Row
      draggable
      isDragging={isDragging}
      isDragOver={isDragOver}
      onDragStart={() => onDragStart(song._id)}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(song._id);
      }}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(song._id);
      }}
      onDragEnd={onDragEnd}
    >
      <IndexCell>{index + 1}</IndexCell>

      <TitleCell>
        <Thumb>
          {song.image ? (
            <img src={song.image} alt="" loading="lazy" />
          ) : (
            <ThumbPlaceholder>
              <Music2 size={16} />
            </ThumbPlaceholder>
          )}
        </Thumb>

        <Info>
          <SongTitle title={song.title}>{song.title}</SongTitle>
          <SongArtist title={`${artistName}${albumName ? ` · ${albumName}` : ""}`}>
            {artistName}
            {albumName && ` · ${albumName}`}
          </SongArtist>
        </Info>
      </TitleCell>

      <LinksCell>
        {song.providerUrl ? (
          <YtButton
            href={song.providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ▶ YT
          </YtButton>
        ) : (
          <NoLinkText>—</NoLinkText>
        )}
      </LinksCell>

      <LinksCell>
        {song.spotifyUrl ? (
          <SpButton
            href={song.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ● SP
          </SpButton>
        ) : (
          <NoLinkText>—</NoLinkText>
        )}
      </LinksCell>
    </Row>
  );
};

export default PlaylistSongRow;
