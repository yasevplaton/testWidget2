import React from 'react';

class Video extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="video">
				<img src="https://i.vimeocdn.com/portrait/1274237_300x300" />
				<span>{this.props.url}</span>
			</div>
		);
	}

}

export default Video;