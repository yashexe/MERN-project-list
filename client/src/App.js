import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigationBar';

function App() {
  return (
    <div className>
      <BrowserRouter>
        <NavigationBar/>

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
