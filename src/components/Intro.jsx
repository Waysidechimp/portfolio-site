
import stockImg from '/src/assets/portrait.png'

const introParagraph = `I’m Zion Johnson, a software engineer and graduate of Kennesaw State University with experience building web and game applications.\n
I enjoy creating interactive, user-focused software and working across the full development lifecycle, from design and implementation to debugging and refinement.\n
Here you’ll find selected projects I’ve worked on, along with my resume. Feel free to explore.`


const Intro = () => {

    return (
        <div className='intro'>
          <h2 className='intro_header'>About Me</h2>
            <div className='intro_content'>
              <p className='intro_paragraph'> {introParagraph} </p>
              <img src={stockImg} alt="stock image" className='intro_portrait_img'/>
            </div>
        </div>
    )
}

export default Intro