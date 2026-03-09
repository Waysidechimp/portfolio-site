import Footer from '../components/Footer'
import Header from '/src/components/Header.jsx'
import Project from '../components/Project'
import portfolioIMG from '../assets/PortfolioIMG.png'

const WebProjects = () => {
    const portWebDesc = `The website you're on right this very moment!`
    
    return (
        <div className='body'>
            <Header />
            <div className='content'>
                <h2 className='section_header' >Web Projects</h2>
                <div className='experience'>
                    <Project projectTitle="Portfolio Website" projectYr="(2026)" projectRole="Programming & Design" projectDesc={portWebDesc} projectImg={portfolioIMG} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WebProjects