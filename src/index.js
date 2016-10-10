import React from 'react';
import {render} from 'react-dom';
import VideoList from './components/videoList';
import VideoModel from './models/video';
import videos from './videos';

const model = window.model = new VideoModel();

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>Test task</p>
				<VideoList model={model} videos={videos}/>
			</div>
		);
	}
}

function renderApp() {
	render(<App/>, document.getElementById('app'));
}

model.on('change', renderApp);
renderApp();
