import FormCard from "../../layouts/FormCard.jsx";
import {useForm} from "react-hook-form";
import {useObra} from "../../context/ObraContext.jsx";
import {useState} from "react";

function ObrasFormPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createObra, errOb} = useObra();
    const cloudinaryName = import.meta.env.VITE_CLOUDINARY_NAME;
    const [fileName, setFileName] = useState("No file chosen");
    console.log(cloudinaryName);

    const handleFileChange = (event) => {
        setFileName(event.target.files[0] ? event.target.files[0].name : "No file chosen");
    }

    const onSubmit = handleSubmit(async (data) => {
        console.log(data.imagen);
        const formData = new FormData();
        formData.append('file', data.imagen)
        formData.append('upload_preset', 'doc_codepen_example');
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryName}/upload`, {
            method: 'POST',
            body: formData,
        });
        console.log(res);
        createObra(data);
    })


    return (
        <FormCard title={'Crear Obra Nueva'}>
            <form onSubmit={onSubmit}>
                {
                    errOb.map((error) => {
                        return (<p key={error}
                                   className={'bg-red-500 my-3 p-3 font-bold rounded-md text-center'}>
                            {error}
                        </p>);
                    })
                }
                <label htmlFor="nombre">Nombre de la obra</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Nombre de la obra'
                       {
                           ...register("nombre", {required: true, minLength: 6})
                       }
                />
                {errors.nombre?.type === "required" && (
                    <p className="text-red-500">El nombre de la obra es requerido</p>
                )}
                {errors.nombre?.type === "minLength" && (
                    <p className="text-red-500">La longitud mínima es de 6 carácteres</p>
                )}
                <label htmlFor="nombre">Tramo de la obra</label>
                <input type="text"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Tramo'
                       {
                           ...register("tramo", {required: true, minLength: 6})
                       }
                />
                {errors.tramo?.type === "required" && (
                    <p className="text-red-500">El tramo de la obra es requerido</p>
                )}
                {errors.tramo?.type === "minLength" && (
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
                        <label htmlFor="contratista">Fecha de inicio</label>
                        <input type="date"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Fecha de inicio'
                               {
                                   ...register("fecha_inicio", {required: true})
                               }   />
                        {errors.fecha_inicio?.type === "required" && (
                            <p className="text-red-500">El fecha inicio es requerida</p>
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
                        <input type="number"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Importe total'
                               {
                                   ...register("importe", {required: true, valueAsNumber: true})
                               }   />
                        {errors.importe?.type === "required" && (
                            <p className="text-red-500">El importe es requerido</p>
                        )}
                        {errors.importe?.type === "valueAsNumber" && (
                            <p className="text-red-500">El importe debería ser numerico</p>
                        )}
                        <label htmlFor="contratista">Fecha de fin</label>
                        <input type="date"
                               className='w-full px-4 py-2 rounded-md my-2 text-black'
                               placeholder='Fecha de fin'
                               {
                                   ...register("fecha_fin", {required: true})
                               }   />
                        {errors.fecha_fin?.type === "required" && (
                            <p className="text-red-500">El fecha de fin es requerida</p>
                        )}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="file"
                           {...register('imagen')}
                           id="file"
                           className="hidden" onChange={handleFileChange}/>
                    <label htmlFor="file"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                           rounded cursor-pointer">
                        Elegir imagen
                    </label>
                    <span className="text-gray-700">
                        {fileName}
                    </span>
                </div>
                {fileName === "No file chosen" && (
                    <p className="text-red-500">La imagen es requerida</p>
                )}

                <div className={'flex justify-end'}>
                    <button type='submit'
                            className={'bg-blue-200 hover:bg-blue-400 hover:text-white text-black p-2 rounded-lg'}>Crear
                        obra
                    </button>
                </div>
            </form>
        </FormCard>
    );
}

export default ObrasFormPage;