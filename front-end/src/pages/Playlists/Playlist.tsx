import { useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";
import Header from "../../components/dashboard/Header/Header";
import PlaylistHeader from "../../components/playlists/PlaylistHeader/PlaylistHeader";
import PlaylistGrid from "../../components/playlists/PlaylistGrid/PlaylistGrid";
import PlaylistDetails from "../../components/playlists/PlaylistDetails/PlaylistDetails";

import { usePlaylistStore } from "../../store/playlist.store";

import type { Playlist as PlaylistType } from "../../types/playlist.types";

import { PlaylistContainer, MainContent, Toast } from "./Playlist.styles";

interface ToastState {
  type: "success" | "error";
  message: string;
}

const Playlist = () => {
  const [toast, setToast] = useState<ToastState | null>(null);

  const { selectedPlaylist, fetchPlaylist, clearSelected } = usePlaylistStore();

  const notify = (type: ToastState["type"], message: string) => {
    setToast({ type, message });

    setTimeout(() => setToast(null), 3000);
  };

  const handleOpen = (playlist: PlaylistType) => {
    fetchPlaylist(playlist._id);
  };

  return (
    <PlaylistContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <Header />

        {selectedPlaylist ? (
          <PlaylistDetails onBack={clearSelected} onNotify={notify} />
        ) : (
          <>
            <PlaylistHeader onNotify={notify} />

            <PlaylistGrid onOpen={handleOpen} onNotify={notify} />
          </>
        )}

        {toast && <Toast type={toast.type}>{toast.message}</Toast>}
      </MainContent>
    </PlaylistContainer>
  );
};

export default Playlist;
