import React from 'react'
import { StyledModal } from "./style";

const Modal = () => {
  return (
    <StyledModal>
      <aside>
        <div className='container__button' >
          <h3 className='container__button--title'>Cadastrar Tecnologia</h3>
          <button className='button-close'>X</button>
        </div>

        <form action="">
          <div className='container__input' >
            <label htmlFor="nome">Nome  </label>
            <input 
            type="text" 
            placeholder='Digite a tecnologia'
            id='tech'
            />
          </div>
         <div className='container__input'>
          <label htmlFor="status">Selecionar status</label>
          <select id="">
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