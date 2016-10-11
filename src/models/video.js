import EventEmitter from 'eventemitter3';
import uuid from 'uuid';

class VideoModel extends EventEmitter {
	constructor() {
		super();
		this.videos = VideoModel.store('videos');
		// Save model on every change
		this.on('change', () => {
			VideoModel.store('videos', this.videos);
		});
	}

	/**
	 * Set or get permanent value
	 * @param {string} key
	 * @param {object} [value]
	 * @returns {Array<object>|*}
	 */
	static store(key, value) {
		if (value) {
			return localStorage.setItem(key, JSON.stringify(value));
		} else {
			value = localStorage.getItem(key);
			try {
				value = JSON.parse(value);
			} catch(e) {
				value = [];
			}
			return value || [];
		}
	}

	/**
	 * Add new video to model
	 * @param url
	 */
	add(url) {
		this.videos.push({
			url: url
			, id: uuid.v4()
		});
		this.emit('change');
	}

	/**
	 * Remove existing video from model
	 * @param video
	 */
	remove(video) {
		this.videos = this.videos.filter(v => v !== video);
		this.emit('change');
	}
}

export default VideoModel;