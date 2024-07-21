import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "03390cd1916f438b986e3a6451616b06",
  },
});
