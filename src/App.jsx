import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experiece/Experience'
import Projects from './components/Projects/projects'
import project from './components/project/project'

// import Contact from './components/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
      <About />
      
      {/* <Experience /> */}
      <Projects />
    </div>
  )
}

export default App
