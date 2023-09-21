import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavigationBar from './components/navigationBar';
import Home from './pages/home'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar/>
          <div className='pages'>
            <Routes>

              <Route path='/' element= { <Home/> }/>
            
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


