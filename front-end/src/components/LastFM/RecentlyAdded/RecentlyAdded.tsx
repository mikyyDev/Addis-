import { Clock, Music2, X } from "lucide-react";
import { useMemo, useState } from "react";

import { useLastFMStore } from "../../../store/lastfm.store";

import { formatRelativeTime } from "../../../utils/statistics";

import {
  Section,
  Header,
  Title,
  ViewAllLink,
  List,
  Item,
  Thumb,
  ThumbPlaceholder,
  Info,
  SongTitle,
  SongArtist,
  AddedAt,
  RemoveButton,
  Skeleton,
  Empty,
} from "./RecentlyAdded.styles";

const RecentlyAdded = () => {
  const { librarySongs, libraryLoading } = useLastFMStore();
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());

  const recent = useMemo(
    () =>
      librarySongs
        .filter((song) => !hiddenIds.has(song._id))
        .slice(0, 8),
    [librarySongs, hiddenIds],
  );

  const handleHide = (songId: string) => {
    setHiddenIds((prev) => new Set(prev).add(songId));
  };

  return (
    <Section>
      <Header>
        <Title>Recently Added</Title>

        <ViewAllLink href="/songs">View all</ViewAllLink>
      </Header>

      {libraryLoading && librarySongs.length === 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : recent.length === 0 ? (
        <Empty>
          Nothing in your library yet — search above and hit{" "}
          <strong>Add to Library</strong> to get started.
        </Empty>
      ) : (
        <List>
          {recent.map((song) => (
            <Item key={song._id}>
              <Thumb>
                {song.image ? (
                  <img src={song.image} alt="" loading="lazy" />
                ) : (
                  <ThumbPlaceholder>
                    <Music2 size={20} />
                  </ThumbPlaceholder>
                )}
              </Thumb>

              <Info>
                <SongTitle title={song.title}>{song.title}</SongTitle>
                <SongArtist title={song.artistId?.name ?? ""}>
                  {song.artistId?.name ?? "Unknown artist"}
                </SongArtist>
              </Info>

              <AddedAt>
                <Clock
                  size={12}
                  style={{ marginRight: 4, verticalAlign: -1 }}
                />
                {formatRelativeTime(song.createdAt)}
              </AddedAt>

              <RemoveButton
                type="button"
                onClick={() => handleHide(song._id)}
                aria-label={`Hide ${song.title} from list`}
                title="Hide from list"
              >
                <X size={15} />
              </RemoveButton>
            </Item>
          ))}
        </List>
      )}
    </Section>
  );
};

export default RecentlyAdded;
