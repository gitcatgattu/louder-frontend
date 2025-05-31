import axios from 'axios';

const API = axios.create({
  baseURL: 'https://louder-backend.onrender.com', // or your hosted backend URL
});

export const getEvents = () => API.get('/events');
export const subscribeEmail = (email, eventId) => API.post('/subscribe', { email, eventId });
