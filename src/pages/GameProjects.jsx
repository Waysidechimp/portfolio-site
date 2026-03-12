import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Project from '../components/Project.jsx'
import FruitFetcherIMG from '../assets/FruitFetcher/FruitFetcher.png'
import EternalGuestIMG from '../assets/EternalGuest/TitleCard.png'
import DialogCreationIMG from '../assets/DialogCreation/TitleCard.png'

const GameProjects = () => {
    const fruitFetchDesc = "A loopy puzzle platform made by myself.\nGet all the fruit and reach the goal!"
    const eternalGuestDesc = "This game was made with my college peers. Hack and bash your way out of the mysterious hotel!"
    const dialogCreationDesc = "This tool was made to further explore dialog creation systems using\nnarrative design tools like Inkle or Twine."
    
    return (
        <div className='body'>
            <Header />
            <div className='content'>
                <h2 className='section-header' >Game Projects</h2>
                <div className='experience'>
                    <Project projectTitle="Fruit Fetcher" projectYr="(2024)" projectRole="Programming & Design" projectImg={FruitFetcherIMG} projectDesc={fruitFetchDesc} />
                    <Project projectTitle="Eternal Guest" projectYr="(2024)" projectRole="Gameplay Programmer" projectImg={EternalGuestIMG} projectDesc={eternalGuestDesc} />
                    <Project projectTitle="Dialog Creation" projectYr="(2025)" projectRole="Programmer" projectImg={DialogCreationIMG} projectDesc={dialogCreationDesc} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GameProjects