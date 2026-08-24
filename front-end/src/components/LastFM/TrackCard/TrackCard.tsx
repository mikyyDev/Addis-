import {
  ExternalLink,
  Play,
  Music2,
  Video,
  Heart,
  Plus,
  Check,
} from "lucide-react";

import { useState } from "react";

import type { LastFMTrack } from "../../../types/lastfm.types";

import { useLastFMStore } from "../../../store/lastfm.store";

import AddToLibraryModal from "../AddToLibraryModal/AddToLibraryModal";

import {
  Row,
  IndexNumber,
  ArtworkWrapper,
  ArtworkOverlay,
  ImagePlaceholder,
  TrackInfo,
  TrackTitle,
  TrackArtist,
  LibraryBadge,
  Actions,
  IconButton,
  FavoriteButton,
  ImportButton,
  SourceMenu,
  SourceMenuItem,
  SourceDivider,
  RowRelative,
} from "./TrackCard.styles";

interface TrackCardProps {
  track: LastFMTrack;
  index?: number;
  onSaveSuccess?: (message: string) => void;
  onSaveError?: (message: string) => void;
}

const TrackCard = ({
  track,
  index = 0,
  onSaveSuccess,
  onSaveError,
}: TrackCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    isFavorite,
    addFavorite,
    removeFavorite,
    isInLibrary,
    openTrackDetail,
    fetchArtistDetail,
  } = useLastFMStore();

  const inLibrary = isInLibrary(track.artist, track.title);

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isFavorite(track.id)) {
      removeFavorite(track.id);
    } else {
      addFavorite(track);
    }
  };

  const handleAddToLibraryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (inLibrary) {
      return;
    }

    setShowModal(true);
  };

  const openUrl = (url: string | null | undefined) => {
    if (!url) {
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");

    setMenuOpen(false);
  };

  const hasImage =
    typeof track.image === "string" &&
    track.image.trim().length > 0 &&
    !imageError;

  return (
    <>
      <Row>
        <RowRelative>
          <IndexNumber>{index + 1}</IndexNumber>

          <ArtworkWrapper onClick={() => openTrackDetail(track)}>
            {hasImage ? (
              <img
                src={track.image!}
                alt={`${track.title} by ${track.artist}`}
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <ImagePlaceholder>
                <Music2 size={22} />
              </ImagePlaceholder>
            )}

            <ArtworkOverlay>
              <Play size={18} fill="#fff" color="#fff" />
            </ArtworkOverlay>
          </ArtworkWrapper>

          <TrackInfo>
            <TrackTitle onClick={() => openTrackDetail(track)}>
              {track.title}
            </TrackTitle>

            <TrackArtist
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fetchArtistDetail(track.artist);
              }}
            >
              {track.artist}
            </TrackArtist>

            {inLibrary && (
              <LibraryBadge>
                <Check size={10} />
                In Library
              </LibraryBadge>
            )}
          </TrackInfo>

          <Actions>
            <FavoriteButton
              type="button"
              $active={isFavorite(track.id)}
              onClick={handleFavoriteToggle}
              aria-label={
                isFavorite(track.id) ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Heart
                size={14}
                fill={isFavorite(track.id) ? "currentColor" : "none"}
              />
            </FavoriteButton>

            <ImportButton
              type="button"
              $inLibrary={inLibrary}
              onClick={handleAddToLibraryClick}
              disabled={inLibrary}
            >
              {inLibrary ? (
                <>
                  <Check size={13} />
                  <span>In Library</span>
                </>
              ) : (
                <>
                  <Plus size={13} />
                  <span>Import</span>
                </>
              )}
            </ImportButton>

            <div style={{ position: "relative" }}>
              <IconButton
                type="button"
                onClick={() => setMenuOpen((p) => !p)}
                aria-label="Open links"
              >
                <Play size={14} fill="currentColor" />
              </IconButton>

              {menuOpen && (
                <>
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 29 }}
                    onClick={() => setMenuOpen(false)}
                  />
                  <SourceMenu>
                    <SourceMenuItem
                      type="button"
                      onClick={() => openUrl(track.youtubeSearchUrl)}
                    >
                      <Video size={15} />
                      <span>Open with YouTube</span>
                    </SourceMenuItem>

                    <SourceDivider />

                    <SourceMenuItem
                      type="button"
                      onClick={() => openUrl(track.spotifySearchUrl)}
                    >
                      <Music2 size={15} />
                      <span>Open with Spotify</span>
                    </SourceMenuItem>

                    <SourceDivider />

                    <SourceMenuItem
                      type="button"
                      onClick={() => openUrl(track.lastfmUrl)}
                    >
                      <ExternalLink size={15} />
                      <span>Open on Last.fm</span>
                    </SourceMenuItem>
                  </SourceMenu>
                </>
              )}
            </div>
          </Actions>
        </RowRelative>
      </Row>

      {showModal && (
        <AddToLibraryModal
          track={track}
          onClose={() => setShowModal(false)}
          onSuccess={(message) => {
            onSaveSuccess?.(message);
            setShowModal(false);
          }}
          onError={(message) => {
            onSaveError?.(message);
          }}
        />
      )}
    </>
  );
};

export default TrackCard;
