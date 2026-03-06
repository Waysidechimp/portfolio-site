import Header from '/src/components/Header.jsx'

const About = () => {

    return (
        <>
            <Header />
            <div className='content'>
                <h2 className='section_header'>About Me</h2>
                <div>
                    <p>
                        I've been programming, designing, and prototyping games and software for over 6 years.
                        I hold a Bachelor of Science in Computer Game Design and Development with a minor in Computer Science,
                        which has given me a strong foundation in computer science principles and C#. <br /><br />
                        Here you will find some projects I have contributed to as well as things that I worked on purely for fun.
                        I enjoy learning new things and tackling challenges that peak my interest. This means you should expect some not-so-pretty prototypes that seeks to explore different things.<br /><br />
                        If you have any questions feel free to contact me!
                    </p>
                </div>
            </div>
        </>
    )
}

export default About