import Navebar from './components/Navebar'
import HomeBody from './components/HomeBody'
import AboutMepage from './components/AboutMepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './components/Projects';
import Activitypage from './components/Activitypage';
import Intropage from './components/Intropage';
import SelfQuespage from './components/SelfQuespage';

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
