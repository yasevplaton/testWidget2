import axios from 'axios';
const KEY = 'AIzaSyA8MvfX9C8wZmAFUvHdfa6Uq-Gl5KNB3Co';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 4,
    key: KEY
  }

})