import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";
import {createReportesRequest, verReportesRequest} from "../api/reportes.js";

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
    return (
        <ReporteContext.Provider value={{ createReporte, getReportes, reportes, errReportes }}>
            {children}
        </ReporteContext.Provider>
    )
}// fin de Autrpvaideer
ReporteProvider.propTypes = {
    children: PropTypes.any
}
