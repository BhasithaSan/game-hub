import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "7f391e76fb0042adb9420b43d8514371",
  },
});
