import { useStatStore } from "../../../store/stat.store";
import { STATS_PERIODS, type StatsPeriod } from "../../../types/stat.types";

import {
  Header,
  HeaderTop,
  HeaderLeft,
  PeriodSelect,
  HeroTitle,
  HeroAccent,
  HeroSubtitle,
  HeroStats,
  HeroStat,
  HeroStatValue,
  HeroStatLabel,
  HeroDot,
} from "./StatisticsHeader.styles";

const StatisticsHeader = () => {
  const { period, setPeriod, totals, playlistCount } = useStatStore();

  const stats = [
    { value: totals?.totalSongs ?? 0, label: "Songs" },
    { value: totals?.totalArtists ?? 0, label: "Artists" },
    { value: totals?.totalAlbums ?? 0, label: "Albums" },
    { value: totals?.totalGenres ?? 0, label: "Genres" },
    { value: playlistCount, label: "Playlists" },
  ];

  return (
    <Header>
      <HeaderTop>
        <HeaderLeft>
          <HeroTitle>
            Your <HeroAccent>Music</HeroAccent> Universe
          </HeroTitle>

          <HeroSubtitle>
            A visual representation of your music collection.
          </HeroSubtitle>
        </HeaderLeft>

        <PeriodSelect
          value={period}
          onChange={(e) => setPeriod(e.target.value as StatsPeriod)}
          aria-label="Time period"
        >
          {STATS_PERIODS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </PeriodSelect>
      </HeaderTop>

      <HeroStats>
        {stats.map((stat, index) => (
          <HeroStat key={stat.label}>
            <HeroStatValue>{stat.value}</HeroStatValue>
            <HeroStatLabel>{stat.label}</HeroStatLabel>
            {index < stats.length - 1 && <HeroDot />}
          </HeroStat>
        ))}
      </HeroStats>
    </Header>
  );
};

export default StatisticsHeader;
