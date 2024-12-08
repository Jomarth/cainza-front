import {useReporte} from "../../context/ReporteContext.jsx";
import {useEffect} from "react";
import {useEnsaye} from "../../context/EnsayeContext.jsx";

function EnsayesPage() {
    const {getEnsayes, ensayes} = useEnsaye();
    const TABLE_HEAD = ["Obra", "Solicitante", "No. Ensayes", "Lugar", "Fecha", ""];

    useEffect(() => {
        getEnsayes();
    }, []);
    console.log(ensayes)
    return (
        <div>
            ver ensayes vv
        </div>
    );
}

export default EnsayesPage;