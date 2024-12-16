import axios from "./axios.js";

export const verEnsayesRequest  = () => axios.get('/ensayes');
export const createEnsayesRequest  = (ensaye) => axios.post('/ensayes', ensaye);
export const deleteEnsayeRequest = (id)=> axios.delete('/ensayes/'+id);
export const updateEnsayeRequest = (id, ensaye)=>axios.put('/ensayes/'+id, ensaye);
export const getEnsayeRequest = (id)=> axios.get(`/ensayes/${id}`);