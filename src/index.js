import React from "react";
import { render } from "react-dom";
import VideoList from "./components/videoList";
import VideoModel from "./models/video";
import Input from "./components/youtubeInput";
import axios from "axios";
import videos from "./videos";
import "./styles/style.css";

const model = (window.model = new VideoModel());

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			videos: []
		};
	}

  handleSearch(inputValue) {
		// get some videos from YouTube
    axios
      .get("/search", {
        baseURL: "https://www.googleapis.com/youtube/v3/",
        params: {
          part: "snippet",
          maxResults: 4,
          key: "AIzaSyA8MvfX9C8wZmAFUvHdfa6Uq-Gl5KNB3Co",
          type: "video",
          q: inputValue
        }
      })
			.then(response => {

				// convert video id to url
				const videos = response.data.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`);
				
				this.setState({
					videos: videos
				})

			})
			.catch(err => {
				console.error(err);
			});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <h3 className="heading">Test task</h3>
          <Input handleInput={this.handleSearch.bind(this)}/>
          <VideoList model={model} videos={videos}/>
        </div>
      </div>
    );
  }
}

function renderApp() {
  render(<App />, document.getElementById("app"));
}

model.on("change", renderApp);
renderApp();
