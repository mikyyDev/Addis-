import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import ArtistGrid from "../../components/Artist/ArtistGrid/ArtistGrid";
import ArtistHeader from "../../components/Artist/ArtistHeader/ArtistHeader";
import ArtistModal from "../../components/Artist/ArtistModal/ArtistModal";
import DeleteArtistModal from "../../components/Artist/DeleteArtistModal/DeleteArtistModal";

import { ArtistContainer, MainContent } from "./Artist.styles";

const ArtistPage = () => {
  return (
    <ArtistContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <ArtistHeader />

        <ArtistGrid />
      </MainContent>

      <ArtistModal />

      <DeleteArtistModal />
    </ArtistContainer>
  );
};

export default ArtistPage;
