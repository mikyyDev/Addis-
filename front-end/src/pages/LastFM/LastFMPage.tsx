import { useEffect, useRef, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import LastFMHeader from "../../components/LastFM/LastFMHeader/LastFMHeader";
import LastFmSearch from "../../components/LastFM/LastFmSearch/LastFmSearch";
import LastFMEmpty from "../../components/LastFM/LastFMEmpty/LastFMEmpty";
import FilterBar from "../../components/LastFM/FilterBar/FilterBar";
import TrackGrid from "../../components/LastFM/TrackGrid/TrackGrid";
import ArtistGrid from "../../components/LastFM/ArtistGrid/ArtistGrid";
import AlbumGrid from "../../components/LastFM/AlbumGrid/AlbumGrid";
import TrackSkeleton from "../../components/LastFM/TrackSkeleton/TrackSkeleton";
import RecentlyAdded from "../../components/LastFM/RecentlyAdded/RecentlyAdded";
import SearchHistory from "../../components/LastFM/SearchHistory/SearchHistory";
import FavoritesSection from "../../components/LastFM/FavoritesSection/FavoritesSection";
import TrackDetailsModal from "../../components/LastFM/TrackDetailsModal/TrackDetailsModal";
import ArtistInfoModal from "../../components/LastFM/ArtistInfoModal/ArtistInfoModal";
import AlbumInfoModal from "../../components/LastFM/AlbumInfoModal/AlbumInfoModal";

import { useLastFMStore } from "../../store/lastfm.store";

import {
  LastFMContainer,
  MainContent,
  HeaderSearchLayout,
  SearchSection,
  ResultsSection,
  ResultsHeader,
  ResultsTitle,
  ResultsCount,
  ErrorMessage,
  ResultsStack,
  TrackListHeader,
} from "./LastFM.styles";

interface Toast {
  type: "success" | "error";
  message: string;
}

const LastFMPage = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const {
    tracks,
    artists,
    albums,
    loading,
    error,
    query,
    filter,
    search,
    setQuery,
    setFilter,
    clearResults,
    detailTrack,
    artistDetail,
    albumDetail,
    loadFromLocalStorage,
    loadLibrary,
    refreshLibrary,
  } = useLastFMStore();

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    loadFromLocalStorage();
    loadLibrary();
  }, [loadFromLocalStorage, loadLibrary]);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!trimmedQuery) {
      clearResults();
      return;
    }

    if (trimmedQuery.length < 2) {
      return;
    }

    debounceRef.current = setTimeout(() => {
      search(trimmedQuery);
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, search, clearResults]);

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery || trimmedQuery.length < 2) {
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    search(trimmedQuery);

    const { addToSearchHistory } = useLastFMStore.getState();
    addToSearchHistory(trimmedQuery);
  };

  const handleSuggestionSelect = (track: { title: string; artist: string }) => {
    const newQuery = `${track.title} ${track.artist}`;
    setQuery(newQuery);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    search(newQuery);
  };

  const handleSaveSuccess = (message: string) => {
    setToast({ type: "success", message });
    setTimeout(() => setToast(null), 3000);
    refreshLibrary();
  };

  const handleSaveError = (message: string) => {
    setToast({ type: "error", message });
    setTimeout(() => setToast(null), 3000);
  };

  const hasActiveQuery = query.trim().length >= 2;
  const totalResults = tracks.length + artists.length + albums.length;

  const showTracks = filter === "all" || filter === "tracks";
  const showArtists = filter === "all" || filter === "artists";
  const showAlbums = filter === "all" || filter === "albums";

  return (
    <LastFMContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <HeaderSearchLayout>
          <LastFMHeader />

          <SearchSection>
            <LastFmSearch
              value={query}
              suggestions={tracks}
              onChange={setQuery}
              onSubmit={handleSearch}
              onSuggestionSelect={handleSuggestionSelect}
              loading={loading}
            />

            <FilterBar
              filter={filter}
              counts={{
                tracks: tracks.length,
                artists: artists.length,
                albums: albums.length,
              }}
              onChange={setFilter}
            />
          </SearchSection>
        </HeaderSearchLayout>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {loading && !error && (
          <ResultsSection>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <TrackSkeleton key={index} />
              ))}
            </div>
          </ResultsSection>
        )}

        {hasActiveQuery && !loading && !error && totalResults === 0 && (
          <LastFMEmpty query={query} />
        )}

        {hasActiveQuery && !loading && !error && totalResults > 0 && (
          <ResultsStack>
            {showTracks && (tracks.length > 0 || filter === "tracks") && (
              <ResultsSection>
                <ResultsHeader>
                  <ResultsTitle>Tracks</ResultsTitle>
                  <ResultsCount>
                    {tracks.length} {tracks.length === 1 ? "track" : "tracks"}
                  </ResultsCount>
                </ResultsHeader>

                {tracks.length > 0 && (
                  <TrackListHeader>
                    <span>#</span>
                    <span />
                    <span>Title</span>
                    <span>Actions</span>
                  </TrackListHeader>
                )}

                <TrackGrid
                  onSaveSuccess={handleSaveSuccess}
                  onSaveError={handleSaveError}
                />
              </ResultsSection>
            )}

            {showArtists && artists.length > 0 && (
              <ResultsSection>
                <ResultsHeader>
                  <ResultsTitle>Artists</ResultsTitle>
                  <ResultsCount>
                    {artists.length} {artists.length === 1 ? "artist" : "artists"}
                  </ResultsCount>
                </ResultsHeader>

                <ArtistGrid />
              </ResultsSection>
            )}

            {showAlbums && albums.length > 0 && (
              <ResultsSection>
                <ResultsHeader>
                  <ResultsTitle>Albums</ResultsTitle>
                  <ResultsCount>
                    {albums.length} {albums.length === 1 ? "album" : "albums"}
                  </ResultsCount>
                </ResultsHeader>

                <AlbumGrid />
              </ResultsSection>
            )}
          </ResultsStack>
        )}

        <RecentlyAdded />

        {!hasActiveQuery && !loading && (
          <>
            <SearchHistory />
            <FavoritesSection />
          </>
        )}

        {toast && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "14px 20px",
              borderRadius: "12px",
              background:
                toast.type === "success"
                  ? "rgba(76, 175, 80, 0.95)"
                  : "rgba(239, 68, 68, 0.95)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              animation: "slideIn 0.3s ease, slideOut 0.3s ease 2.7s forwards",
              zIndex: 999,
            }}
          >
            {toast.message}
          </div>
        )}
      </MainContent>

      {detailTrack && (
        <TrackDetailsModal
          track={detailTrack}
          onSaveSuccess={handleSaveSuccess}
          onSaveError={handleSaveError}
        />
      )}

      {artistDetail && <ArtistInfoModal />}

      {albumDetail && <AlbumInfoModal />}
    </LastFMContainer>
  );
};

export default LastFMPage;
