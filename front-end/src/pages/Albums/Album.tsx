import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import AlbumHeader from "../../components/Album/AlbumHeader/AlbumHeader";
import AlbumGrid from "../../components/Album/AlbumGrid/AlbumGrid";
import AlbumModal from "../../components/Album/AlbumModal/AlbumModal";
import DeleteAlbumModal from "../../components/Album/DeleteAlbumModal/DeleteAlbumModal";

import { AlbumContainer, MainContent } from "./Album.styles";

const AlbumPage = () => {
  return (
    <AlbumContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <AlbumHeader />

        <AlbumGrid />
      </MainContent>

      <AlbumModal />

      <DeleteAlbumModal />
    </AlbumContainer>
  );
};

export default AlbumPage;
