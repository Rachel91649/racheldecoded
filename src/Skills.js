import React from 'react';

const skills = ["HTML/CSS", "React.js", "JavaScript", "Node.js"];

const Skills = () => (
	<div>
		<h1>
			<a name="Skills">Skills</a>
		</h1>
		<ul>
			{skills.map(skill => (
				<li>{skill}</li>
			))}
		</ul>
	</div>
);

export default Skills;