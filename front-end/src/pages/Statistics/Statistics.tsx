import { useEffect } from "react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import StatisticsHeader from "../../components/statistics/StatisticsHeader/StatisticsHeader";
import MusicUniverse from "../../components/statistics/MusicUniverse/MusicUniverse";
import TopArtists from "../../components/statistics/TopArtists/TopArtists";
import TopGenres from "../../components/statistics/TopGenres/TopGenres";
import TopAlbums from "../../components/statistics/TopAlbums/TopAlbums";
import ImportActivity from "../../components/statistics/ImportActivity/ImportActivity";
import LibraryInsights from "../../components/statistics/LibraryInsights/LibraryInsights";

import { useStatStore } from "../../store/stat.store";

import {
  StatisticsContainer,
  MainContent,
  ContentGrid,
  Stack,
  ErrorBox,
  RetryButton,
  Skeleton,
} from "./Statistics.styles";

const Statistics = () => {
  const { totals, loading, error, fetchAll, clearError } = useStatStore();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  if (loading && !totals) {
    return (
      <StatisticsContainer>
        <Sidebar />

        <MainContent>
          <MobileToggle />

          <Skeleton />
          <Skeleton />
          <Skeleton />
        </MainContent>
      </StatisticsContainer>
    );
  }

  return (
    <StatisticsContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <StatisticsHeader />

        {error && (
          <ErrorBox>
            <span>{error}</span>

            <RetryButton
              onClick={() => {
                clearError();
                fetchAll();
              }}
            >
              Retry
            </RetryButton>
          </ErrorBox>
        )}

        <ContentGrid $compactTop>
          <MusicUniverse />

          <TopArtists />
        </ContentGrid>

        <ContentGrid>
          <TopGenres />

          <TopAlbums />
        </ContentGrid>

        <Stack>
          <ImportActivity />

          <LibraryInsights />
        </Stack>
      </MainContent>
    </StatisticsContainer>
  );
};

export default Statistics;
