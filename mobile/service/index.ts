import axios from "axios";

const api = axios.create({ baseURL: "http://api" })

export default api