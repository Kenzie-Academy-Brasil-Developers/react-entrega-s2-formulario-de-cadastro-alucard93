/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyledDashboard } from './style';
import { Container } from '../../styled/global'
// import Logo from '../../assets/Logo.svg'
import {useNavigate, Navigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Modal from '../Modal';
import { useContext, useState, useEffect } from 'react';
import { LoginContext } from '../../contexts/LoginContext/LoginContext'
import { AddButtonContext } from '../../contexts/ModalContext/ModalContext'
import api from '../../services/api';
import ModalEdit from '../ModalEdit/ModalEdit';
import { AxiosError, AxiosResponse } from 'axios'


interface ITech {
    created_at: Date
    id: string
    status: string
    title: string
    updated_at: Date
}

const Dashboard = () => {
    
    const dataUser = JSON.parse(localStorage.getItem("@userData") || '{}' );
    const navigate = useNavigate()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user , setUser, setLoading, loading } = useContext(LoginContext)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { addButton, setAddButton, editButton, setEditButton, id, setId, setPlaceholder } = useContext(AddButtonContext)
    const [techs, setTechs] = useState<ITech[]>([])

    useEffect(() => {

    const idUser = localStorage.getItem("@userId")       

    function load () {
        api.get(`/users/${idUser}`).then((res: AxiosResponse) => {
            setTechs(res.data.techs)
            setUser(res.data)
            setLoading(false)
        }).catch((err: AxiosError) => {console.log(err)})
        }
        return load()    
    }, [setLoading, setUser, techs])
    
    const loadingPage = ():void => {
        setLoading(false)
    }

    const logout = ():void => {
        localStorage.clear()
        setUser(undefined)
        toast.success('Logout feito com sucesso!')
    }


    function activateRegistration () {
        setAddButton(true)
    }

    function activateEditor (id:string, placeholder: string) {
        setEditButton(true)
        setId(id)
        setPlaceholder(placeholder)
    }


    if(user) {

    return (
        <>
        
    <Container>     
        <StyledDashboard>
            <header>
                <section className='container__border'>
                    <div className='container__logo'>
                        {/* <img className='container__img' src={Logo} alt="Logo" ></img> */}
                        <button className='btn-logout' onClick={() => logout()}>Sair</button>
                    </div>
                </section>
            </header>
            <section className='container__border'>
                <section className='container__user'>
                    <h4 className='container__tittle4'>Olá, {dataUser.name}</h4>
                    <p className='container__text'>{dataUser.course_module}</p>
                </section>
            </section>

            <section className='container__tech'>
                <h3 className='container__tech--tittle' >Tecnologias</h3>
                <button className='container__tech--button' onClick={() => activateRegistration() } >+</button>
            </section>
            <main>
            
                    {
                        techs.map((item,index) => {
                            return (
                                <div className='container__tech-card' key={index} id={item.id}
                                onClick={() => activateEditor(item.id, item.title)}>
                                    <h6 className='container__tech-card__text1'>{item.title}</h6>
                                    <div className='container__tech-card--button'>
                                        <p className='container__tech-card__text2'>{item.status}</p>
                                        <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                                    </div>
                                </div>
                            )
                        })
                    }
            </main>

            {addButton && 
                <Modal/>
                    }
            {editButton && 
                <ModalEdit/>
                    }
        </StyledDashboard>
    </Container>
    </>
    )
    } else {
        return (
            <>        
            {loadingPage()}
            <Navigate to='/login' replace/>
        </>
        )}
}

export default Dashboard