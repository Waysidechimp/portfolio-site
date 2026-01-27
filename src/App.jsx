import { useState } from 'react'
import stockImg from './assets/portrait.png'
import fruitFetcherImg from './assets/FruitFetcher.png'
import Project from './components/Project.jsx'
import './index.css'

function App() {


  const introParagraph = `I’m Zion Johnson, a game developer and graduate of Game Design and Development.\n
I'm drawn to games because they are interactive experiences that place players inside of ideas, challenges, and perspectives.\n
I'm passionate about creating games that push boundaries through meaningful mechanics and emotionally impactful experiences that will leave players thinking long after they finish playing.\n
Here you'll find some projects I've worked on, along with my resume. Feel free to explore.`

  return (
    <div className='content'>
      <h1 className='home_title'>Zion Johnson's Developer Portfolio</h1>
      <div className='intro'>
        <h2 className='intro_header'>About Me</h2>
          <div className='intro_content'>
            <p className='intro_paragraph'> {introParagraph} </p>
            <img src={stockImg} alt="stock image" className='intro_portrait_img'/>
          </div>
      </div>
      <div className='projects'>
        <h2 className='projects_title'>Projects + Experiences</h2>
        <Project
          projectTitle="Fruit Fetcher"
          projectDate="Winter 2024"
          projectRole="Design & Programming"
          projectImg={fruitFetcherImg}  />
      </div>
    </div>
  )
}

export default App
