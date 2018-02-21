import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	
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

	/* 
		This method is only run when you want to choose 
		whether or not to update this and child components.
		An alternative is to import and extend PureComponent.
	
		shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
		return nextProps.persons !== this.props.persons ||
			nextProps.changed !== this.props.changed ||
			nextProps.clicked !== this.props.clicked;
		//return true;
	}*/

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
				position={index}
				name={person.name} 
				age={person.age} 
				key={person.id} 
				changed ={(event) => this.props.changed(event, person.id)} />
		} );
	}
}

export default Persons;