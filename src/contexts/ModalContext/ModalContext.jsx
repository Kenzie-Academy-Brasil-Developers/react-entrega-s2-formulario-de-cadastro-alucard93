import { createContext } from "react";
import { useState } from "react";

export const AddButtonContext = createContext();

const AddButtonProvider = ({children}) => {

    const [addButton, setAddButton] = useState(false)
    const [editButton, setEditButton] = useState(false)
    const [id, setId] = useState('')
    const [registerButton, setRegisterButton] = useState(false)
    const [placeholder, setPlaceholder] = useState("")

    return (
        <AddButtonContext.Provider value={{addButton, setAddButton, 
        editButton, setEditButton, id, setId,
        registerButton, setRegisterButton, placeholder, setPlaceholder}}>
            {children}
        </AddButtonContext.Provider>
    )
}

export default AddButtonProvider
