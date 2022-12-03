import axios from "axios";

const api = axios.create({ baseURL: "https://mediaspaceapidocker.azurewebsites.net/api" })

export default api