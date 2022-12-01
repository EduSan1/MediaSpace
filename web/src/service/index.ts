import React from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: "hhttp:/10.107.144.24:3001/api" })

export default api