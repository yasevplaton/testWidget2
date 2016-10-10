import React from 'react';
import Video from './video';

class VideoList extends React.Component {

	constructor(props) {
		super(props);
		console.log('List of videos to use: ' + props.videos.map((v, i) => `${i + 1}). ${v}`).join(', '));
	}

	getRandomUrl() {
		return 'http://non-random-url';
	}

	/**
	 * Add random video from the list
	 */
	add() {
		this.props.model.add(this.getRandomUrl());
	}

	remove(video) {
		this.props.model.remove(video);
	}

	render() {
		const list = this.props.model.videos.map(video => {
			return (
				<span key={video.id}>
					{video.url}
					<button onClick={this.remove.bind(this, video)}>x</button>
				</span>
			);
		}, this);
		const videos = this.props.model.videos.map(video => {
			return (
				<Video
					url={video.url}
					key={video.id}
				/>
			);
		}, this);
		return (
			<div>
				<div>
					{list}
				</div>
				<div>
					{videos}
				</div>
				<div>
					<button onClick={this.add.bind(this)}>+</button>
				</div>
			</div>
		);
	}

}

export default VideoList;