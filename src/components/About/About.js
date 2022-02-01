import './About.css'
import doubleDownArrows from '../../images/double-down-arrows.png'

const About = () => {
  return (
    <div className="About">
      <h1>SARAH RUDY</h1>
      <h2>SOFTWARE ENGINEER</h2>
      <p className>I created this website as a way to showcase the projects I've been working on.</p>
      <div className="scroll-container">
        <h3>SCROLL DOWN</h3>
        <img src={ doubleDownArrows } alt="two white arrows pointing downwards"></img>
      </div>
    </div>
  )
}

export default About