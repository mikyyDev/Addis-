import { useMemo } from "react";

import { useStatStore } from "../../../store/stat.store";

import StatSection from "../StatSection/StatSection";
import StatEmpty from "../StatEmpty/StatEmpty";

import {
  BubbleContainer,
  BubbleRow,
  Bubble,
  BubbleInner,
  BubbleLabel,
  BubbleCount,
  LegendList,
  LegendRow,
  LegendDot,
  LegendName,
  LegendBar,
  LegendBarFill,
  LegendValue,
} from "./TopGenres.styles";

const GENRE_COLORS = [
  "#6C63FF",
  "#FF6584",
  "#4FC3F7",
  "#10B981",
  "#F97316",
  "#FACC15",
  "#A78BFA",
  "#EC4899",
  "#14B8A6",
  "#F43F5E",
];

const TopGenres = () => {
  const { genres } = useStatStore();

  const topGenres = useMemo(
    () =>
      [...genres]
        .sort((a, b) => b.songCount - a.songCount)
        .slice(0, 8),
    [genres],
  );

  const maxSongCount = useMemo(
    () => Math.max(1, ...topGenres.map((g) => g.songCount)),
    [topGenres],
  );

  const totalAssignments = useMemo(
    () => topGenres.reduce((sum, genre) => sum + genre.songCount, 0),
    [topGenres],
  );

  if (topGenres.length === 0) {
    return (
      <StatSection title="Genre Distribution">
        <StatEmpty>No genre data yet.</StatEmpty>
      </StatSection>
    );
  }

  return (
    <StatSection
      title="Genre Distribution"
      count={totalAssignments > 0 ? `${totalAssignments} assigned` : ""}
    >
      {/* Bubble visualization */}
      <BubbleContainer>
        <BubbleRow>
          {topGenres.map((genre, index) => {
            const color = GENRE_COLORS[index % GENRE_COLORS.length];
            const size = 40 + (genre.songCount / maxSongCount) * 50;

            return (
              <Bubble key={genre.genre} $size={size} $color={color}>
                <BubbleInner>
                  <BubbleLabel title={genre.genre}>{genre.genre}</BubbleLabel>
                  <BubbleCount>{genre.songCount}</BubbleCount>
                </BubbleInner>
              </Bubble>
            );
          })}
        </BubbleRow>
      </BubbleContainer>

      {/* Legend with bars */}
      <LegendList>
        {topGenres.map((genre, index) => {
          const color = GENRE_COLORS[index % GENRE_COLORS.length];
          const pct = totalAssignments > 0
            ? ((genre.songCount / totalAssignments) * 100).toFixed(1)
            : "0";

          return (
            <LegendRow key={genre.genre}>
              <LegendDot $color={color} />
              <LegendName>{genre.genre}</LegendName>
              <LegendBar>
                <LegendBarFill
                  $width={(genre.songCount / maxSongCount) * 100}
                  $color={color}
                />
              </LegendBar>
              <LegendValue>{pct}%</LegendValue>
            </LegendRow>
          );
        })}
      </LegendList>
    </StatSection>
  );
};

export default TopGenres;
