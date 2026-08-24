import { useEffect } from "react";

import { useArtistStore } from "../../../store/artist.store";

import ArtistCard from "../ArtistCard/ArtistCard";
import ArtistEmpty from "../ArtistEmpty/ArtistEmpty";
import ArtistSkeleton from "../ArtistSkeleton/ArtistSkeleton";

import { ErrorMessage, Grid } from "./ArtistGrid.styles";

const ArtistGrid = () => {
  const {
    artists,
    loading,
    error,
    search,
    fetchArtists,
    openEditModal,
    openDeleteModal,
  } = useArtistStore();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <Grid>
        {Array.from({ length: 4 }).map((_, index) => (
          <ArtistSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (filteredArtists.length === 0) {
    return <ArtistEmpty />;
  }

  return (
    <Grid>
      {filteredArtists.map((artist) => (
        <ArtistCard
          key={artist._id}
          artist={artist}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      ))}
    </Grid>
  );
};

export default ArtistGrid;
