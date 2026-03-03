import LinkedinIcon from '/src/assets/linkedin_icon.png'
import GithubIcon from '/src/assets/github_icon.png'
import EmailIcon from '/src/assets/email_icon.png'

const Header = () => {

    return (
        <div className="header">
            <a href='/' className='home_title'>Zion Johnson's <br /> Developer Portfolio</a>
            <div className="dropdowns">
                <a href='/webprojects' className="dropdown_ele">Web Projects</a>
                <a href='/gameprojects' className="dropdown_ele">Game Projects</a>
                <a href='/resume' className="dropdown_ele">Resume</a>
                <a href='/about' className="dropdown_ele">About</a>
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