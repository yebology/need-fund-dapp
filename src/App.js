import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Home from './views/Home.js';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen realtive">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
