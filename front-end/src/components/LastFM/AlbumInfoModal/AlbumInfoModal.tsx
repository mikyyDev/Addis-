import { useEffect, useState } from "react";

import { X, Disc3, ExternalLink, Video, Loader2, Calendar } from "lucide-react";

import { useLastFMStore } from "../../../store/lastfm.store";

import {
  Backdrop,
  Panel,
  CloseButton,
  Header,
  Artwork,
  ArtworkPlaceholder,
  Title,
  ArtistButton,
  Meta,
  LastFmLink,
  SectionTitle,
  TrackList,
  TrackItem,
  TrackNumber,
  TrackName,
  TrackDuration,
  TrackAction,
  CenterState,
  EmptyTracks,
} from "./AlbumInfoModal.styles";

const formatDuration = (seconds: string | undefined): string | null => {
  if (!seconds) {
    return null;
  }

  const total = Number(seconds);

  if (Number.isNaN(total) || total <= 0) {
    return null;
  }

  const minutes = Math.floor(total / 60);
  const rest = Math.floor(total % 60);

  return `${minutes}:${rest.toString().padStart(2, "0")}`;
};

const AlbumInfoModal = () => {
  const [imageError, setImageError] = useState(false);

  const {
    albumDetail,
    albumDetailLoading,
    albumDetailError,
    closeAlbumDetail,
    fetchArtistDetail,
  } = useLastFMStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAlbumDetail();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAlbumDetail]);

  return (
    <Backdrop onClick={closeAlbumDetail}>
      <Panel onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={closeAlbumDetail} aria-label="Close">
          <X size={18} />
        </CloseButton>

        {albumDetailLoading && (
          <CenterState>
            <Loader2 size={28} style={{ animation: "spin 0.8s linear infinite" }} />
          </CenterState>
        )}

        {!albumDetailLoading && albumDetailError && (
          <CenterState>
            <div style={{ textAlign: "center" }}>
              <Disc3 size={36} style={{ marginBottom: 12, opacity: 0.5 }} />
              <p>{albumDetailError}</p>
            </div>
          </CenterState>
        )}

        {!albumDetailLoading && albumDetail && (
          <>
            <Header>
              <Artwork>
                {albumDetail.image && !imageError ? (
                  <img
                    src={albumDetail.image}
                    alt={albumDetail.name}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <ArtworkPlaceholder>
                    <Disc3 size={48} />
                  </ArtworkPlaceholder>
                )}
              </Artwork>

              <div style={{ flex: 1, minWidth: 0 }}>
                <Title>{albumDetail.name}</Title>

                <ArtistButton
                  type="button"
                  onClick={() => {
                    closeAlbumDetail();
                    fetchArtistDetail(albumDetail.artist);
                  }}
                >
                  {albumDetail.artist}
                </ArtistButton>

                {albumDetail.releasedate && (
                  <Meta>
                    <Calendar size={12} style={{ marginRight: 4, verticalAlign: -1 }} />
                    Released {albumDetail.releasedate}
                  </Meta>
                )}

                <LastFmLink
                  href={albumDetail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={13} />
                  View on Last.fm
                </LastFmLink>
              </div>
            </Header>

            <SectionTitle>
              Tracks ({albumDetail.tracks.length})
            </SectionTitle>

            {albumDetail.tracks.length === 0 ? (
              <EmptyTracks>
                No track list is available for this album on Last.fm.
              </EmptyTracks>
            ) : (
              <TrackList>
                {albumDetail.tracks.map((track, index) => (
                  <TrackItem key={`${track.name}-${index}`}>
                    <TrackNumber>{index + 1}</TrackNumber>

                    <TrackName title={track.name}>{track.name}</TrackName>

                    {formatDuration(track.duration) && (
                      <TrackDuration>
                        {formatDuration(track.duration)}
                      </TrackDuration>
                    )}

                    <TrackAction
                      type="button"
                      title="Search on YouTube"
                      onClick={() =>
                        window.open(
                          `https://www.youtube.com/results?search_query=${encodeURIComponent(
                            `${track.name} ${albumDetail.artist}`,
                          )}`,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      <Video size={14} />
                    </TrackAction>

                    <TrackAction
                      type="button"
                      title="Open on Last.fm"
                      onClick={() =>
                        track.url &&
                        window.open(track.url, "_blank", "noopener,noreferrer")
                      }
                    >
                      <ExternalLink size={14} />
                    </TrackAction>
                  </TrackItem>
                ))}
              </TrackList>
            )}
          </>
        )}
      </Panel>
    </Backdrop>
  );
};

export default AlbumInfoModal;
