import './App.css';
import Header from './components/Header.js'
import Home from './views/Home.js';
import Project from './views/Project.js';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen realtive">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/:id" element={<Project/>}/>
      </Routes>
    </div>
  );
}

export default App;
