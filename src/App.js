import './index.css'
import TopBar from "./topBar/TopBar";
import HeroHome from "./heroHome/HeroHome";
import TilesSection from "./tilesSection/TilesSection";
import MainContent from "./mainContent/MainContent";
import FooterSection from "./footerSection/FooterSection";

function App() {
  return (
    <>
      <TopBar />
      <HeroHome />
      <TilesSection />
      <MainContent />
      <FooterSection />
    </>
  );
}

export default App;
