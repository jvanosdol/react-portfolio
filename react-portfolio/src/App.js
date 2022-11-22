import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/Aboutme';
import Navbar from './components/Navbar'
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
