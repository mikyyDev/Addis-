import { Music2, Users, Disc3, Tags, ListMusic } from "lucide-react";

import { useStatStore } from "../../../store/stat.store";

import {
  CardsGrid,
  OverviewCard,
  IconBox,
  CardNumber,
  CardLabel,
} from "./OverviewCards.styles";

const OverviewCards = () => {
  const { totals, playlistCount } = useStatStore();

  return (
    <CardsGrid>
      <OverviewCard>
        <IconBox>
          <Users size={20} />
        </IconBox>

        <CardNumber>{totals?.totalArtists ?? 0}</CardNumber>

        <CardLabel>Artists</CardLabel>
      </OverviewCard>

      <OverviewCard>
        <IconBox>
          <Disc3 size={20} />
        </IconBox>

        <CardNumber>{totals?.totalAlbums ?? 0}</CardNumber>

        <CardLabel>Albums</CardLabel>
      </OverviewCard>

      <OverviewCard>
        <IconBox>
          <Music2 size={20} />
        </IconBox>

        <CardNumber>{totals?.totalSongs ?? 0}</CardNumber>

        <CardLabel>Songs</CardLabel>
      </OverviewCard>

      <OverviewCard>
        <IconBox>
          <Tags size={20} />
        </IconBox>

        <CardNumber>{totals?.totalGenres ?? 0}</CardNumber>

        <CardLabel>Genres</CardLabel>
      </OverviewCard>

      <OverviewCard>
        <IconBox>
          <ListMusic size={20} />
        </IconBox>

        <CardNumber>{playlistCount}</CardNumber>

        <CardLabel>Playlists</CardLabel>
      </OverviewCard>
    </CardsGrid>
  );
};

export default OverviewCards;
