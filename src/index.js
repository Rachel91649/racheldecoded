//Dependency Imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//File Imports
import './index.css';
import Welcome from './Welcome';
//import '../public/css/layout.css'
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    <div>
      <nav className="nav nav-tabs justify-content-center">
        <Link className="nav" to="/">Home</Link>
        {"  "}
        <Link className="nav" to="/about">About Me</Link>
        {"  "}
        <Link className="nav" to="/skills">Skills</Link>
        {" "}
        <Link className="nav" to="/projects">Projects</Link>
      </nav>
    </div>
    <div>
      <Route exact path="/" render={Welcome} />
    </div>
  </div>
);

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
