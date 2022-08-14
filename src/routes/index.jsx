import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext/LoginContext';
import { AddButtonContext } from '../contexts/ModalContext/ModalContext';


function RoutesMain () {
    const { user, loading } = useContext(LoginContext)
    const { registerButton } = useContext(AddButtonContext)

    return (
    
        <Routes>
            <Route path='/' element={<Login/>} />               
            <Route path='cadastro' element={registerButton ? <Register/> : <Navigate replace to='/'/>}  />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='*' element={<Navigate replace to='/'/>} /> 
        </Routes>
    )
}

export default RoutesMain;


