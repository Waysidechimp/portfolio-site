import Header from '/src/components/Header.jsx'
import Intro from '/src/components/Intro.jsx'
import fruitFetcherImg from '/src/assets/FruitFetcher.png'
import Project from '/src/components/Project.jsx'

const Home = () => {
    return (
        <>
        <Header />
        <div className='content'>
            <Intro />
        </div>
        </>
    )
}

export default Home