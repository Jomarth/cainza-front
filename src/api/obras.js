import axios from "./axios.js";

export const verObrasRequest  = () => axios.get('/obras');
export const createObrasRequest  = (obra) => axios.post('/obras', obra);
export const deleteObraRequest = (id)=> axios.delete('/obras/'+id);
export const updateObraRequest = (id, obra)=> axios.put('/obras/'+id, obra);
export const getObraRequest = (id)=> axios.get(`/obras/${id}`);
