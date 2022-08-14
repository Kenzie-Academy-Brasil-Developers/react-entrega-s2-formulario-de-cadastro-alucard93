import LoginProvider from "./LoginContext/LoginContext";
import AddButtonProvider from "./ModalContext/ModalContext";

const Providers = ({children}) => {
    return (
        <LoginProvider>
            <AddButtonProvider>
              {children}
            </AddButtonProvider>
        </LoginProvider>
    )
}

export default Providers;