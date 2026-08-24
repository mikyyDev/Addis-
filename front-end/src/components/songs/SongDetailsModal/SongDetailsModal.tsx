import {
  X,
  Video,
  Music2,
  ExternalLink,
  ListMusic,
  Pencil,
  Trash2,
  Mic2,
  Disc3,
  Tag,
  Calendar,
} from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import {
  getYouTubeUrl,
  getSpotifyUrl,
  getLastFmUrl,
  formatAddedDate,
} from "../../../utils/musicLinks";

import {
  Overlay,
  Modal,
  Hero,
  CloseButton,
  Artwork,
  Title,
  Artist,
  SourceRow,
  YoutubeLink,
  SpotifyLink,
  LastFmLink,
  Body,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  Actions,
  PlaylistButton,
  EditButton,
  DeleteButton,
} from "./SongDetailsModal.styles";

interface SongDetailsModalProps {
  hideActions?: boolean;
}

const SongDetailsModal = ({ hideActions = false }: SongDetailsModalProps) => {
  const {
    viewingSong,
    closeSongDetails,
    openAddToPlaylist,
    openEditSong,
    selectSong,
  } = useSongStore();

  if (!viewingSong) {
    return null;
  }

  const song = viewingSong;

  const handleClose = () => {
    closeSongDetails();
  };

  return (
    <Overlay onMouseDown={handleClose}>
      <Modal onMouseDown={(event) => event.stopPropagation()}>
        <Hero>
          <CloseButton type="button" onClick={handleClose} aria-label="Close">
            <X size={20} />
          </CloseButton>

          <Artwork src={song.image} alt={song.title} />

          <Title>{song.title}</Title>

          <Artist>{song.artistId?.name || "Unknown Artist"}</Artist>

          <SourceRow>
            <YoutubeLink
              href={getYouTubeUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video size={16} />
              YouTube
            </YoutubeLink>

            <SpotifyLink
              href={getSpotifyUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music2 size={16} />
              Spotify
            </SpotifyLink>

            <LastFmLink
              href={getLastFmUrl(song)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Last.fm
            </LastFmLink>
          </SourceRow>
        </Hero>

        <Body>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>
                <Mic2 size={13} />
                Artist
              </InfoLabel>

              <InfoValue>{song.artistId?.name || "Unknown Artist"}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>
                <Disc3 size={13} />
                Album
              </InfoLabel>

              <InfoValue>{song.albumId?.name || "—"}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>
                <Tag size={13} />
                Genre
              </InfoLabel>

              <InfoValue>
                {song.genre?.length
                  ? song.genre.map((genre) => genre.name).join(", ")
                  : "—"}
              </InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>
                <Calendar size={13} />
                Added
              </InfoLabel>

              <InfoValue>{formatAddedDate(song.createdAt)}</InfoValue>
            </InfoItem>
          </InfoGrid>

          {!hideActions && (
            <Actions>
              <PlaylistButton
                type="button"
                onClick={() => {
                  closeSongDetails();
                  openAddToPlaylist(song);
                }}
              >
                <ListMusic size={17} />
                Add to Playlist
              </PlaylistButton>

              <EditButton
                type="button"
                onClick={() => {
                  closeSongDetails();
                  openEditSong(song);
                }}
              >
                <Pencil size={17} />
                Edit
              </EditButton>

              <DeleteButton
                type="button"
                onClick={() => {
                  closeSongDetails();
                  selectSong(song);
                }}
              >
                <Trash2 size={17} />
                Delete
              </DeleteButton>
            </Actions>
          )}
        </Body>
      </Modal>
    </Overlay>
  );
};

export default SongDetailsModal;
