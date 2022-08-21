import LoginProvider from "./LoginContext/LoginContext";
import AddButtonProvider from "./ModalContext/ModalContext";

import React, { ReactNode } from "react";

interface Icontext {
    children:   ReactNode    
};

const Providers = ({children}: Icontext) => {
    return (
        <LoginProvider>
            <AddButtonProvider>
              {children}
            </AddButtonProvider>
        </LoginProvider>
    )
}

export default Providers;