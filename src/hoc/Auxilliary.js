/* 
	This component can be wrapped around adjacent JSX elements in other components to 
	mitigate the need for an extra surrounding DOM element.
*/

const aux = (props) => props.children;

export default aux;