import FormCard from "../../layouts/FormCard.jsx";
import {useForm} from "react-hook-form";
import {useReporte} from "../../context/ReporteContext.jsx";
import {useEffect} from "react";
import {useEnsaye} from "../../context/EnsayeContext.jsx";
import {useNavigate} from "react-router-dom";

function EnsayeFormPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const { getReportes, reportes } = useReporte();
    const { createEnsaye } = useEnsaye();
    const navigate = useNavigate();
    useEffect(() => {
        getReportes();
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        createEnsaye(data);
        navigate('/');
    })

    return (
        <FormCard title={'Crear nuevo ensaye'}>
            <form onSubmit={onSubmit}>
                <label htmlFor="solicitante">Solicitante</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Solicitante del ensaye'
                       {
                           ...register("solicitante", {required: true})
                       }
                />
                {errors.solicitante?.type === "required" && (
                    <p className="text-red-500">El solicitante es requerido</p>
                )}

                <label htmlFor="reporte">Reporte asociado</label>
                <select
                    className='w-full px-4 py-2 rounded-md my-2 text-black '
                    {
                        ...register("reporte", {required: true})
                    }
                >
                    <option value="">
                        Selecciona un reporte
                    </option>
                    {
                        reportes.map(({_id, obra}) => {
                            return <option value={_id} key={_id}>
                                {obra.nombre}
                            </option>
                        })
                    }
                </select>
                {errors.reporte?.type === "required" && (
                    <p className="text-red-500">EL reporte asociado es requerido</p>
                )}

                <label htmlFor="norma">Norma</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Norma'
                       {
                           ...register("norma", {required: true})
                       }
                />
                {errors.norma?.type === "required" && (
                    <p className="text-red-500">La norma es requerida</p>
                )}

                <div className={'flex flex-row'}>
                    <div className="m-1">
                        <label htmlFor="fecha_entrega">Fecha de entrega</label>
                        <input type="date"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Fecha de entrega'
                               {
                                   ...register("fecha_entrega", {required: true})
                               }
                        />
                        {errors.fecha_entrega?.type === "required" && (
                            <p className="text-red-500">El destinatario es requerido</p>
                        )}

                        <label htmlFor="localizacion">Localización</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Localización'
                               {
                                   ...register("localizacion", {required: true})
                               }
                        />
                        {errors.localizacion?.type === "required" && (
                            <p className="text-red-500">La localización es requerido</p>
                        )}

                        <label htmlFor="tipo_material">Tipo de material</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Tipo de materia'
                               {
                                   ...register("tipo_material", {required: true})
                               }
                        />
                        {errors.tipo_material?.type === "required" && (
                            <p className="text-red-500">El tipo de material es requerido</p>
                        )}

                        <label htmlFor="peso_volumetrico">Peso volumetrico</label>
                        <input type="number"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Peso volumetrico'
                               {
                                   ...register("peso_volumetrico", {required: true, valueAsNumber: true})
                               }
                        />
                        {errors.peso_volumetrico?.type === "required" && (
                            <p className="text-red-500">El peso volumetrico es requerido</p>
                        )}
                        {errors.peso_volumetrico?.type === "valueAsNumber" && (
                            <p className="text-red-500">El peso volumetrico debe ser numerico</p>
                        )}

                        <label htmlFor="volumen_tara">Volumen de la tara</label>
                        <input type="number"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Volumen de la tara'
                               {
                                   ...register("volumen_tara", {required: true, valueAsNumber: true})
                               }
                        />
                        {errors.volumen_tara?.type === "required" && (
                            <p className="text-red-500">El volumen de la tara es requerida</p>
                        )}
                        {errors.volumen_tara?.type === "valueAsNumber" && (
                            <p className="text-red-500">EL volumen de la tara debe ser numerico</p>
                        )}
                    </div>
                    <div className="m-1">
                        <label htmlFor="fecha_muestreo">Fecha del muestreo</label>
                        <input type="date"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Fecha del muestreo'
                               {
                                   ...register("fecha_muestreo", {required: true})
                               }
                        />
                        {errors.fecha_muestreo?.type === "required" && (
                            <p className="text-red-500">El destinatario es requerido</p>
                        )}

                        <label htmlFor="ubicacion_muestra">Ubicación de la muestra</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Ubicación de la muestra'
                               {
                                   ...register("ubicacion_muestra", {required: true})
                               }
                        />
                        {errors.ubicacion_muestra?.type === "required" && (
                            <p className="text-red-500">La ubicación de la muestra es requerida</p>
                        )}

                        <label htmlFor="capa">Capa</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Capa'
                               {
                                   ...register("capa", {required: true})
                               }
                        />
                        {errors.capa?.type === "required" && (
                            <p className="text-red-500">La capa es requerida</p>
                        )}

                        <label htmlFor="masa_muestra">Masa de la muestra</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Masa de la muestra'
                               {
                                   ...register("masa_muestra", {required: true})
                               }
                        />
                        {errors.masa_muestra?.type === "required" && (
                            <p className="text-red-500">La masa de la muestra es requerida</p>
                        )}

                        <label htmlFor="profundidad">Profundidad</label>
                        <input type="number"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Profundidad'
                               {
                                   ...register("profundidad", {required: true, valueAsNumber: true})
                               }
                        />
                        {errors.profundidad?.type === "required" && (
                            <p className="text-red-500">La profundidad es requerida</p>
                        )}
                        {errors.profundidad?.type === "valueAsNumber" && (
                            <p className="text-red-500">La profundidad debe ser numerica</p>
                        )}
                    </div>
                </div>
                <label htmlFor="desperdicio">Desperdicio</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Desperdicio'
                       {
                           ...register("desperdicio", {required: true})
                       }
                />
                {errors.desperdicio?.type === "required" && (
                    <p className="text-red-500">El desperdicio es requerido</p>
                )}

                <label htmlFor="masa_alterada">Masa alterada</label>
                <input type="number"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Masa alterada'
                       {
                           ...register("masa_alterada", {required: true, valueAsNumber: true})
                       }
                />
                {errors.masa_alterada?.type === "required" && (
                    <p className="text-red-500">La masa alterada es requerido</p>
                )}
                {errors.masa_alterada?.type === "valueAsNumber" && (
                    <p className="text-red-500">La masa alterada debería ser numerica</p>
                )}

                <label htmlFor="tipo_granulometria">Tipo de granulometría</label>
                <input type="number"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Tipo de granulometría'
                       {
                           ...register("tipo_granulometria", {required: true, valueAsNumber: true})
                       }
                />
                {errors.tipo_granulometria?.type === "required" && (
                    <p className="text-red-500">El tipo de granulometría es requerido</p>
                )}
                {errors.tipo_granulometria?.type === "valueAsNumber" && (
                    <p className="text-red-500">El tipo de granulometría debería ser numerica</p>
                )}


                <div className={'flex justify-end'}>
                    <button type='submit'
                            className={'bg-blue-200 hover:bg-blue-400 hover:text-white text-black p-2 rounded-lg'}>
                        Crear ensaye
                    </button>
                </div>
            </form>
        </FormCard>
    );
}

export default EnsayeFormPage;