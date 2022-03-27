import axios from "axios";
const KEY = `AIzaSyCoA9Oqvf1DZ9dQbo3hp-nmyZRUcj6ohrc`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
