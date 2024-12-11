import {useForm} from 'react-hook-form';
import {useAuth} from '../../context/AuthContext.jsx';
import {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated)
            navigate('/products')
    }, [isAuthenticated, navigate])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })
    return (
        <div className="flex items-center justify-center h-screen text-white">
            <div className='bg-blue-900 max-w-md p-10 rounded-md'>
                <h1 className='text-2xl font-bold'>
                    Register
                </h1>
                {
                    registerErrors.map((errors, i) => (
                        <div className='bg-red-500 p-2 my-2 text-white' key={i}>
                            {errors}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="text"
                           className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                           placeholder='Username'
                           {
                               ...register("username", {required: true, minLength: 5})
                           }
                    />
                    {errors.username?.type === "required" && (
                        <p className="text-red-500">Nombre de usuario requerido</p>
                    )}
                    {errors.username?.type === "minLength" && (
                        <p className="text-red-500">La longitud mínima es de 5 caracteres</p>
                    )}

                    <input type="email"
                           className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                           placeholder='Email'
                           {
                               ...register("email", {
                                   required: true,
                                   pattern: {
                                       value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                       message: 'Porfavor entre un Email valido',
                                   },
                               })
                           }
                    />
                    {errors.email?.type === 'required' && (
                        <p className="text-red-500">Email es requirido</p>
                    )}
                    {errors.email?.message && (
                        <p className="text-red-500">Email no valido</p>
                    )}
                    <input type="password"
                           className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
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
                        <button type='submit'>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
  