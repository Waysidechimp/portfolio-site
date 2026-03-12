import Header from "../components/Header"
import Footer from "../components/Footer"
import FruitGIF1 from "../assets/FruitGIF1.gif"
import EternalGIF1 from "../assets/EternalGuest/EternalGuestGIF1.gif"
import FruitIMG2 from "../assets/FruitIMG2.png"

const PortfolioWebsite = () => {
    return (
        <div className="body">
         <Header />
         <div className='content' style={{marginBottom:"0px"}}>
            <div className="project-content">
                <h2 style={{textAlign:"center", alignSelf:"center", marginTop:"20px"}}>
                    This website is <br />
                    <small>
                        a portfolio to show off the various projects and other things I have worked on.
                    </small>
                </h2>
            </div>
            <div className="project-content">
                <ul>
                    <li>Time Span: February 2026</li>
                    <li>Genre: Portfolio Website</li>
                    <li>Tools: React.js</li>
                    <li>Team Size: 1</li>
                    <li>Timespan: 3 weeks</li>
                    <li>Website: <a href="/">Portfolio Link</a></li>
                    <li>GitHub: <a href="https://github.com/Waysidechimp/portfolio-site">GitHub Link</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center"}} className="project-content">
                <h2 style={{textAlign:"center"}} >Website Content</h2>
                <p style={{textAlign:"left", fontSize:"23hb px", margin:"0px 60px 0px"}}>
                    If you are here you have already seen what my protfolio looks like but I'll go over it here anyways.<br />
                    This website has a page for every game or web project that I am reasonably proud of. Along with these
                    projects you will find my resume and an about page with a small blurb about me.
                </p>
            </div>
            <div style={{textAlign:"center", padding:"40px 0px 40px", backgroundColor:"#272744"}} className="project-content">
                <h2>
                    Experiences <br />
                </h2>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this ebsite, I did the following:
                    </p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Coded the pages using React and Javascript / JSX.</li>
                            <li>Used CSS to make the website look the way I wish.</li>
                            <li>Bought a domain name thorough Porkbun and hosted the site though Cloudflare</li>
                    </ul>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this website, I learned the following:</p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Learned HTML, CSS, and React.</li>
                            <li>How to take inspiration from other websites, F12 is king.</li>
                    </ul>
            </div>
         </div>
         <div className="expandable-img-container" style={{display:"flex", padding:"0px 100% 0px", margin:"3% 0px 3%", backgroundColor:"#272744"}}>
                <img src={FruitGIF1} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
                <img src={EternalGIF1} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
                <img src={FruitIMG2} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
        </div>
         <Footer />
        </div >
    )
}

export default PortfolioWebsite