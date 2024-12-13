import axios from "./axios.js";

export const verEnsayesRequest  = () => axios.get('/ensayes');
export const createEnsayesRequest  = (ensaye) => axios.post('/ensayes', ensaye);