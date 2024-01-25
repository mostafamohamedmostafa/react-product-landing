import { Link, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from './components/Nav';
import Hero from './components/Hero';
import {Features} from './components/Features';
import {UsefullFeatures} from './components/Features';
import {Featuresconnect} from './components/Features';
import {Featuressize} from './components/Features';
import Apps from './components/Apps';
import {Tracker} from './components/Tracker';
import {Trackerpossibilities} from './components/Tracker';
import {Trackerinterface} from './components/Tracker';
import Design from './components/Design';
import Video from './components/Video';
import Characteristics from './components/Characteristics';
import Preorder from './components/Pre-order';



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">

      < Nav />
      <Hero />
      < Features />
      <UsefullFeatures />
      <Featuresconnect />
      <Featuressize />
      <  Apps />
      <  Tracker />
      <  Trackerpossibilities />
      <  Trackerinterface />
      < Design />
      < Video />
      < Characteristics />
      < Preorder />

    </div>
  );
}

export default App;
