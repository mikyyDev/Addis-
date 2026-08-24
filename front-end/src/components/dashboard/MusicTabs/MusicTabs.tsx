import { useEffect, useState } from "react";

import SongCard from "../SongCard/SongCard";

import { useSongStore } from "../../../store/song.store";

import { Container, Tabs, Tab, SongGrid } from "./MusicTabs.styles";

const MusicTabs = () => {
  type TabType = "Popular" | "Playlists" | "Albums";

  const [activeTab, setActiveTab] = useState<TabType>("Popular");
  const { songs, loading, error, fetchSongs } = useSongStore();

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return (
    <Container>
      <Tabs>
        <Tab
          active={activeTab === "Popular"}
          onClick={() => setActiveTab("Popular")}
        >
          Popular
        </Tab>

        <Tab
          active={activeTab === "Playlists"}
          onClick={() => setActiveTab("Playlists")}
        >
          Playlists
        </Tab>

        <Tab
          active={activeTab === "Albums"}
          onClick={() => setActiveTab("Albums")}
        >
          Albums
        </Tab>
      </Tabs>

      {loading && <p>Loading songs...</p>}

      {error && (
        <p
          style={{
            color: "#ef4444",
            marginTop: "20px",
          }}
        >
          {error}
        </p>
      )}

      {!loading && !error && (
        <SongGrid>
          {songs.length > 0 ? (
            songs.map((song) => <SongCard key={song._id} song={song} />)
          ) : (
            <p>No songs found.</p>
          )}
        </SongGrid>
      )}
    </Container>
  );
};

export default MusicTabs;
