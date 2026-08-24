import { useState } from "react";

import { Container, Tab } from "./MusicTabs.styles";

const tabs = ["Songs", "Albums", "Artists", "Genres", "Playlists"];

const MusicTabs = () => {
  const [activeTab, setActiveTab] = useState("Songs");

  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </Container>
  );
};

export default MusicTabs;
