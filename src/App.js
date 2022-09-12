import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ProjectManagers from './components/ProjectManagers';
import PostForm from './components/PostForm';
// import PostForm from './components/PostForm';



function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projectManagers' element={<ProjectManagers />}/>
          <Route path='/postForm' element={<PostForm />}/>
        </Routes>
      
    </div>
  );
}

export default App;
