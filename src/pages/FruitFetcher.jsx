import Header from "../components/Header"
import Footer from "../components/Footer"

const FruitFetcher = () => {
    return (
        <div className="body">
         <Header />
         <div className='content'>
            <div className="project-content">
                <h2 style={{textAlign:"center", alignSelf:"center"}}>
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
                <p>Fruit Fetcher is a game a made that I’m decently proud of.
                    It’s also the game that showed me that level design is hard.</p>
            </div>
            <div style={{textAlign:"center", backgroundColor:"#272744"}} className="project-content">
                <h2>
                    Experiences <br />
                </h2>
                <p style={{textAlign:"left", margin:"0px",fontSize:"23px"}} >
                        During the development of this game, I did the following:
                    </p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Coded a character controller with features like coyote timing</li>
                            <li>Created levels that interacted with the primary mechanic.</li>
                            <li>Imported and integrated are and animations</li>
                    </ul>
                    <p style={{textAlign:"left", margin:"0px",fontSize:"23px"}} >
                        During the development of this game, I learned the following:</p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Design Space, how many unique levels you can make are constrained by your mechanics.</li>
                            <li>Consistent work gets consistent results! A little work a day can make nice things.</li>
                    </ul>
            </div>
         </div>
         <Footer />
        </div >
    )
}

export default FruitFetcher