import { ListMusic } from "lucide-react";

import type { PlaylistSong } from "../../../types/playlist.types";

import {
  Cover,
  Collage,
  CollageCell,
  Placeholder,
} from "./PlaylistCover.styles";

interface PlaylistCoverProps {
  image?: string | null;
  songs?: PlaylistSong[];
}

const PlaylistCover = ({ image, songs = [] }: PlaylistCoverProps) => {
  /*
   * 1. Explicit cover image.
   */
  if (image) {
    return (
      <Cover>
        <img src={image} alt="" loading="lazy" />
      </Cover>
    );
  }

  /*
   * 2. 2x2 collage from the first four song artworks.
   */
  const artwork = songs
    .map((song) => song.image)
    .filter((img): img is string => Boolean(img))
    .slice(0, 4);

  if (artwork.length > 0) {
    const cells = Array.from({ length: 4 }, (_, index) => artwork[index] ?? null);

    return (
      <Cover>
        <Collage>
          {cells.map((src, index) => (
            <CollageCell key={index} filled={Boolean(src)}>
              {src ? <img src={src} alt="" loading="lazy" /> : null}
            </CollageCell>
          ))}
        </Collage>
      </Cover>
    );
  }

  /*
   * 3. Gradient placeholder.
   */
  return (
    <Cover>
      <Placeholder>
        <ListMusic size={44} />
      </Placeholder>
    </Cover>
  );
};

export default PlaylistCover;
