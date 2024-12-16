import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";
import {
    createObrasRequest,
    deleteObraRequest,
    getObraRequest,
    updateObraRequest,
    verObrasRequest
} from "../api/obras.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ObraContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useObra = () => {
    const context = useContext(ObraContext);
    if (!context) {
        throw new Error('useObra debe estar definido en un contexto');
    }
    return context;
}

export const ObraProvider = ({children}) => {
    const [obras, setObras] = useState([]);
    const [errOb, setErrOb] = useState([]);
    const createObra = async (obra) => {
        try {
            const res = await createObrasRequest(obra);

            console.log(res.data);
        } catch (error) {
            setErrOb([error.response.data.message]);
            console.log([error.response.data.message]);
        }
    }// fin de createObra

    const getObras = async () => {
        try {
            const res = await verObrasRequest();
            setObras(res.data);
            console.log(res.data);
        } catch (error) {
            console.log([error.response.data.message]);
        }
    }// fin de createObra
    const getObra = async(id)=>{
        try{
            const res= await getObraRequest(id)
            return res.data
        }catch(error){
            console.log(error)
        }
    }//fin de getProduct

    const updateObra = async(id, product)=>{
        try{
            await updateObraRequest(id, product);
        }catch(error){
            console.log(error)
        }
    }
    const deletObra = async(id)=>{
        try{
            const res= await deleteObraRequest(id);
            if (res.status ===200)
                setObras(obras.filter(obra => obra._id !== id));
        }catch (error){
            console.log(error)
        }
    }// fin de Delete product
    return (
        <ObraContext.Provider value={{ createObra, getObras,getObra, obras, updateObra, deletObra, errOb }}>
            {children}
        </ObraContext.Provider>
    )
}// fin de Autrpvaideer
ObraProvider.propTypes = {
    children: PropTypes.any
}
