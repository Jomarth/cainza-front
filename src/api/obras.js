import axios from "./axios.js";

export const verObrasRequest  = () => axios.get('/obras');
export const createObrasRequest  = (obra) => axios.post('/obras', obra);