import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Auxilliary';

const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = 'Red';
	}

	if (props.persons.length <= 2) {
		assignedClasses.push('red'); // assignedClasses = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push('bold'); // assignedClasses = ['red', 'bold']
	}

	return (
		<Aux>
			<h1>{props.appTitle}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>

			<button 
			className={btnClass}
			onClick={props.clicked}>Toggle Persons</button>
		</Aux>
	)
};

export default cockpit;