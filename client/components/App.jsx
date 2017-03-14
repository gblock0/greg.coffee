import React from 'react';
require('./../styles/app.sass');
const src = require('./../images/logo.png');

export default class App extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Welcome to Greg.Coffee! (WIP)</h1>
				<img className='logo' src={src}/>
			</div>);
	}
}
