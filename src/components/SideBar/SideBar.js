import './SideBar.css'
import linkedIn from '../../images/linkedin.png'
import gitHub from '../../images/github.png'
import gmail from '../../images/gmail.png'
import resumeLogo from '../../images/resumeLogo.png'
import resume from '../../images/sarah-rudy-resume.png'
import turingLogo from '../../images/turing-logo.png'

const SideBar = () => {
  return (
    <div className="SideBar">
      <div>
        <a href="https://www.linkedin.com/in/rudysarah/" target="_blank" rel="noopener noreferrer">
          <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
        </a>
      </div>
      <div>
        <a href="https://github.com/sarahrudy" target="_blank" rel="noopener noreferrer">
          <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
        </a>
      </div>
      <div>
        <a href={'mailto:sarahrudy@gmail.com'} target="_blank" rel="noopener noreferrer">
          <img className="email" src={ gmail } alt="Link to email" />
        </a>
      </div>
      <div>
        <a href={ resume } target="_blank" rel="noopener noreferrer">
          <img className="resume" src={ resumeLogo } alt="Link to resume" />
        </a>
      </div>
      <div>
        <a href="https://turing.edu/" target="_blank" rel="noopener noreferrer">
          <img className="turing" src={ turingLogo } alt="Link to Turing website" />
        </a>
      </div>
    </div>
  )
}

export default SideBar