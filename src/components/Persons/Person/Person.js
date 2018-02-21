import React, {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] inside onstructor()', props);
	}

	componentWillMount() {
		console.log('[Person.js] inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] inside componendDidMout()');
	}

	render () {
		console.log('[Person.js] inside render()');
		return (
			<Aux>
				<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
		)

		/*return [
			<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
			<p>{this.props.children}</p>,
			<input type="text" onChange={this.props.changed} value={this.props.name} />,
		]*/
	}
}

export default withClass(Person, 'Person');