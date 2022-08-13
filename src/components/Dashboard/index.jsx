import { StyledDashboard } from '../Dashboard/style';
import { Container } from '../../styled/global'
import Logo from '../../assets/Logo.svg'
import {useNavigate, Navigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri'
import Modal from '../Modal';

const Dashboard = () => {
    
    const navigate = useNavigate()
    const dataUser = JSON.parse(localStorage.getItem("@DATA"));

    if(!dataUser){
    return <Navigate to="/" replace />
    }

    function logout(){
        localStorage.clear()
        navigate("/")
        toast.success('Logout feito com sucesso!')
    }

    return (
    <Container>     
        <StyledDashboard>
            <header>
                <div className='container__logo'>
                    <img className='container__img' src={Logo} alt="Logo" ></img>
                    <button className='btn-logout' onClick={() => logout()}>Sair</button>
                </div>
            </header>
            <section className='container__user'>
                <h4 className='container__tittle4'>Olá, {dataUser.name}</h4>
                <p className='container__text'>{dataUser.course_module}</p>
            </section>

            <section className='container__tech'>
                <h3 className='container__tech--tittle' >Tecnologias</h3>
                <button className='container__tech--button' >+</button>
            </section>
            <main>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
                <div className='container__tech-card'>
                    <p className='container__tech-card__text1' >React JS</p>
                    <p className='container__tech-card__text2' >Intermediário</p>
                    <button className='container__tech-card__button' ><RiDeleteBin6Line/></button>
                </div>
            </main>
        <Modal/>
        </StyledDashboard>
    </Container>
    )
}

export default Dashboard