//Dependency Imports
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//File Imports
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//would need to take the links off the links off the nav bar and just render the components in one main component.

//What is this going to look like?
//Trenton Makes the world takes: http://www.cedricvella.com/

/*
const App = () => (
  <div>
    <div>
      <nav className="nav navbar-toggleable-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-brand" href="#"></span>
				</button>
        <Link className="nav" to="/">Home</Link>
        {"  "}
        <Link className="nav" to="/about">About Me</Link>
        {"  "}
        <Link className="nav" to="/skills">Skills</Link>
        {" "}
        <Link className="nav" to="/work">Work</Link>
      </nav>
    </div>
    <div>
      <Route exact path="/" render={Welcome} />
			<Route path="/about" render={About} />
			<Route path="/skills" render={Skills} />
			<Route path="/work" render={Projects} />
    </div>
  </div>
);
*/
//const navLinks = ["Home", "About", "Work", "Contact"];

/*
const App = () => (
	<div>
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			<button 
				className="navbar-toggler navbar-toggler-right"
				type="button" 
				data-toggle="collapse" 
				data-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" 
				aria-expanded="false" 
				aria-lable="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<a className="navbar-brand" href="#">Rachel | Decoded</a>
		
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				{navLinks.map(link => (
					<li className="nav-item active">
						<a className="nav-link" href={"#" + link}> {link} </a>
					</li>
				))}
			</ul>
		</div>
		</nav>
	</div>
)
*/



render(	<App />, document.getElementById('root'));

registerServiceWorker();

