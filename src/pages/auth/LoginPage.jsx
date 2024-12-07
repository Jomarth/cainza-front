import {useForm} from 'react-hook-form';
import {useAuth} from '../../context/AuthContext.jsx';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signin, isAuthenticated, errors: signInErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated)
            navigate('/profile');
    }, [navigate, isAuthenticated]);


    const onSubmit = handleSubmit((data) => {
        signin(data);
    })
    return (
        <div className="flex items-center justify-center">
            <div className="bg-blue-600 max-w-md w-full p-10 rounded-md text-white">
                <h1 className='text-2xl font-bold'>Login</h1>
                {
                    Array.isArray(signInErrors) && signInErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 my-2 text-white rounded' key={i}>
                            {error}
                        </div>
                    ))
                }

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
                        <button type='submit'>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginPage