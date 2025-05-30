import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // or your hosted backend URL
});

export const getEvents = () => API.get('/events');
export const subscribeEmail = (email, eventId) => API.post('/subscribe', { email, eventId });
