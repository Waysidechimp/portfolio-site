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
            
        </div>
    )
}

export default Header