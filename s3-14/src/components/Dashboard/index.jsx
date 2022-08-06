import { StyledDashboard } from '../Dashboard/style';
import { Container } from '../../styled/global'
import Logo from '../../assets/Logo.svg'
import {useNavigate, Navigate} from "react-router-dom"
import { toast } from 'react-toastify';

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
            <main>
                <p className='container__text1' >Que pena! Estamos em desenvolvimento :/ </p>
                <p className='container__text2'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </StyledDashboard>
    </Container>
    )
}

export default Dashboard