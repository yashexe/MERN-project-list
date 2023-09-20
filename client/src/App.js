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

              <Route path='/' element= {<Home/>}/>
            
            </Routes>
          </div>
{/* <div className="new-project-container">
  <p className="new-project-title">New Project</p>
  <div className="fields">
    <div className="project-name">Project Name</div>
    <div className="link">Link</div>
    <div className="description">
      <ul>
        Jotnotes
      </ul>
    </div>
  </div>
</div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;


