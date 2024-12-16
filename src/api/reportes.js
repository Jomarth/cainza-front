import axios from "./axios.js";

export const verReportesRequest  = () => axios.get('/reportes');
export const createReportesRequest  = (reporte) => axios.post('/reportes', reporte);
export const deleteReporteRequest = (id)=> axios.delete('/reportes/'+id);
export const updateReporteRequest = (id, reporte)=> axios.put('/reportes/'+id, reporte);
export const getReporteRequest = (id)=> axios.get(`/reportes/${id}`);
