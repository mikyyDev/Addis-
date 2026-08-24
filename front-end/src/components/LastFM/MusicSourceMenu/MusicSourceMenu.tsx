import { ExternalLink, Music2, Video } from "lucide-react";

import type { LastFMTrack } from "../../../types/lastfm.types";

import {
  Backdrop,
  Menu,
  Title,
  Subtitle,
  SourceButton,
  SourceIcon,
  SourceContent,
  SourceName,
  SourceDescription,
  CloseButton,
} from "./MusicSourceMenu.styles";

interface MusicSourceMenuProps {
  track: LastFMTrack;
  onClose: () => void;
}

const MusicSourceMenu = ({ track, onClose }: MusicSourceMenuProps) => {
  const openSource = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");

    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <Menu
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <CloseButton type="button" onClick={onClose}>
          ×
        </CloseButton>

        <Title>Open with</Title>

        <Subtitle>
          Choose where you want to find
          <strong> {track.title}</strong>
        </Subtitle>

        <SourceButton
          type="button"
          onClick={() => openSource(track.youtubeSearchUrl)}
        >
          <SourceIcon>
            <Video size={22} />
          </SourceIcon>

          <SourceContent>
            <SourceName>YouTube</SourceName>

            <SourceDescription>Search and watch on YouTube</SourceDescription>
          </SourceContent>

          <ExternalLink size={17} />
        </SourceButton>

        <SourceButton
          type="button"
          onClick={() => openSource(track.spotifySearchUrl ?? "")}
        >
          <SourceIcon>
            <Music2 size={22} />
          </SourceIcon>

          <SourceContent>
            <SourceName>Spotify</SourceName>

            <SourceDescription>Search and listen on Spotify</SourceDescription>
          </SourceContent>

          <ExternalLink size={17} />
        </SourceButton>
      </Menu>
    </Backdrop>
  );
};

export default MusicSourceMenu;
