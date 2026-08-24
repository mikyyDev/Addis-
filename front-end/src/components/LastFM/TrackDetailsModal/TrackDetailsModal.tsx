import { useEffect, useState } from "react";

import { X, Music2, Check, Plus, Video, ExternalLink, Disc3 } from "lucide-react";

import type { LastFMTrack } from "../../../types/lastfm.types";

import { useLastFMStore } from "../../../store/lastfm.store";

import AddToLibraryModal from "../AddToLibraryModal/AddToLibraryModal";

import {
  Backdrop,
  Panel,
  PanelShell,
  CloseButton,
  HeroArtwork,
  ArtworkPlaceholder,
  TrackHeader,
  Title,
  ArtistButton,
  AlbumChip,
  Divider,
  InLibraryBadge,
  PrimaryButton,
  SectionTitle,
  SourceGrid,
  SourceButton,
} from "./TrackDetailsModal.styles";

interface TrackDetailsModalProps {
  track: LastFMTrack;
  onSaveSuccess?: (message: string) => void;
  onSaveError?: (message: string) => void;
}

const TrackDetailsModal = ({
  track,
  onSaveSuccess,
  onSaveError,
}: TrackDetailsModalProps) => {
  const [imageError, setImageError] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const { isInLibrary, closeTrackDetail, fetchArtistDetail } =
    useLastFMStore();

  const inLibrary = isInLibrary(track.artist, track.title);

  const openUrl = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeTrackDetail();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeTrackDetail]);

  return (
    <Backdrop onClick={closeTrackDetail}>
      <PanelShell>
        <Panel onClick={(event) => event.stopPropagation()}>
          <CloseButton type="button" onClick={closeTrackDetail} aria-label="Close">
            <X size={18} />
          </CloseButton>

          <HeroArtwork>
            {track.image && !imageError ? (
              <img
                src={track.image}
                alt={`${track.title} by ${track.artist}`}
                onError={() => setImageError(true)}
              />
            ) : (
              <ArtworkPlaceholder>
                <Music2 size={60} />
              </ArtworkPlaceholder>
            )}
          </HeroArtwork>

          <TrackHeader>
            <Title>{track.title}</Title>

            <ArtistButton
              type="button"
              onClick={() => fetchArtistDetail(track.artist)}
            >
              {track.artist}
            </ArtistButton>

            {track.album && (
              <AlbumChip>
                <Disc3 size={13} />
                <span>{track.album}</span>
              </AlbumChip>
            )}
          </TrackHeader>

          <Divider />

          {inLibrary ? (
            <InLibraryBadge>
              <Check size={15} />
              <span>Already in your library</span>
            </InLibraryBadge>
          ) : (
            <PrimaryButton
              type="button"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={16} />
              <span>Import to Library</span>
            </PrimaryButton>
          )}

          <Divider />

          <SectionTitle>Listen on</SectionTitle>

          <SourceGrid>
            <SourceButton
              type="button"
              onClick={() => openUrl(track.youtubeSearchUrl)}
            >
              <Video size={20} />
              <span>YouTube</span>
            </SourceButton>

            <SourceButton
              type="button"
              onClick={() => openUrl(track.spotifySearchUrl)}
            >
              <Music2 size={20} />
              <span>Spotify</span>
            </SourceButton>

            <SourceButton
              type="button"
              onClick={() => openUrl(track.lastfmUrl)}
            >
              <ExternalLink size={20} />
              <span>Last.fm</span>
            </SourceButton>
          </SourceGrid>
        </Panel>

        {showAddModal && (
          <AddToLibraryModal
            track={track}
            onClose={() => setShowAddModal(false)}
            onSuccess={(message) => {
              onSaveSuccess?.(message);
              setShowAddModal(false);
              closeTrackDetail();
            }}
            onError={(message) => {
              onSaveError?.(message);
            }}
          />
        )}
      </PanelShell>
    </Backdrop>
  );
};

export default TrackDetailsModal;
