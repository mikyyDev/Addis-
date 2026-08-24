import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero/Hero";
import HowItWorks from "../../components/landing/HowItWorks/HowItWorks";
import KeyFeatures from "../../components/landing/KeyFeatures/KeyFeatures";
import DiscoverLastfm from "../../components/landing/DiscoverLastfm/DiscoverLastfm";
import DashboardPreview from "../../components/landing/DashboardPreview/DashboardPreview";
import BuildLibrary from "../../components/landing/BuildLibrary/BuildLibrary";
import Footer from "../../components/landing/Footer/Footer";
import { PageWrapper } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <DiscoverLastfm />
      <DashboardPreview />
      <BuildLibrary />
      <Footer />
    </PageWrapper>
  );
};

export default LandingPage;
