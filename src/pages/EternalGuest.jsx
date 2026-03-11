import Header from "../components/Header"
import Footer from "../components/Footer"
import GuestGIF1 from "../assets/EternalGuest/EternalGuestGIF1.gif"
import GuestGIF2 from "../assets/EternalGuest/EternalGuestGIF2.gif"

const EternalGuest = () => {
    return (
        <div className="body">
         <Header />
         <div className='content' style={{marginBottom:"0px"}}>
            <div className="project-content">
                <h2 style={{textAlign:"center", alignSelf:"center", marginTop:"20px"}}>
                    The Eternal Guest is <br /> <br />
                    <small>
                        a single player slash and bash where you skillfully dodge 
                        enemy fire and beat your way out.
                    </small>
                </h2>
            </div>
            <div className="project-content">
                <ul>
                    <li>Time Span: Spring 2024 - Winter 2024</li>
                    <li>Genre: 2D Hack and Slash Bullet Mayhem</li>
                    <li>Engine: Unity</li>
                    <li>Team Size: 5</li>
                    <li>Duration: 30 weeks</li>
                    <li>Platform: PC</li>
                    <li>Website: <a href="https://t5-impact.itch.io/the-eternal-guest">Itch.io Link</a></li>
                    <li>GitHub: <a href="https://github.com/AvisTheAvaxion/Twisted-Minds-Studio/tree/main">GitHub Link</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center"}} className="project-content">
                <h2 style={{textAlign:"center"}} >Gameplay</h2>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/QUhfw9TmlBg?si=WQE1Xi9Zs0byRyZj" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <p style={{textAlign:"left", fontSize:"20px", margin:"0px 60px 0px"}}> 
                    The Eternal Guest was developed by a team of 5 for our capstone project with 2 others coming on 
                    later to contribute additional music. <br />
                    Since this was our capstone project we wanted to make something we could 
                    proudly show off and for something made in the span of a year.
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
                            <li>Created the dialog/cutscene, quest, NPC, and enemy spawning systems</li>
                            <li>Created the floor 2 boss.</li>
                            <li>Worked with designers and artist to implement systems friendly to them.</li>
                    </ul>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this game, I learned the following:</p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>When you have a strict timeline you have to be critical of ideas, everything can't get in.</li>
                            <li>Putting value on ideas. Since everything cant make it in this is necessary.</li>
                            <li>Making designer friendly systems and interfaces. Everybody isn't a programmer after all.</li>
                            <li>Working under pressure of strict deadlines. Sometimes you just have to miss some sleep.</li>
                    </ul>
            </div>
         </div>
         <div className="expandable-img-container" style={{display:"flex", padding:"0px 100% 0px", margin:"3% 0px 3%", backgroundColor:"#272744"}}>
                <img src={GuestGIF1} alt="Eternal Guest Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
                <img src={GuestGIF2} alt="Eternal Guest Gaemplay" width={250} height={150} style={{margin:"3px"}}/>
        </div>
         <Footer />
        </div >
    )
}

export default EternalGuest