import './App.css';
import Global from './styled/global';
import RoutesMain from "./routes/index"
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

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
