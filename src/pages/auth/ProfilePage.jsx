import FormCard from "../../layouts/FormCard.jsx";
import {useForm} from "react-hook-form";
import {useAuth} from "../../context/AuthContext.jsx";

function ProfilePage(){
    const { user, updateProfile } = useAuth();
    const {register, handleSubmit,
        formState: {errors}} = useForm({
        defaultValues: {
            email: user.email // Establece el valor predeterminado aquí
        }
    });
    const onSubmit = handleSubmit((data) => {
        const updatedData = {
            ...data, // Copia los datos existentes
            id: user.id // Agrega el nuevo campo
        };
        console.log(updatedData);
        updateProfile(updatedData);
    });

    return(
        <FormCard title={'Edita tu perfil'}>
            <form onSubmit={onSubmit}>

                <input type="email"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Correo'
                       {
                           ...register("email", {required: true})
                       }
                />
                {errors.email && (
                    <p className="text-red-500">Email es requerido</p>
                )}
                <input type="password"
                       className='w-full px-4 py-2 rounded-md my-2 text-black'
                       placeholder='Password'
                       {
                           ...register("password", {required: true, minLength: 6})
                       }   />
                {errors.password?.type === "required" && (
                    <p className="text-red-500">Password requerido</p>
                )}
                {errors.password?.type === "minLength" && (
                    <p className="text-red-500">La longitud mínima es de 6 caracteres</p>
                )}

                <div className={'flex justify-end'}>
                    <button type='submit'>Actualizar</button>
                </div>
            </form>
        </FormCard>
    )
}
export default ProfilePage