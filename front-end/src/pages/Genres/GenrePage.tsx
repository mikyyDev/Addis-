import { useEffect, useMemo, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import GenreHeader from "../../components/Genres/GenreHeader/GenreHeader";
import GenreGrid from "../../components/Genres/GenreGrid/GenreGrid";
import GenreEmpty from "../../components/Genres/GenreEmpty/GenreEmpty";
import GenreModal from "../../components/Genres/GenreModal/GenreModal";
import DeleteGenreModal from "../../components/Genres/DeleteGenreModal/DeleteGenreModal";
import GenreSongsView from "../../components/Genres/GenreSongsView/GenreSongsView";

import { useGenreStore } from "../../store/genre.store";
import { useSongStore } from "../../store/song.store";

import type { Genre } from "../../types/genre.types";

import {
  GenreContainer,
  MainContent,
  ErrorMessage,
  LoadingMessage,
} from "./GenrePage.styles";

const GenrePage = () => {
  const {
    genres,
    loading,
    error,
    fetchGenres,
    createGenre,
    updateGenre,
    deleteGenre,
  } = useGenreStore();
  const { songs, fetchSongs } = useSongStore();

  const [search, setSearch] = useState("");
  const [genreModalOpen, setGenreModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [activeGenre, setActiveGenre] = useState<Genre | null>(null);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const filteredGenres = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return genres;
    return genres.filter((genre) => genre.name.toLowerCase().includes(query));
  }, [genres, search]);

  const genreSongCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const song of songs) {
      for (const genre of song.genre ?? []) {
        if (!genre?._id) continue;
        counts.set(genre._id, (counts.get(genre._id) ?? 0) + 1);
      }
    }
    return counts;
  }, [songs]);

  const genreSongs = useMemo(() => {
    if (!activeGenre) return [];
    return songs.filter((song) =>
      song.genre?.some((g) => g._id === activeGenre._id),
    );
  }, [songs, activeGenre]);

  const handleGenreClick = (genre: Genre) => {
    setActiveGenre(genre);
  };

  const handleBackToGenres = () => {
    setActiveGenre(null);
  };

  const handleAddGenre = () => {
    setSelectedGenre(null);
    setGenreModalOpen(true);
  };

  const handleEditGenre = (genre: Genre) => {
    setSelectedGenre(genre);
    setGenreModalOpen(true);
  };

  const handleDeleteGenre = (genre: Genre) => {
    setSelectedGenre(genre);
    setDeleteModalOpen(true);
  };

  const handleCloseGenreModal = () => {
    setGenreModalOpen(false);
    setSelectedGenre(null);
  };

  const handleSubmitGenre = async (name: string) => {
    if (!selectedGenre) {
      await createGenre({ name });
      handleCloseGenreModal();
      return;
    }
    await updateGenre(selectedGenre._id, { name });
    handleCloseGenreModal();
  };

  const handleConfirmDeleteGenre = async () => {
    if (!selectedGenre) return;
    await deleteGenre(selectedGenre._id);
    handleCloseDeleteModal();
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedGenre(null);
  };

  return (
    <GenreContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <GenreHeader
          search={search}
          onSearchChange={setSearch}
          onAdd={handleAddGenre}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {loading && genres.length === 0 ? (
          <LoadingMessage>Loading genres...</LoadingMessage>
        ) : activeGenre ? (
          <GenreSongsView
            genre={activeGenre}
            songs={genreSongs}
            onBack={handleBackToGenres}
          />
        ) : filteredGenres.length > 0 ? (
          <GenreGrid
            genres={filteredGenres}
            songCounts={genreSongCounts}
            onEdit={handleEditGenre}
            onDelete={handleDeleteGenre}
            onGenreClick={handleGenreClick}
          />
        ) : (
          <GenreEmpty search={search} onAdd={handleAddGenre} />
        )}

        <GenreModal
          open={genreModalOpen}
          genre={selectedGenre}
          loading={loading}
          error={error}
          onClose={handleCloseGenreModal}
          onSubmit={handleSubmitGenre}
        />

        <DeleteGenreModal
          open={deleteModalOpen}
          genre={selectedGenre}
          loading={loading}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDeleteGenre}
        />
      </MainContent>
    </GenreContainer>
  );
};

export default GenrePage;
