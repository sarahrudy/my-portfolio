import './SideBar.css'
import linkedIn from '../../images/linkedin.png';
import gitHub from '../../images/github.png';

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
    </div>
  )
}

export default SideBar