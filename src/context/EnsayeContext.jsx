import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";
import {
    createEnsayesRequest,
    deleteEnsayeRequest,
    getEnsayeRequest,
    updateEnsayeRequest,
    verEnsayesRequest
} from "../api/ensayes.js";

// eslint-disable-next-line react-refresh/only-export-components
export const EnsayeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useEnsaye = () => {
    const context = useContext(EnsayeContext);
    if (!context) {
        throw new Error('useEnsaye debe estar definido en un contexto');
    }
    return context;
}

export const EnsayeProvider = ({children}) => {
    const [ensayes, setEnsayes] = useState([]);
    const [errEnsayes, setErrEnsayes] = useState([]);
    const createEnsaye = async (reporte) => {
        try {
            const res = await createEnsayesRequest(reporte);
            console.log(res.data);
        } catch (error) {
            setErrEnsayes([error.response.data.message]);
            console.log([error.response.data.message]);
        }
    }// fin de createEnsaye

    const getEnsayes = async () => {
        try {
            const res = await verEnsayesRequest();
            setEnsayes(res.data);
            console.log(res.data);
        } catch (error) {
            console.log([error.response.data.message]);
        }
    }// fin de createEnsaye
    const getEnsaye = async(id)=>{
        try{
            const res= await getEnsayeRequest(id)
            return res.data
        }catch(error){
            console.log(error)
        }
    }//fin de getProduct
    const updateEnsaye = async(id, product)=>{
        try{
            await updateEnsayeRequest(id, product);
        }catch(error){
            console.log(error)
        }
    }
    const deleteEnsaye = async(id)=>{
        try{
            const res= await deleteEnsayeRequest(id);
            if (res.status ===200)
                setEnsayes(ensayes.filter(ensaye => ensaye._id !== id));
        }catch (error){
            console.log(error)
        }
    }// fin de Delete product
    return (
        <EnsayeContext.Provider value={{ createEnsaye, getEnsayes, getEnsaye,updateEnsaye, deleteEnsaye, ensayes, errEnsayes }}>
            {children}
        </EnsayeContext.Provider>
    )
}// fin de Autrpvaideer
EnsayeProvider.propTypes = {
    children: PropTypes.any
}
