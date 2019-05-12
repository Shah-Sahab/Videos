import axios from 'axios';

const KEY = 'AIzaSyBsdt1ZonL6Jl6vXqBJhw6N3O76yhy3Tog';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});