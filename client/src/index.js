import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { ProjectContextProvider } from './context/projectContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <App/>
    </ProjectContextProvider>
  </React.StrictMode>
);

