import { useState } from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Header from "./Components/Header";
import WhyMe from "./Components/WhyMe";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <WhyMe />
      {/* Rest of your content */}
    </>
  );
}

export default App;
