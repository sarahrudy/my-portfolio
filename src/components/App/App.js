import './App.css'
import SideBar from '../SideBar/SideBar'
import About from '../About/About'
import Projects from '../Projects/Projects'

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <About />
      <Projects />
    </div>
  )
}

export default App
