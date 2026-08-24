import { useEffect } from "react";

import { useSongStore } from "../../../../store/song.store";
import { usePlaylistStore } from "../../../../store/playlist.store";

import QuickStats from "../QuickStats/QuickStats";
import ContentTabs from "../ContentTabs/ContentTabs";
import CreateSongModal from "../../SongModal/CreateSongModal";
import SongDetailsModal from "../../../songs/SongDetailsModal/SongDetailsModal";

import {
  Container,
  Header,
  LeftSide,
  RightSide,
  Title,
} from "./MusicSection.styles";

const MusicSection = () => {
  const { fetchSongs } = useSongStore();
  const { fetchPlaylists } = usePlaylistStore();

  useEffect(() => {
    fetchSongs();
    fetchPlaylists();
  }, [fetchSongs, fetchPlaylists]);

  return (
    <>
      <Container>
        <Header>
          <LeftSide>
            <Title>Music Library</Title>
          </LeftSide>
        </Header>

        <QuickStats />

        <ContentTabs />
      </Container>

      <CreateSongModal />
      <SongDetailsModal hideActions />
    </>
  );
};

export default MusicSection;
