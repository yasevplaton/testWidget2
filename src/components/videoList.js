import React from 'react';
import Video from './video';

class VideoList extends React.Component {

	constructor(props) {
		super(props);
		console.log('List of videos to use: ' + props.videos.map((v, i) => `${i + 1}). ${v}`).join(', '));
	}

	/**
	 * Return random video url from the list
	 * @return {string}
	 */
	getRandomVideo() {
		return 'non-random-video';
	}

	add() {
		this.props.model.add(this.getRandomVideo());
	}

	remove(video) {
		this.props.model.remove(video);
	}

	render() {
		const list = this.props.model.videos.map(video => {
			return (
				<div key={video.id}>
					{video.url}
					<button onClick={this.remove.bind(this, video)}>x</button>
				</div>
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
					<button onClick={this.add.bind(this)}>+</button>
				</div>
				<div className="videoList">
					{list}
				</div>
				<div className="videos">
					{videos}
				</div>
			</div>
		);
	}

}

export default VideoList;