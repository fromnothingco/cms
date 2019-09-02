import axios from "axios";
import config from "../../api.config";

const api = axios.create({
  baseURL: config.baseurl
  // add header information here if using localstorage, but you shouldn't use localstorage to store auth tokens!
});

export default api;
