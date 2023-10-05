import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import NavigationBar from './components/header/navigationBar';
import Home from './pages/home'

function App() {

  const [newProjectVisible, setNewProjectVisible] = useState(false)

  const toggleNewProject = () => setNewProjectVisible(!newProjectVisible)
  


  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar toggleNewProject={toggleNewProject} />
          <div className='pages'>
            <Routes>
              <Route path='/' element= {
                <Home
                  newProjectVisible={newProjectVisible}/> }
                />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


