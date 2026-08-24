import { useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";

import SongHeader from "../../components/songs/SongHeader/SongHeader";
import SongStats from "../../components/songs/SongStats/SongStats";
import SongFilters from "../../components/songs/SongFilters/SongFilters";
import SongGrid from "../../components/songs/SongGrid/SongGrid";
import SongModal from "../../components/songs/SongModal/SongModal";
import SongDetailsModal from "../../components/songs/SongDetailsModal/SongDetailsModal";
import DeleteSongModal from "../../components/songs/DeleteSongModal/DeleteSongModal";
import AddToPlaylistModal from "../../components/songs/AddToPlaylistModal/AddToPlaylistModal";

import { useSongStore } from "../../store/song.store";

import { SongsContainer, MainContent, Toast } from "./Songs.styles";

interface ToastState {
  type: "success" | "error";
  message: string;
}

const Songs = () => {
  const [toast, setToast] = useState<ToastState | null>(null);

  const { songs, playlistTarget } = useSongStore();

  const notify = (type: ToastState["type"], message: string) => {
    setToast({ type, message });

    setTimeout(() => setToast(null), 3000);
  };

  return (
    <SongsContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <SongHeader />

        <SongStats />

        <SongFilters count={songs.length} />

        <SongGrid />

        <SongModal />

        <SongDetailsModal />

        <DeleteSongModal />

        <AddToPlaylistModal
          key={playlistTarget?._id ?? "closed"}
          onNotify={notify}
        />

        {toast && <Toast type={toast.type}>{toast.message}</Toast>}
      </MainContent>
    </SongsContainer>
  );
};

export default Songs;
