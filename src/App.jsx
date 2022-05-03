import React from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import classes from "./App.module.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Drone from "./Pages/Drone";
import Nft from "./Pages/Nft";
import Theory from "./Pages/Theory";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HomeMobile from "./Mobile/Pages/HomeMobile";
import MobilePlayer from "./Mobile/Components/MobilePlayer";
import AboutMobile from "./Mobile/Pages/AboutMobile";
import TheoryMobile from "./Mobile/Pages/TheoryMobile";
import DroneMobile from "./Mobile/Pages/DroneMobile";
import NFTMobile from "./Mobile/Pages/NFTMobile";
import ContactMobile from "./Mobile/Pages/ContactMobile";
import MobileFooter from "./Mobile/Components/MobileFooter";
import NotFoundMobile from "./Mobile/Pages/NotFoundMobile";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  return (
    <div className={classes.container}>
      {isMobile && (
        <React.Fragment>
          <HomeMobile />
          <Routes>
            <Route path="*" element={<NotFoundMobile />} />
            <Route path="/" element={<MobilePlayer />} />
            <Route path="/about" element={<AboutMobile />} />
            <Route path="/theory" element={<TheoryMobile />} />
            <Route path="/drone" element={<DroneMobile />} />
            <Route path="/nft" element={<NFTMobile />} />
            <Route path="/contact" element={<ContactMobile />} />
          </Routes>
          <MobileFooter />
        </React.Fragment>
      )}
      {isDesktop && (
        <div className={classes.container}>
          <header className={classes.header}>
            <h1>
              <Link to="/">HARMONICITY</Link>
            </h1>
          </header>
          <Navbar />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/drone" element={<Drone />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
