import { useEffect, useState } from "react";

import {
  X,
  Mic2,
  Users,
  PlayCircle,
  ExternalLink,
  Video,
  Disc3,
  Loader2,
} from "lucide-react";

import { useLastFMStore } from "../../../store/lastfm.store";

import {
  Backdrop,
  Panel,
  CloseButton,
  Header,
  Avatar,
  AvatarPlaceholder,
  Title,
  Stats,
  Tags,
  Tag,
  LastFmLink,
  SectionTitle,
  Bio,
  TrackList,
  TrackItem,
  Rank,
  TrackName,
  TrackMeta,
  TrackAction,
  AlbumGrid,
  AlbumItem,
  AlbumPlaceholder,
  AlbumName,
  AlbumArtist,
  CenterState,
  ErrorBox,
} from "./ArtistInfoModal.styles";

const formatCount = (value: string | undefined): string | null => {
  if (!value) {
    return null;
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    return value;
  }

  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`;
  }

  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`;
  }

  return number.toString();
};

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

const ArtistInfoModal = () => {
  const [imageError, setImageError] = useState(false);

  const {
    artistDetail,
    artistDetailLoading,
    artistDetailError,
    closeArtistDetail,
    fetchAlbumDetail,
  } = useLastFMStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeArtistDetail();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeArtistDetail]);

  return (
    <Backdrop onClick={closeArtistDetail}>
      <Panel onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={closeArtistDetail} aria-label="Close">
          <X size={18} />
        </CloseButton>

        {artistDetailLoading && (
          <CenterState>
            <Loader2 size={28} style={{ animation: "spin 0.8s linear infinite" }} />
          </CenterState>
        )}

        {!artistDetailLoading && artistDetailError && (
          <>
            <CenterState>
              <div style={{ textAlign: "center" }}>
                <Mic2 size={36} style={{ marginBottom: 12, opacity: 0.5 }} />
                <ErrorBox>{artistDetailError}</ErrorBox>
                <p style={{ fontSize: 13, opacity: 0.7 }}>
                  This artist may not exist on Last.fm.
                </p>
              </div>
            </CenterState>
          </>
        )}

        {!artistDetailLoading && artistDetail && (
          <>
            <Header>
              <Avatar>
                {artistDetail.image && !imageError ? (
                  <img
                    src={artistDetail.image}
                    alt={artistDetail.name}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <AvatarPlaceholder>
                    <Mic2 size={40} />
                  </AvatarPlaceholder>
                )}
              </Avatar>

              <div style={{ flex: 1, minWidth: 0 }}>
                <Title>{artistDetail.name}</Title>

                <Stats>
                  {formatCount(artistDetail.listeners) && (
                    <span>
                      <Users size={13} />
                      {formatCount(artistDetail.listeners)} listeners
                    </span>
                  )}

                  {formatCount(artistDetail.playcount) && (
                    <span>
                      <PlayCircle size={13} />
                      {formatCount(artistDetail.playcount)} scrobbles
                    </span>
                  )}
                </Stats>

                {artistDetail.tags.length > 0 && (
                  <Tags>
                    {artistDetail.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                )}

                <LastFmLink
                  href={artistDetail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={13} />
                  View on Last.fm
                </LastFmLink>
              </div>
            </Header>

            {artistDetail.bio && <Bio>{artistDetail.bio}</Bio>}

            {artistDetail.topTracks.length > 0 && (
              <>
                <SectionTitle>Popular Tracks</SectionTitle>

                <TrackList>
                  {artistDetail.topTracks.map((track, index) => (
                    <TrackItem key={`${track.name}-${index}`}>
                      <Rank>{index + 1}</Rank>

                      <TrackName title={track.name}>{track.name}</TrackName>

                      {formatDuration(track.duration) && (
                        <TrackMeta>{formatDuration(track.duration)}</TrackMeta>
                      )}

                      {formatCount(track.playcount) && (
                        <TrackMeta>{formatCount(track.playcount)} plays</TrackMeta>
                      )}

                      <TrackAction
                        type="button"
                        title="Search on YouTube"
                        onClick={() =>
                          window.open(
                            `https://www.youtube.com/results?search_query=${encodeURIComponent(
                              `${track.name} ${artistDetail.name}`,
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
              </>
            )}

            {artistDetail.topAlbums.length > 0 && (
              <>
                <SectionTitle>Top Albums</SectionTitle>

                <AlbumGrid>
                  {artistDetail.topAlbums.map((album) => (
                    <AlbumItem
                      key={album.id}
                      type="button"
                      onClick={() => {
                        closeArtistDetail();
                        fetchAlbumDetail(album.artist, album.name);
                      }}
                    >
                      {album.image ? (
                        <img
                          src={album.image}
                          alt={album.name}
                          loading="lazy"
                        />
                      ) : (
                        <AlbumPlaceholder>
                          <Disc3 size={28} />
                        </AlbumPlaceholder>
                      )}

                      <AlbumName title={album.name}>{album.name}</AlbumName>
                      <AlbumArtist title={album.artist}>
                        {album.artist}
                      </AlbumArtist>
                    </AlbumItem>
                  ))}
                </AlbumGrid>
              </>
            )}
          </>
        )}
      </Panel>
    </Backdrop>
  );
};

export default ArtistInfoModal;
