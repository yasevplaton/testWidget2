import React from 'react';

class Video extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="video">
				<iframe width="auto" height="auto" src={this.props.url} frameBorder="0" allowFullScreen></iframe>
				<span>{this.props.videoId}</span>
			</div>
		);
	}

}

export default Video;