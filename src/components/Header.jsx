import LinkedinIcon from '/src/assets/linkedin_icon.png'
import GithubIcon from '/src/assets/github_icon.png'
import EmailIcon from '/src/assets/email_icon.png'

const Header = () => {

    return (
        <div className="header">
            <h1 className='home_title'>Zion Johnson's <br /> Developer Portfolio</h1>
            <div className="dropdowns">
                <h3 className="dropdown_ele">Web Projects</h3>
                <h3 className="dropdown_ele">Game Projects</h3>
                <h3 className="dropdown_ele">Resume</h3>
                <h3 className="dropdown_ele">About</h3>
            </div>
            <div className="socials">
                    <a href="https://www.linkedin.com/in/zion-johnson-96b350256/" >
                        <img src={LinkedinIcon} alt="LinkedIn Icon" className='socials_img'/>
                    </a>
                    <a href="https://github.com/Waysidechimp">
                        <img src={GithubIcon} alt="Github Icon" className='socials_img'/>
                    </a>
                    <a href="zionajjohnson@gmail.com">
                        <img src={EmailIcon} alt="Email Icon" className='socials_img'/>
                    </a>
            </div>
            
        </div>
    )
}

export default Header