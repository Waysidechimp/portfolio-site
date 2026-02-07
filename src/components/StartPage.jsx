import Header from './Header.jsx'
import Intro from './Intro.jsx'
import fruitFetcherImg from '/src/assets/FruitFetcher.png'
import Project from './Project.jsx'

const StartPage = () => {
    return (
        <>
        <Header />
        <div className='content'>
            <Intro />
            <div className='projects'>
            <h2 className='projects_title'>Projects + Experiences</h2>
            <Project
                projectTitle="Fruit Fetcher"
                projectDate="Winter 2024"
                projectRole="Design & Programming"
                projectImg={fruitFetcherImg}
            />
            </div>
        </div>
        </>
    )
}

export default StartPage