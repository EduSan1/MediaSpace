import React from 'react';
import axios from 'axios';

const api = axios.create({baseURL : "http://10.107.144.2:3001/api"}) 

export default api