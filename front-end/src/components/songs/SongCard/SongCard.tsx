import { ListMusic, Video, Music2, ExternalLink } from "lucide-react";

import type { Song } from "../../../types/song.types";

import { useSongStore } from "../../../store/song.store";

import {
  getYouTubeUrl,
  getSpotifyUrl,
  getLastFmUrl,
} from "../../../utils/musicLinks";

import SongActionsMenu from "../SongActionsMenu/SongActionsMenu";

import {
  Card,
  CoverWrap,
  CoverImage,
  Content,
  Title,
  Artist,
  Info,
  Badge,
  Actions,
  LeftActions,
  PlaylistButton,
  LinkButton,
} from "./SongCard.styles";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  const { openSongDetails, openAddToPlaylist } = useSongStore();

  return (
    <Card onClick={() => openSongDetails(song)}>
      <CoverWrap>
        <CoverImage src={song.image} alt={song.title} />
      </CoverWrap>

      <Content>
        <Title>{song.title}</Title>

        <Artist>{song.artistId?.name || "Unknown Artist"}</Artist>

        <Info>
          {song.albumId?.name && <Badge>{song.albumId.name}</Badge>}

          {(song.genre ?? []).slice(0, 2).map((genre) => (
            <Badge key={genre._id}>{genre.name}</Badge>
          ))}
        </Info>

        <Actions onClick={(event) => event.stopPropagation()}>
          <LeftActions>
            <PlaylistButton
              type="button"
              onClick={() => openAddToPlaylist(song)}
            >
              <ListMusic size={15} />
              Playlist
            </PlaylistButton>

            <LinkButton
              href={getYouTubeUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open on YouTube"
            >
              <Video size={17} />
            </LinkButton>

            <LinkButton
              href={getSpotifyUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open on Spotify"
            >
              <Music2 size={17} />
            </LinkButton>

            <LinkButton
              href={getLastFmUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open on Last.fm"
            >
              <ExternalLink size={16} />
            </LinkButton>
          </LeftActions>

          <SongActionsMenu song={song} />
        </Actions>
      </Content>
    </Card>
  );
};

export default SongCard;
