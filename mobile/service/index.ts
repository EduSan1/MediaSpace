import axios from "axios";

const api = axios.create({ baseURL: "http:/10.107.144.4:3001/api" })

export default api