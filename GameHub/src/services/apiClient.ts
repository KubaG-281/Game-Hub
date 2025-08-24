import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f7bd36d11d354c24b2523767ab580c1f",
  },
});
