import React from 'react';
require('./../styles/app.sass');
const src = require('./../images/logo.png');

export default class App extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<img className='logo' src={src}/>
			</div>);
	}
}
