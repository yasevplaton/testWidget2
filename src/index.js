import React from 'react';
import {render} from 'react-dom';
import VideoList from './components/videoList';
import VideoModel from './models/video';
import Input from './components/youtubeInput';
import videos from './videos';
import './styles/style.css';

const model = window.model = new VideoModel();

const App = (props) => (
	<div>
		<h3>Test task</h3>
		<Input />
		<VideoList model={model} videos={videos}/>
	</div>
);

function renderApp() {
	render(<App/>, document.getElementById('app'));
}

model.on('change', renderApp);
renderApp();
