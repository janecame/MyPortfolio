import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage'; 
import JourneyPage from './components/pages/JourneyPage'; 
import ProjectPage from './components/pages/ProjectPage';
import AchievementPage from './components/pages/AchievementPage';
import AboutPage from './components/pages/AboutPage';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/journey' element={<JourneyPage />}/>
            <Route path='/projects' element={<ProjectPage />}/>
            <Route path='/achievements' element={<AchievementPage />}/>
            <Route path='/aboutme' element={<AboutPage />}/>

            
          </Routes>
      </BrowserRouter>


  );
}

export default App;
