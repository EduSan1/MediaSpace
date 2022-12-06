import React from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: "https://mediaspaceapi.azurewebsites.net/api" })

export default api