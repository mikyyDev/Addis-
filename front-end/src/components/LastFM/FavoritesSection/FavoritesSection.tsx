import { Music2 } from "lucide-react";

import { useLastFMStore } from "../../../store/lastfm.store";

import {
  Section,
  Header,
  Title,
  Count,
  Grid,
  Card,
  RemoveButton,
  Image,
  ImagePlaceholder,
  CardTitle,
  Artist,
} from "./FavoritesSection.styles";

const FavoritesSection = () => {
  const { favorites, removeFavorite, setQuery } = useLastFMStore();

  if (favorites.length === 0) {
    return null;
  }

  const searchFavorite = (title: string, artist: string) => {
    const newQuery = `${title} ${artist}`;
    setQuery(newQuery);

    const { search } = useLastFMStore.getState();
    search(newQuery);
  };

  return (
    <Section>
      <Header>
        <Title>⭐ Your Favorites</Title>
        <Count>{favorites.length} saved</Count>
      </Header>

      <Grid>
        {favorites.map((track) => (
          <Card key={track.id} onClick={() => searchFavorite(track.title, track.artist)}>
            <RemoveButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFavorite(track.id);
              }}
              title="Remove from favorites"
            >
              ✕
            </RemoveButton>

            <Image>
              {track.image ? (
                <img src={track.image} alt={track.title} loading="lazy" />
              ) : (
                <ImagePlaceholder>
                  <Music2 size={28} />
                </ImagePlaceholder>
              )}
            </Image>

            <CardTitle title={track.title}>{track.title}</CardTitle>
            <Artist title={track.artist}>{track.artist}</Artist>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FavoritesSection;
