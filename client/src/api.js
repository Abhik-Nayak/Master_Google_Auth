import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const googleAuth = (code) =>  api.get(`/auth/google?code=${code}`)