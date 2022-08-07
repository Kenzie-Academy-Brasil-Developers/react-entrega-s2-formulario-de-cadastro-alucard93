import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "../components/Login"
import Register from "../components/Register"
import Dashboard from "../components/Dashboard"

function RoutesMain () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />               
            <Route path='cadastro' element={<Register/>} />
            <Route path='dashboard' element={<Dashboard/>} />
        </Routes>
</BrowserRouter>
    )
}

export default RoutesMain;


