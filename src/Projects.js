import React from 'react';

const projects = ["Project 1", "Project 2", "Project 3"]

const Projects = () => (
	<div>
		<h1>
			<a name="Work">Work</a>
		</h1>
		<div className="row">
			{projects.map(project => (
				<div className="col-sm-4">
					<div className="card">
						<div className="card-block">
							<h4 className="card-title">{project}</h4>
							<p className="card-text">Super Awesome Thing I Built</p>
							<a href="#" className="btn btn-primary">{project}</a>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
)


export default Projects; 