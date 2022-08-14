import {React, useContext } from 'react';
import { AddButtonContext } from '../../contexts/ModalContext/ModalContext';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledModal } from "./style";
import { toast } from 'react-toastify';
import api from '../../services/api'

const Modal = () => {
  const {setAddButton} = useContext(AddButtonContext)
  const token = localStorage.getItem("@token")

  const schema = yup.object().shape({
    title: yup.string().required("Insira uma Tecnologia")
    });

  const { register, handleSubmit, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
    });

const submitFunction = (data) => {
    api.defaults.headers.authorization = `Bearer ${token}`
    api.post('/users/techs' , data)
    .then(response => {
    toast.success('Tecnologia cadastrada')
    console.log(response)
    activateRegistration()
    })
    .catch(err => {
    toast.error(`${err.message}`) 
    console.log(err)})
    
    };

    function activateRegistration () {
      setAddButton(false)
  };

  return (
    <StyledModal>
      <aside>
        <div className='container__button' >
          <h3 className='container__button--title'>Cadastrar Tecnologia</h3>
          <button className='button-close' onClick={() => activateRegistration()}>X</button>
        </div>

        <form onSubmit={handleSubmit(submitFunction)}>
          <div className='container__input' >
            <label htmlFor="nome">Nome  </label>
            <p>{errors.title?.message}</p>
            <input
            {...register("title")} 
            type="text" 
            placeholder='Digite a tecnologia'
            id='tech'
            />
          </div>
         <div className='container__input'>
          <label htmlFor="status">Selecionar status</label>
          <select id=""  {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
         </div>
        
          <button className='btn-register' type="submit">Cadastrar Tecnologia</button>
        </form>
      </aside>
    </StyledModal>
  )
}

export default Modal