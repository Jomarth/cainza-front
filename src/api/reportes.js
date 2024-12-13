import axios from "./axios.js";

export const verReportesRequest  = () => axios.get('/reportes');
export const createReportesRequest  = (reporte) => axios.post('/reportes', reporte);