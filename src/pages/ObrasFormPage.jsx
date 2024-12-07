import FormCard from "../layouts/FormCard.jsx";
import {useForm} from "react-hook-form";

function ObrasFormPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
    return (
        <FormCard title={'Crear Obra Nueva'}>
            <form onSubmit={onSubmit}>
                <label htmlFor="nombre">Nombre de la obra</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Nombre de la obra'
                       {
                           ...register("nombre", {required: true, minLength: 6})
                       }
                />
                {errors.nombre?.type === "required"  && (
                    <p className="text-red-500">El nombre de la obra es requerido</p>
                )}
                {errors.nombre?.type === "minLength" && (
                    <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                )}
                <div className={'flex flex-row'}>
                    <div className={'m-1'}>
                        <label htmlFor="dependencia">Dependencia</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Dependencia'
                               {
                                   ...register("dependencia", {required: true, minLength: 6})
                               }   />
                        {errors.dependencia?.type === "required" && (
                            <p className="text-red-500">La dependencia es requerida</p>
                        )}
                        {errors.dependencia?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                        )}
                        <label htmlFor="contratista">Contratista</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Contratista'
                               {
                                   ...register("contratista", {required: true, minLength: 6})
                               }   />
                        {errors.contratista?.type === "required" && (
                            <p className="text-red-500">El contratista es requerido</p>
                        )}
                        {errors.contratista?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                        )}
                    </div>
                    <div className={'m-1'}>
                        <label htmlFor="estado">Estado</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Estado'
                               {
                                   ...register("estado", {required: true, minLength: 6})
                               }   />
                        {errors.estado?.type === "required" && (
                            <p className="text-red-500">El estado es requerido</p>
                        )}
                        {errors.estado?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                        )}
                        <label htmlFor="importe">Importe</label>
                        <input type="text"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Importe total'
                               {
                                   ...register("importe", {required: true, minLength: 6})
                               }   />
                        {errors.importe?.type === "required" && (
                            <p className="text-red-500">El importe es requerido</p>
                        )}
                        {errors.importe?.type === "minLength" && (
                            <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                        )}
                    </div>
                </div>


                <div className={'flex justify-end'}>
                    <button type='submit'>Crear obra</button>
                </div>
            </form>
        </FormCard>
    );
}

export default ObrasFormPage;