import './App.css';
import Global from './styled/global';
import RoutesMain from "./routes/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Global/>
    <RoutesMain/>
    <ToastContainer/>
    </>
    
  );
}

export default App;
