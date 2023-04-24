import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    keys: 'c4ebb916fcc545f8a28fbaffa3109432',
  },
});
