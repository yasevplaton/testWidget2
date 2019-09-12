import React from 'react';
import Video from './video';
import "../styles/btn.css";
import "../styles/videoList.css";

class VideoList extends React.Component {

	constructor(props) {
		super(props);
		console.log('List of videos: ' + props.videos.map((v, i) => `${i + 1}). ${v}`).join(', '));
	}

	/**
	 * Return random video id from the list
	 * @param {Array<string>} videos
	 * @return {string}
	 */

	static getRandomVideo(videos) {
		return /v=([\S]+)/.exec(videos[Math.floor(Math.random() * (videos.length + 1))])[1];
	}

	add() {
		if (this.props.videos.length) {
			this.props.model.add(VideoList.getRandomVideo(this.props.videos));
		} else {
			alert("Сначала найдите что-нибудь на YouTube");
		}
	}

	remove(video) {
		this.props.model.remove(video);
	}

	render() {

		const list = this.props.model.videos.map(video => {
			return (
				<div key={video.id} className="videoList__desc">
					{video.url}
					<button className="btn btn--remove" onClick={this.remove.bind(this, video)}>x</button>
				</div>
			);
		}, this);

		const videos = this.props.model.videos.map(video => {
			return (
				<Video
					url={video.url}
					key={video.id}
					videoId={video.videoId}
				/>
			);
		}, this);

		return (
			<div className="videoList__wrapper">
				<div className="btn--add__wrapper">
					<button className="btn btn--add" onClick={this.add.bind(this)}>+</button>
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