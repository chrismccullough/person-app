import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	
	// Component Creation Lifecycle Hooks
	constructor(props) {
		super(props);
		console.log('[Persons.js] inside onstructor()', props);
	}

	componentWillMount() {
		console.log('[Persons.js] inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] inside componendDidMout()');
	}

	// Component Update Lifecycle Hooks
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
		return nextProps.persons !== this.props.persons ||
			nextProps.changed !== this.props.changed ||
			nextProps.clicked !== this.props.clicked;
		//return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE Persons.js] inside componentDidUpdate()');
	}

	render () {
		console.log('[Persons.js] inside render()');

		return this.props.persons.map( (person, index) => {
			return <Person 
				click={() => this.props.clicked(index)}
				key={person.id}
				name={person.name} 
				age={person.age} 
				changed ={(event) => this.props.changed(event, person.id)} />
		} );
	}
}

export default Persons;