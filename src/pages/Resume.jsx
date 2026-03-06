import Header from '/src/components/Header.jsx'
import ZionResume from '../assets/ZionJohnsonResume.pdf'
import Footer from '../components/Footer'

const Resume = () => {
    return (
        <div className='body'>
            <Header />
            <div className='content'>
                <h2 className='section_header' >Resume</h2>
                <div className='embed-center-wrapper'>
                    <embed src={ZionResume} className='embed' type='application/pdf' height="700px" width="70%" alt="Zion Johnson's Resume" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume