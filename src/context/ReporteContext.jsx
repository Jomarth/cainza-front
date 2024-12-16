import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";
import {
    createReportesRequest,
    deleteReporteRequest,
    getReporteRequest,
    updateReporteRequest,
    verReportesRequest
} from "../api/reportes.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ReporteContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useReporte = () => {
    const context = useContext(ReporteContext);
    if (!context) {
        throw new Error('useReporte debe estar definido en un contexto');
    }
    return context;
}

export const ReporteProvider = ({children}) => {
    const [reportes, setReportes] = useState([]);
    const [errReportes, setErrReportes] = useState([]);
    const createReporte = async (reporte) => {
        try {
            const res = await createReportesRequest(reporte);
            console.log(res.data);
        } catch (error) {
            setErrReportes([error.response.data.message]);
            console.log([error.response.data.message]);
        }
    }// fin de createReporte

    const getReportes = async () => {
        try {
            const res = await verReportesRequest();
            setReportes(res.data);
            console.log(res.data);
        } catch (error) {
            console.log([error.response.data.message]);
        }
    }// fin de createReporte

    const getReporte = async(id)=>{
        try{
            const res= await getReporteRequest(id)
            return res.data
        }catch(error){
            console.log(error)
        }
    }//fin de getProduct

    const updateReporte = async(id, product)=>{
        try{
            await updateReporteRequest(id, product);
        }catch(error){
            console.log(error)
        }
    }
    const deletReporte = async(id)=>{
        try{
            const res= await deleteReporteRequest(id);
            if (res.status ===200)
                setReportes(reportes.filter(reporte => reporte._id !== id));
        }catch (error){
            console.log(error)
        }
    }// fin de Delete product

    return (
        <ReporteContext.Provider value={{ createReporte, getReportes, getReporte,deletReporte, updateReporte, reportes, errReportes }}>
            {children}
        </ReporteContext.Provider>
    )
}// fin de Autrpvaideer
ReporteProvider.propTypes = {
    children: PropTypes.any
}
