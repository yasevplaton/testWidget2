import React from 'react';
import "../styles/video.css";

class Video extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="video">
				<iframe width="auto" height="auto" src={this.props.url} frameBorder="0" allowFullScreen></iframe>
			</div>
		);
	}

}

export default Video;