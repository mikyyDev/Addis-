import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";
import Header from "../../components/dashboard/Header/Header";
import HeroBanner from "../../components/dashboard/HeroBanner/HeroBanner";
import MusicSection from "../../components/dashboard/Music/MusicSection/MusicSection";

import { DashboardContainer, MainContent } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <Header />

        <HeroBanner />

        <MusicSection />
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
