import Header from "../components/Header"
import Footer from "../components/Footer"
import DialogIMG1 from "../assets/DialogCreation/DialogCreateIMG1.png"
import DialogIMG2 from "../assets/DialogCreation/DialogCreateIMG2.png"

const DialogCreation = () => {
    return (
        <div className="body">
         <Header />
         <div className='content' style={{marginBottom:"0px"}}>
            <div className="project-content">
                <h2 style={{textAlign:"center", alignSelf:"center", marginTop:"20px"}}>
                    Dialog Creation is <br />
                    <small>
                        a test using the Inkle software 'Ink' and their Unity Integration API 
                        to create a designer friendly dialog system.
                    </small>
                </h2>
            </div>
            <div className="project-content">
                <ul>
                    <li>Time Span: January 2025</li>
                    <li>Genre: Dialog System Tool</li>
                    <li>Engine: Unity</li>
                    <li>Team Size: 1</li>
                    <li>Duration: 1 week</li>
                    <li>Platform: PC</li>
                    <li>Website: <a href="https://xion27.itch.io/inkle-dialog-system?password=password">Itch.io Link</a></li>
                    <li>GitHub: <a href="https://github.com/Waysidechimp/InkleDialogSystem">GitHub Link</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center"}} className="project-content">
                <h2 style={{textAlign:"center"}} >Gameplay</h2>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/00M8yBQuyG0?si=nSf5fMxEADbJSS4A" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <p style={{textAlign:"left", fontSize:"20px", margin:"0px 60px 0px"}}>
                    This project was undertaken with the intention of exploring alternatives to creating a dialog system 
                    from scratch on your own. I went with Inkle’s ‘Ink’ for this endeavor and achieved pleasant results. 
                    Implementing this was quicker and easier than having to wrestle with a txt or numerous string arrays 
                    while also being designer friendly.
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
                            <li>Studied the capabilities of the ink narrative scripting language.</li>
                            <li>Used the integration API to create scriptable objects that handles all the API's fuctionality.</li>
                            <li>Created a script that takes in the scriptable object and prints those lines to the screen while dynamcially creating buttons.</li>
                    </ul>
                    <p style={{textAlign:"left", margin:"0px 10px 0px", fontSize:"23px"}} >
                        During the development of this game, I learned the following:</p>
                    <ul style={{textAlign:"left",margin:"7px"}}>
                            <li>Using APIs and third party tools can make life a whole lot easier for everyone involved.</li>
                            <li>That Twine allows you to do something similar.</li>
                    </ul>
            </div>
         </div>
         <div className="expandable-img-container" style={{display:"flex", padding:"0px 100% 0px", margin:"3% 0px 3%", backgroundColor:"#272744"}}>
                <img src={DialogIMG1} alt="Fruit Fetcher Gaemplay" width={300} height={150} style={{margin:"3px"}}/>
                <img src={DialogIMG2} alt="Fruit Fetcher Gaemplay" width={300} height={150} style={{margin:"3px"}}/>
        </div>
         <Footer />
        </div >
    )
}

export default DialogCreation