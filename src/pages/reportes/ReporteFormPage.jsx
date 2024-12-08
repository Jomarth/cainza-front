import FormCard from "../../layouts/FormCard.jsx";
import {useObra} from "../../context/ObraContext.jsx";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useReporte} from "../../context/ReporteContext.jsx";
import {useNavigate} from "react-router-dom";

function ReporteFormPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {getObras, obras} = useObra();
    const { createReporte } = useReporte();
    const navigate = useNavigate();

    useEffect(() => {
        getObras();
    }, []);
    console.log('obras');



    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        createReporte(data);
        navigate('/ver-reportes');
    })
    return (
        <FormCard title={'Crear reporte'}>
            <form onSubmit={onSubmit}>
                <label htmlFor="destinatario">A quien se dirige el reporte</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='A quien se dirige el reporte'
                       {
                           ...register("destinatario", {required: true})
                       }
                />
                {errors.destinatario?.type === "required" && (
                    <p className="text-red-500">El destinatario es requerido</p>
                )}

                <div className={'flex flex-row'}>
                    <div className="m-1">
                        <label htmlFor="fecha_reporte">Fecha del reporte</label>
                        <input type="date"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Fecha del reporte'
                               {
                                   ...register("fecha_reporte", {required: true})
                               }
                        />
                        {errors.fecha_reporte?.type === "required" && (
                            <p className="text-red-500">La fecha del reporte es requerido</p>
                        )}
                        <label htmlFor="obra">Obra asociada</label>
                        <select
                            className='w-full px-4 py-2 rounded-md my-2 text-black '

                            {
                                ...register("obra", {required: true})
                            }
                        >
                            <option value="">
                                Selecciona una obra
                            </option>
                            {
                                obras.map((obra) => {
                                    return <option value={obra._id} key={obra._id}>
                                        {obra.nombre}
                                    </option>
                                })
                            }
                        </select>
                        {errors.obra?.type === "required" && (
                            <p className="text-red-500">La obra asociada es requerida</p>
                        )}
                    </div>
                    <div className="m-1">
                        <label htmlFor="no_ensayes">Número de ensayes</label>
                        <input type="number"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Número de ensayes'
                               {
                                   ...register("no_ensayes", {required: true, valueAsNumber: true})
                               }
                        />
                        {errors.no_ensayes?.type === "required" && (
                            <p className="text-red-500">El destinatario es requerido</p>
                        )}
                        {errors.no_ensayes?.type === "valueAsNumber" && (
                            <p className="text-red-500">El número de ensayes debería ser numerico</p>
                        )}
                        <label htmlFor="lugar">Lugar del reporte</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Lugar del reporte'
                               {
                                   ...register("lugar", {required: true})
                               }
                        />
                        {errors.lugar?.type === "required" && (
                            <p className="text-red-500">El lugar es requerido</p>
                        )}
                    </div>
                </div>

                <label htmlFor="objetivo">Objetivo del reporte</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Objetivo del reporte'
                       {
                           ...register("objetivo", {required: true})
                       }
                />
                {errors.objetivo?.type === "required" && (
                    <p className="text-red-500">El objetivo es requerido</p>
                )}
                <label htmlFor="observacion">Observación del reporte</label>
                <textarea
                    className='w-full px-4 py-2 rounded-md my-2 text-black'
                    placeholder='Observación del reporte'
                    {
                        ...register("observacion", {required: true})
                    }
                />
                {errors.observacion?.type === "required" && (
                    <p className="text-red-500">La observación es requerida</p>
                )}
                <div className={'flex justify-end'}>
                    <button type='submit'
                            className={'bg-blue-200 hover:bg-blue-400 hover:text-white text-black p-2 rounded-lg'}>Crear
                        reporte
                    </button>
                </div>
            </form>
        </FormCard>
    );
}

export default ReporteFormPage;