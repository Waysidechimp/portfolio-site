import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import WebProjects from './pages/WebProjects'
import GameProjects from './pages/GameProjects'
import Resume from './pages/Resume'
import About from './pages/About'
import FruitFetcher from './pages/FruitFetcher'
import EternalGuest from './pages/EternalGuest'
import DialogCreation from './pages/DialogCreation'
import PortfolioWebsite from './pages/PortfolioWebsite'


function App() {

  return (
    <div className='content-wrapper'>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/WebProjects' element={<WebProjects />} />
        <Route exact path='/GameProjects' element={<GameProjects />} />
        <Route exact path='/Resume' element={<Resume />} />
        <Route path='/About' element={<About />} />
        <Route path='/FruitFetcher' element={<FruitFetcher />} />
        <Route path='/EternalGuest' element={<EternalGuest />} />
        <Route path='/DialogCreation' element={<DialogCreation />} />
        <Route path='/PortfolioWebsite' element={<PortfolioWebsite />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
