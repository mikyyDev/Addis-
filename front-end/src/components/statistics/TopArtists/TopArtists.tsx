import { useMemo } from "react";

import { useStatStore } from "../../../store/stat.store";
import { getPeriodLabel } from "../../../utils/statistics";

import StatSection from "../StatSection/StatSection";
import StatEmpty from "../StatEmpty/StatEmpty";

import {
  RankingList,
  RankingRow,
  RankNumber,
  RankInfo,
  RankName,
  RankBar,
  RankBarFill,
  RankStats,
  RankStat,
} from "./TopArtists.styles";

const TopArtists = () => {
  const { artists, songs, period } = useStatStore();

  const topArtists = useMemo(
    () =>
      [...artists]
        .sort((a, b) => b.songCount - a.songCount)
        .slice(0, 10),
    [artists],
  );

  const maxSongCount = useMemo(
    () => Math.max(1, ...topArtists.map((artist) => artist.songCount)),
    [topArtists],
  );

  const totalSongs = useMemo(() => songs.length, [songs]);

  if (topArtists.length === 0) {
    return (
      <StatSection title="Top Artists" count={getPeriodLabel(period)}>
        <StatEmpty>No artist data yet.</StatEmpty>
      </StatSection>
    );
  }

  return (
    <StatSection title="Top Artists" count={getPeriodLabel(period)}>
      <RankingList>
        {topArtists.map((artist, index) => {
          const pct = totalSongs > 0
            ? ((artist.songCount / totalSongs) * 100).toFixed(1)
            : "0";

          return (
            <RankingRow key={artist.artist}>
              <RankNumber $top={index < 3}>
                {String(index + 1).padStart(2, "0")}
              </RankNumber>

              <RankInfo>
                <RankName>{artist.artist}</RankName>

                <RankBar>
                  <RankBarFill
                    width={(artist.songCount / maxSongCount) * 100}
                    $top={index < 3}
                  />
                </RankBar>

                <RankStats>
                  <RankStat>
                    <strong>{artist.songCount}</strong> songs
                  </RankStat>
                  <RankStat>
                    <strong>{artist.albumCount}</strong> albums
                  </RankStat>
                  <RankStat>
                    <strong>{pct}%</strong> of library
                  </RankStat>
                </RankStats>
              </RankInfo>
            </RankingRow>
          );
        })}
      </RankingList>
    </StatSection>
  );
};

export default TopArtists;
