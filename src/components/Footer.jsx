import LinkedinIcon from '/src/assets/linkedin_icon.png'
import GithubIcon from '/src/assets/github_icon.png'
import EmailIcon from '/src/assets/email_icon.png'

const Footer = () => {

    return (
        <div className="footer">
            <footer>
            <div className="socials">
                    <a href="https://www.linkedin.com/in/zion-johnson-96b350256/" >
                        <img src={LinkedinIcon} alt="LinkedIn Icon" className='socials_img'/>
                    </a>
                    <a href="https://github.com/Waysidechimp">
                        <img src={GithubIcon} alt="Github Icon" className='socials_img'/>
                    </a>
                    <a href="mailto:zionajjohnson@gmail.com">
                        <img src={EmailIcon} alt="Email Icon" className='socials_img'/>
                    </a>
            </div>
            </footer>
        </div>
    )
}

export default Footer