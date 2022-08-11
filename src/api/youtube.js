import axios from "axios";

const KEY = "AIzaSyD0IwMQc7GRM4VpmzGBFnQK112KWfZAri4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
