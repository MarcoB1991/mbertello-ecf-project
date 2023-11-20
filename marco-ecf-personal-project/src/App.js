
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { DevGames } from './components/DevGames';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <Router>
      <div className='app'>

        <Routes>
          <Route path="/" element={
          <>
          <NavBar />
          <Banner />
          <DevGames />
          <Projects />
          <Contact />
          <Footer />
          </>
          } />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup  />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
