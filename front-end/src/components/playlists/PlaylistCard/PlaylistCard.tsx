import { Play, ListMusic } from "lucide-react";

import type { Playlist } from "../../../types/playlist.types";

import {
  Card,
  CoverImage,
  GradientOverlay,
  PlaceholderBg,
  Content,
  Title,
  Description,
  BottomRow,
  SongCountBadge,
  DateText,
  PlayOverlay,
} from "./PlaylistCard.styles";

interface PlaylistCardProps {
  playlist: Playlist;
  onOpen: (playlist: Playlist) => void;
}

const PlaylistCard = ({ playlist, onOpen }: PlaylistCardProps) => {
  const songCount = playlist.songs?.length ?? 0;

  const formattedDate = new Date(playlist.createdAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" },
  );

  const hasImage =
    typeof playlist.image === "string" && playlist.image.trim().length > 0;

  return (
    <Card onClick={() => onOpen(playlist)}>
      {hasImage ? (
        <>
          <CoverImage src={playlist.image!} alt="" loading="lazy" />
          <GradientOverlay />
        </>
      ) : (
        <PlaceholderBg>
          <ListMusic size={48} />
        </PlaceholderBg>
      )}

      <PlayOverlay className="play-overlay">
        <Play size={22} fill="currentColor" />
      </PlayOverlay>

      <Content>
        <Title title={playlist.name}>{playlist.name}</Title>

        {playlist.description && (
          <Description title={playlist.description}>
            {playlist.description}
          </Description>
        )}

        <BottomRow>
          <SongCountBadge>
            {songCount} {songCount === 1 ? "song" : "songs"}
          </SongCountBadge>

          <DateText>{formattedDate}</DateText>
        </BottomRow>
      </Content>
    </Card>
  );
};

export default PlaylistCard;
