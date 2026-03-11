import Header from "../components/Header"
import Footer from "../components/Footer"
import FruitGIF1 from "../assets/FruitGIF1.gif"
import FruitIMG1 from "../assets/FruitIMG1.png"
import FruitIMG2 from "../assets/FruitIMG2.png"

const FruitFetcher = () => {
    return (
        <div className="body">
         <Header />
         <div className='content' style={{marginBottom:"0px"}}>
            <div className="project-content">
                <h2 style={{textAlign:"center", alignSelf:"center", marginTop:"20px"}}>
                    Fruit Fetcher is <br />
                    <small>
                        a single player puzzle platformer where you run
                        back to move forward.
                    </small>
                </h2>
            </div>
            <div className="project-content">
                <ul>
                    <li>Time Span: Winter 2023</li>
                    <li>Genre: 2D Puzzle Platformer</li>
                    <li>Engine: Unity</li>
                    <li>Team Size: 1</li>
                    <li>Duration: 3 weeks</li>
                    <li>Platform: PC</li>
                    <li>Website: <a href="https://xion27.itch.io/fruit-fetcher">Itch.io Link</a></li>
                    <li>GitHub: <a href="https://github.com/Waysidechimp/FruitFetcher">GitHub Link</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center"}} className="project-content">
                <h2 style={{textAlign:"center"}} >Gameplay</h2>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/-IrYz6iIEFQ?si=YdT4PocV2D9AKBhl" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <p style={{textAlign:"left", fontSize:"20px", margin:"0px 60px 0px"}}>
                    Fruit Fetcher is a game a made that I’m decently proud of.
                    It’s also the game that showed me that level design is hard.
                </p>
            </div>
            <div style={{textAlign:"center", padding:"40px 0px 40px", backgroundColor:"#272744"}} className="project-content">
                <h2>
                    Experiences <br />
                </h2>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this game, I did the following:
                    </p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Coded a character controller with features like coyote timing</li>
                            <li>Created levels that interacted with the primary mechanic.</li>
                            <li>Imported and integrated are and animations</li>
                    </ul>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this game, I learned the following:</p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Design Space, how many unique levels you can make are constrained by your mechanics.</li>
                            <li>Consistent work gets consistent results! A little work a day can make nice things.</li>
                    </ul>
            </div>
         </div>
         <div className="expandable-img-container" style={{display:"flex", padding:"0px 100% 0px", margin:"3% 0px 3%", backgroundColor:"#272744"}}>
                <img src={FruitGIF1} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
                <img className="expandable-img" src={FruitIMG1} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
                <img className="expandable-img" src={FruitIMG2} alt="Fruit Fetcher Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
        </div>
         <Footer />
        </div >
    )
}

export default FruitFetcher