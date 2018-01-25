//Dependency Imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//File Imports
import './index.css';
//import '../public/css/layout.css'
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    <div>
      <nav className="nav nav-tabs justify-content-center">
        <i className="fa fa-home nav" aria-hidden="true"><Link className="nav" to="/">Home</Link></i>
        {"  "}
        <i className="fa fa-user-circle-o nav" aria-hidden="true"><Link className="nav" to="/about">About Me</Link></i>
        {"  "}
        <i className="fa fa-magic nav" aria-hidden="true"><Link className="nav" to="/skills">Skills</Link></i>
        {" "}
        <i className="fa fa-code nav" aria-hidden="true"><Link className="nav" to="/projects">Projects</Link></i>
      </nav>
    </div>
    <div>
      
    </div>
  </div>
);

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
