import Footer from '../components/Footer'
import Header from '/src/components/Header.jsx'
import ProjectHome from '../components/ProjectHome'
import FruitFetcherIMG from '../assets/FruitFetcher.png'
import EternalGuestIMG from '../assets/EternalGuest/TitleCard.png'
import DialogCreationIMG from '../assets/DialogCreation/TitleCard.png'
import portfolioIMG from '../assets/PortfolioIMG.png'

const Home = () => {
    return (
        <div className='body'>
            <Header />
            <div className='content'>
            <div className='content-center'>
                <h3>Hello! My name is Zion. I am a</h3>
                <h2>Software Developer and Game Developer</h2>
                <h3>Welcome to my portfolio!!!</h3>
            </div>
            <h2 className='section-header'>Game Projects</h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='experience-home' style={{overflowX:"auto"}}>
                        <ProjectHome projectTitle="Fruit Fetcher" projectYr="(2024)" projectRole="Programming & Design" projectImg={FruitFetcherIMG} />
                        <ProjectHome projectTitle="Eternal Guest" projectYr="(2024)" projectRole="Gameplay Programmer" projectImg={EternalGuestIMG} />
                        <ProjectHome projectTitle="Dialog Creation" projectYr="(2025)" projectRole="Programmer" projectImg={DialogCreationIMG} />
                    </div>
                </div>
            <h2 className='section-header'>Web Projects</h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='experience-home' style={{overflowX:"auto"}}>
                        <ProjectHome projectTitle="Portfolio Website" projectYr="(2026)" projectRole="Programming & Design" projectImg={portfolioIMG} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home