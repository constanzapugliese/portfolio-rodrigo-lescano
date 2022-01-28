import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/home/Home'
import AboutMe from './components/about-me/AboutMe'
import WorkExperience from './components/work-experience/WorkExperience'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='backgroundBlue'>
        <div className='backgroundImage'>
          <Home />
          <AboutMe /> 
        </div>
      </div>
      <WorkExperience />
      <Education />
      <div className='backgroundSkills'>
        <Skills />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
