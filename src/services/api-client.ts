import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "5e1bcd38c9d5489fa27723a4d9d2a7fb",
  },
});
