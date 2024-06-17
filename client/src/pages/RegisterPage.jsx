import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const {register, handleSubmit, formState:{ errors }} = useForm();
    const {signup, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    
    useEffect(() =>{
        if(isAuthenticated)
            navigate('/map')
            
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={onSubmit}>
            <input type="text" {...register("username", { required: true })} 
                placeholder="usuario" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'/>
            { errors.username && <p className='text-red-500'>Ingrese el nombre de usuario</p>}
            <br /><input type="email" {...register("email", { required: true })} 
                placeholder="correo" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'/>
            { errors.email && <p className='text-red-500'>Ingrese el correo de usuario</p>}
            <br /><input type="password" {...register("password", { required: true })} 
                placeholder="clave" className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md'/>
            {errors.password && <p className='text-red-500'>Ingrese la clave de usuario</p>}
            <br /><button type="submit">Registro</button>
        </form>
    </div>
    )
}

export default RegisterPage

// https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCodess