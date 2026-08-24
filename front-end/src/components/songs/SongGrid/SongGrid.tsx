import { useEffect, useMemo, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useSongStore } from "../../../store/song.store";

import type { Song } from "../../../types/song.types";

import SongListView from "../SongListView/SongListView";
import SongEmpty from "../SongEmpty/SongEmpty";

import {
  TableWrap,
  SkeletonRow,
  SkeletonCell,
  SkeletonThumb,
  Pagination,
  PageButton,
  PageIndicator,
} from "./SongGrid.styles";

const PAGE_SIZE = 8;

const matchesFilters = (
  song: Song,
  filters: {
    artistFilter: string;
    albumFilter: string;
    genreFilter: string;
  },
): boolean => {
  if (filters.artistFilter && song.artistId?._id !== filters.artistFilter) {
    return false;
  }

  if (filters.albumFilter && song.albumId?._id !== filters.albumFilter) {
    return false;
  }

  if (
    filters.genreFilter &&
    !(song.genre ?? []).some((genre) => genre._id === filters.genreFilter)
  ) {
    return false;
  }

  return true;
};

const compareSongs = (a: Song, b: Song, sortBy: string): number => {
  switch (sortBy) {
    case "title-asc":
      return a.title.localeCompare(b.title);

    case "title-desc":
      return b.title.localeCompare(a.title);

    case "artist-asc":
      return (a.artistId?.name ?? "").localeCompare(b.artistId?.name ?? "");

    case "artist-desc":
      return (b.artistId?.name ?? "").localeCompare(a.artistId?.name ?? "");

    case "recent":
    default:
      return (
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
};

const SongGrid = () => {
  const {
    songs,
    loading,
    search,
    fetchSongs,
    artistFilter,
    albumFilter,
    genreFilter,
    sortBy,
  } = useSongStore();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSongs(search);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search, fetchSongs]);

  const filteredSongs = useMemo(() => {
    const filters = { artistFilter, albumFilter, genreFilter };

    return songs
      .filter((song) => matchesFilters(song, filters))
      .sort((a, b) => compareSongs(a, b, sortBy));
  }, [songs, artistFilter, albumFilter, genreFilter, sortBy]);

  // Reset to the first page whenever the result set changes.
  useEffect(() => {
    setPage(1);
  }, [search, artistFilter, albumFilter, genreFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredSongs.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageSongs = filteredSongs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  if (loading) {
    return (
      <TableWrap>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonRow key={index}>
            <SkeletonThumb />
            <SkeletonCell width="30%" />
            <SkeletonCell width="18%" />
            <SkeletonCell width="20%" />
            <SkeletonCell width="14%" />
            <SkeletonCell width="8%" />
          </SkeletonRow>
        ))}
      </TableWrap>
    );
  }

  if (!filteredSongs.length) {
    return <SongEmpty hasSongs={songs.length > 0} />;
  }

  return (
    <>
      <SongListView songs={pageSongs} />

      {totalPages > 1 && (
        <Pagination>
          <PageButton
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            <ChevronLeft size={16} />
            Previous
          </PageButton>

          <PageIndicator>
            Page {currentPage} of {totalPages}
          </PageIndicator>

          <PageButton
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          >
            Next
            <ChevronRight size={16} />
          </PageButton>
        </Pagination>
      )}
    </>
  );
};

export default SongGrid;
