import Footer from '../components/Footer'
import Header from '/src/components/Header.jsx'

const Home = () => {
    return (
        <div className='body'>
            <Header />
            <div className='content-center'>
                <h3>Hello! My name is Zion. I am a</h3>
                <h2>Software Developer and Game Developer</h2>
                <h3>Welcome to my portfolio</h3>
            </div>
            <Footer />
        </div>
    )
}

export default Home