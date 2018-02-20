import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'Max', age: 28 },
			{ id: 2, name: 'Manu', age: 29 },
			{ id: 3, name: 'Stephanie', age: 26 }
		],
		showPersons: false
	}

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
		this.setState({ showPersons: !doesShow })
	}

	render() {
		let persons = null;
		
		if (this.state.showPersons) {
			persons = <Persons 
						persons={this.state.persons} 
						clicked={this.deletePersonHandler} 
						changed={this.nameChangedHandler} />;
		}

		return (
			<div className="App">
				<Cockpit 
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>

				{persons}
			</div>
		);
	}
}

export default App;