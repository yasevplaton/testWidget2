import React from 'react';

const handleKeyPress = Symbol()
	, handleOnChange = Symbol()
	;

export default class Input extends React.Component {
	constructor() {
		super();
		this.state = {value: 'Funny cats'};
	}
	[handleKeyPress](event) {
		if (event.key === 'Enter') {
			console.log(`Let's make youtube search for "${this.state.value}"`);
		}
	}
	[handleOnChange](event) {
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<div>
				<input
				type="text"
				onChange={this[handleOnChange].bind(this)}
				onKeyPress={this[handleKeyPress].bind(this)}
				value={this.state.value}
				/>
			</div>
		);
	}
}