import Navebar from './components/Navebar.jsx'
import HomeBody from './components/HomeBody.jsx'
import AboutMepage from './components/AboutMepage.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './components/Projects.jsx';
import Activitypage from './components/Activitypage.jsx';
import Intropage from './components/Intropage.jsx';
import SelfQuespage from './components/SelfQuespage.jsx';

function Homepage(){
  return (
    <>
      <Navebar/>
      <HomeBody/>
    </>
  )
}

function AboutMePage(){
  return (
    <>
      <Navebar/>
      <AboutMepage/>
    </>
  )
}

function ProjectPage(){
  return (
    <>
      <Navebar/>
      <Projects/>
    </>
  )
}

function ActivitiesPage(){
  return (
    <>
      <Navebar/>
      <Activitypage/>
    </>
  )
}

function Activity1page(){
  return (
    <>
      <Navebar/>
      <Intropage/>
    </>
  )
}

function Activity2page(){
  return (
    <>
      <Navebar/>
      <SelfQuespage/>
    </>
  )
}


function App() {
  return (
    <>
    <Router>
      <Routes>    
        <Route path="/" element= {<Homepage/>}/>
        <Route path="/AboutMe" element= {<AboutMePage/>}/>
        <Route path="/Projects" element= {<ProjectPage/>}/>
        <Route path="/Activities" element= {<ActivitiesPage/>}/>
        
        <Route path="/Week-1/intro" element= {<Activity1page/>}/>
        <Route path="/Week-2/QuesAns" element= {<Activity2page/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
