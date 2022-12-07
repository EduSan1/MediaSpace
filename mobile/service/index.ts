import axios from "axios";

const api = axios.create({ baseURL: "https://mediaspaceapi.azurewebsites.net" })

export default api