import { useEffect } from "react";

import { useAlbumStore } from "../../../store/album.store";

import AlbumCard from "../AlbumCard/AlbumCard";
import AlbumSkeleton from "../AlbumSkeleton/AlbumSkeleton";

import { ErrorMessage, Grid } from "./AlbumGrid.styles";

const AlbumGrid = () => {
  const {
    albums,
    loading,
    error,
    search,
    fetchAlbums,
    openEditModal,
    openDeleteModal,
  } = useAlbumStore();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const filteredAlbums = albums.filter((album) => {
    const searchTerm = search.toLowerCase();

    return (
      album.name.toLowerCase().includes(searchTerm) ||
      album.artistId?.name?.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return (
      <Grid>
        {Array.from({ length: 8 }).map((_, index) => (
          <AlbumSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (filteredAlbums.length === 0) {
    return <ErrorMessage>No albums found.</ErrorMessage>;
  }

  return (
    <Grid>
      {filteredAlbums.map((album) => (
        <AlbumCard
          key={album._id}
          album={album}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      ))}
    </Grid>
  );
};

export default AlbumGrid;
