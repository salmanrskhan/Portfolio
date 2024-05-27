import React from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import LargeNav from './components/largeNav/LargeNav'
import { Banner } from "./components/banner/Banner";
// import Service from './components/services/Service';
import Project from "./components/projects/Project";

const App = () => {
  return (
    <>
      < LargeNav />
      < Banner />
      < Nav />
      < About />
      < Experience />
      < Project />
      {/* < Service /> */}
      < Contact />
      < Footer />
    </>
  )
}

export default App
