import {React, useContext } from 'react';
import { AddButtonContext } from '../../contexts/ModalContext/ModalContext';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledModalEdit } from "./style";
import { toast } from 'react-toastify';
import api from '../../services/api'

const ModalEdit = () => {
  const {editButton, setEditButton, id, placeholder} = useContext(AddButtonContext)
  const token = localStorage.getItem("@token")

  function enableEditing () {
    setEditButton(false)
}

  const schema = yup.object().shape({
    title: yup.string().required("Insira uma Tecnologia")
    });

  const { register, handleSubmit, formState: {errors}, } = useForm({
      resolver: yupResolver(schema),
    });

    const submitEdit = (data) => {
        console.log(data)
        api.defaults.headers.authorization = `Bearer ${token}`
        api.put(`/users/techs/${id}` , data)
        .then(response => {
        toast.success('Tecnologia Editada')
        enableEditing()
        })
        .catch(err => {
        // toast.error(`${err.message}`) 
        console.log(err)}) 
    };

    const deleteTech = () => {
        api.defaults.headers.authorization = `Bearer ${token}`
        api.delete(`/users/techs/${id}`)
        .then(response => {
        toast.success('Tecnologia Excluída')
        enableEditing()
        })
        .catch(err => {
        // toast.error(`${err.message}`) 
        console.log(err)})
    };

  return (
    <StyledModalEdit>
      <aside>
        <div className='container__button' >
          <h3 className='container__button--title'>Tecnologia Detalhes</h3>
          <button className='button-close' onClick={() => enableEditing()}>X</button>
        </div>

        <form onSubmit={handleSubmit(submitEdit)}>
          <div className='container__input' >
            <label htmlFor="nome">Nome do projeto </label>
            <p>{errors.status?.message}</p>
            <input
            placeholder={placeholder} 
            value={placeholder} 
            type="text" 
            id='tech'
            />
          </div>
        <div className='container__input'>
          <label htmlFor="status">Status</label>
          <select id=""  {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <div className='container__btns'>
          <button className='btn-register' type="submit">Salvar alterações</button>
          <button className='btn-del' type="onclick" onClick={() => deleteTech()}>Excluir</button>
        </div>
        </form>
      </aside>
    </StyledModalEdit>
  )
}

export default ModalEdit