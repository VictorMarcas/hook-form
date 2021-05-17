import { useForm } from "react-hook-form";
import {useState} from "react";


function App() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        mode: "onChange"
    });

    const [isRegister, setRegister] = useState(false)

    const onSubmit = (data, e) => {
        setRegister(!isRegister)
        console.log(data)
        e.target.reset();
    }


    console.log(errors);

    // custom validation
    const isPhone = (number) =>  number.charAt(0) === '9' ? true : 'Celular inválido'

    const isEmail = (email) => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) ? true : 'Correo inválido'

    return (
        <div className="h-screen flex items-center justify-center">
            {
                !isRegister ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
                        <header>
                            <h1 className="font-bold text-2xl leading-tight">¡Crea tu cuenta ahora!</h1>
                            <p className="font-normal text-sm leading-relaxed text-gray-700 mt-2"><strong>¡Regístrate fácilmente</strong> para participar de esa oferta que tanto te interesa!</p>
                        </header>
                        <div className="space-y-6 mt-6">
                            <div>
                                <label htmlFor="dni">DNI</label>
                                <div>
                                    <input {...register("dni", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        },
                                        maxLength: {
                                            value: 8,
                                            message: 'Máximo 8 dígitos'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Mínimo 8 dígitos'
                                        }
                                    })}
                                           name="dni"
                                           type="tel"
                                           className="w-full border-2 border-gray-400 rounded py-2.5 leading-4 px-4 focus:outline-none"
                                    />
                                    <div className="text-xs text-red-500 leading-4 mt-1">{ errors?.dni?.message }</div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <div>
                                    <input {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        },
                                        maxLength: {
                                            value: 9,
                                            message: 'Máximo 9 dígitos'
                                        },
                                        minLength: {
                                            value: 9,
                                            message: 'Mínimo 9 dígitos'
                                        },
                                        validate: {
                                            isPhone
                                        }
                                    })}
                                           name="phone" type="tel" className="w-full border-2 border-gray-400 rounded py-2.5 leading-4 px-4 focus:outline-none"/>
                                    <div className="text-xs text-red-500 leading-4 mt-1">{ errors?.phone?.message }</div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <div>
                                    <input {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        },
                                        validate: {
                                            isEmail
                                        }
                                    })} name="email" type="email" className="w-full border-2 border-gray-400 rounded py-2.5 leading-4 px-4 focus:outline-none"/>
                                    <div className="text-xs text-red-500 leading-4 mt-1">{ errors?.email?.message }</div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" disabled={!isDirty || !isValid} className="w-full px-4 py-3 leading-6 font-bold uppercase bg-green-500 text-white focus:outline-none rounded disabled:opacity-50">Registrar</button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <div className="text-center mt-2">Se ha registrado con éxito</div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
