import { useState } from "react";

import { Mic2, Users, ExternalLink } from "lucide-react";

import type { LastFMArtist } from "../../../types/lastfm.types";

import {
  Card,
  ImageWrapper,
  ImagePlaceholder,
  Content,
  ArtistName,
  Listeners,
  OpenButton,
} from "./ArtistCard.styles";

interface ArtistCardProps {
  artist: LastFMArtist;
  onOpen: (artist: LastFMArtist) => void;
}

const ArtistCard = ({ artist, onOpen }: ArtistCardProps) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = artist.image && !imageError;

  const formatListeners = (value?: string): string | null => {
    if (!value) {
      return null;
    }

    const number = Number(value);

    if (Number.isNaN(number)) {
      return value;
    }

    if (number >= 1_000_000) {
      return `${(number / 1_000_000).toFixed(1)}M listeners`;
    }

    if (number >= 1_000) {
      return `${(number / 1_000).toFixed(1)}K listeners`;
    }

    return `${number} listeners`;
  };

  const listeners = formatListeners(artist.listeners);

  return (
    <Card>
      <ImageWrapper>
        {hasImage ? (
          <img
            src={artist.image!}
            alt={artist.name}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImagePlaceholder>
            <Mic2 size={34} />
          </ImagePlaceholder>
        )}
      </ImageWrapper>

      <Content>
        <ArtistName title={artist.name}>{artist.name}</ArtistName>

        {listeners && (
          <Listeners>
            <Users size={11} style={{ marginRight: 4, verticalAlign: -1 }} />
            {listeners}
          </Listeners>
        )}

        <OpenButton type="button" onClick={() => onOpen(artist)}>
          <ExternalLink size={13} />
          <span>View Artist</span>
        </OpenButton>
      </Content>
    </Card>
  );
};

export default ArtistCard;
