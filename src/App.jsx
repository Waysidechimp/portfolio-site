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
import FruitFetcher from './components/FruitFetcher'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/WebProjects' element={<WebProjects />} />
        <Route exact path='/GameProjects' element={<GameProjects />} />
        <Route exact path='/Resume' element={<Resume />} />
        <Route path='/About' element={<About />} />
        <Route path='/FruitFetcher' element={<FruitFetcher />} />
      </Routes>
    </Router>
  )
}

export default App
