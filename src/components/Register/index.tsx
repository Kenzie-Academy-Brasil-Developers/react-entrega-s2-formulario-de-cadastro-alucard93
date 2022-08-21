/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext} from 'react'
import { useForm } from 'react-hook-form'
import { StyledRegister } from './style'
import api from '../../services/api'
import  * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
// import Logo from "../../assets/Logo.svg"
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import { Container } from '../../styled/global'
import { AddButtonContext } from '../../contexts/ModalContext/ModalContext';
import { AxiosError, AxiosResponse } from 'axios'


interface IData {
    name:            string
    email:           string
    password:        string | number
    confirmPassword: string | number
    bio:             string
    contact:         string | number
    course_module:   string
}

const Register = () => {

    const schema = yup.object({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email('Deve ser um email').required('Email é obrigatório'),
            password: yup.string().min(8, 'No minímo 8 caracteres').required("Senha obrigatória").matches(/(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/, "Deve ter 8 letras, uma maiúscula, uma minúscula,um número e um caracter especial."),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'A confirmação deve ser igual a senha'),
            bio: yup.string().required("Bio obrigatória"),
            contact: yup.string().required("Contato obrigatório"),
            course_module: yup.string().required("Módulo obrigatório"),
    });

    const navigate = useNavigate()
    const { registerButton, setRegisterButton } = useContext(AddButtonContext)

    const submitFunction = (data: IData) => {
        const cadastro = {
            email: data.email,
            password: data.password,
            name: data.name,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module
        }
        api.post('/users', cadastro)
            .then((response: AxiosResponse) => {
            toast.success('Cadastro feito com sucesso!')
            navigate(`/`)
        })
        .catch((err: AxiosError) => {
            toast.error('Erro ao realizar o cadastro, verifique os dados!')
        })
    };

    const { register, handleSubmit, formState: { errors },
 } = useForm<IData>({
        resolver: yupResolver(schema)
    });

    const login = () => {
        setRegisterButton(false)
        navigate('/')
    }

    return (
<>
    <Container>
        <StyledRegister>
            <header>
                <div className='container__logo'>
                    {/* <img  className='container__img' src={Logo} alt="Logo" /> */}
                    <button onClick={() => login()} className='btn-back'>Voltar</button>
                </div>
                
            </header>
            <form onSubmit={handleSubmit(submitFunction)}>
                <h2>Crie sua conta</h2>
                <p className='container__text'>Rápido e grátis, vamos nessa</p>

                <div className="container__input">
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder="Digite aqui seu nome" 
                        {...register('name')}
                        />
                    <p className='error' >{errors.name?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        placeholder="Digite aqui seu email" 
                        {...register('email')}
                        />
                        <p className='error'>{errors.email?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id='password' 
                        placeholder="Digite aqui sua senha" 
                        {...register('password')}
                        />
                    <p className='error'>{errors.password?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="password2">Confirmar Senha</label>
                    <input 
                        type="password" 
                        id='password2' 
                        placeholder="Digite aqui sua senha" 
                        {...register('confirmPassword')}
                        />
                    <p className='error'>{errors.confirmPassword?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="bio">Bio</label>
                    <input 
                        type="text" 
                        id='bio' 
                        placeholder="Fale sobre você" 
                        {...register('bio')}
                        />
                    <p className='error'>{errors.bio?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="contact">Contato</label>
                    <input 
                        type="tel" 
                        id='contact' 
                        placeholder="Opção de contato" 
                        {...register('contact')}
                        />
                    <p className='error'>{errors.contact?.message}</p>
                </div>

                <div className="container__input">
                    <label htmlFor="module">Selecionar Módulo</label>
                        <select 
                        id='module'
                        {...register('course_module')}
                        >
                    <p className='error'>{errors.course_module?.message}</p>
                            <option value="Primeiro Módulo">Primeiro módulo</option>
                            <option value="Segundo Módulo">Segundo módulo</option>
                            <option value="Terceiro Módulo">Terceiro módulo</option>
                        </select>
                </div>

                <button type='submit' className="btn-register">Cadastrar</button>
            </form>
        </StyledRegister>
    </Container>
</>
  );
}

export default Register