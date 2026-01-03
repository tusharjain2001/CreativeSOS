import { useState } from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Header from "./Components/Header";
import YouAndI from "./Components/YouAndI";
import TrustMe from "./Components/TrustMe";
import Partners from "./Components/Partners";
import Results from "./Components/Results";
import SLAs from "./Components/SLAs";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <YouAndI />

      <TrustMe />
      <Partners />
      <SLAs />
      <Results />

      {/* Rest of your content */}
    </>
  );
}

export default App;
