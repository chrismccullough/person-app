import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';

//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
	
	// Component Creation Lifecycle Hooks
	constructor(props) {
		super(props);
		console.log('[App.js] inside onstructor()', props);

		this.state = {
			persons: [
				{ id: 1, name: 'Max', age: 28 },
				{ id: 2, name: 'Manu', age: 29 },
				{ id: 3, name: 'Stephanie', age: 26 }
			],
			showPersons: false,
			toggleClicked: 0
		}
	}

	componentWillMount() {
		console.log('[App.js] inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] inside componendDidMout()');
	}
	
	// Component Update Lifecycle Hooks
/*	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
		return nextState.persons !== this.state.persons ||
		nextState.showPersons !== this.state.showPersons;
	}*/

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE App.js] inside componentDidUpdate()');
	}

	/*state = {
		persons: [
			{ id: 1, name: 'Max', age: 28 },
			{ id: 2, name: 'Manu', age: 29 },
			{ id: 3, name: 'Stephanie', age: 26 }
		],
		showPersons: false
	}*/

	nameChangedHandler = (event, id) => {
		// Get the index in the persons array and confirm that it matches the id argument.
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});
		// Use the spread operator (...) to create a new array with the updated object.
		const person = {
			...this.state.persons[personIndex]
		};
		// Update the current person object name value
		person.name = event.target.value;
		// Create a new persons array with the spread operator (...).
		const persons = [...this.state.persons];
		// Update the person in the persons array at the point of personIndex.
		persons[personIndex] = person;
		// Update state with the newly created persons array.
		this.setState( {persons: persons} )
	}

	deletePersonHandler = (personIndex) => {
		// THIS IS THE OLD WAY: const persons = this.state.persons.slice();
		// Use the spread operator to create a new array
		const persons = [...this.state.persons];
		// Splice the array at the point of the personIndex
		persons.splice(personIndex, 1);
		// Update state with the new array
		this.setState({persons: persons});
	}

	togglePersonsHandler = () => {
		// Set a static variable to the state value of showPersons.
		const doesShow = this.state.showPersons;
		// Update state with the inverse of doesShow.
		// Tip: This is the safest way to update state when the 
		// new state depends on old state.
		this.setState( ( prevState, props ) =>{ 
			return {
				showPersons: !doesShow,
				toggleClicked: prevState.toggleClicked + 1
			}
		} )
	}

	render() {
		console.log('[App.js] inside render()');
		let persons = null;
		
		if (this.state.showPersons) {
			persons = <Persons 
						persons={this.state.persons} 
						clicked={this.deletePersonHandler} 
						changed={this.nameChangedHandler} />;
		}

		return (
			<Aux>
				<button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
				<Cockpit 
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>

				{persons}
			</Aux>
		);
	}
}

export default withClass(App, 'App');