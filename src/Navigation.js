import React from 'react';

const navLinks = ["Home", "About", "Work", "Contact"];

const Navigation = () => (
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
);

export default Navigation;

