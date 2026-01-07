import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Header from "./Components/Header";
import YouAndI from "./Components/YouAndI";
import TrustMe from "./Components/TrustMe";
import Partners from "./Components/Partners";
import Results from "./Components/Results";
import SLAs from "./Components/SLAs";
import PricingTabs from "./Components/PricingTabs";
import WallOfPride from "./Components/WallOfPride";
import CreativeSOSCTA from "./Components/CreativeSOSCTA";
import Portfolio from "./Pages/Portfolio";
import Projects from "./Pages/Projects";

function MainContent() {
  return (
    <>
      <Header />
      <YouAndI />
      <TrustMe />
      <Partners />
      <SLAs />
      <Results />
      <PricingTabs />
      <WallOfPride />
      <CreativeSOSCTA />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Dynamic route for individual projects */}
        <Route path="/projects/:projectId" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;