import React, { createContext, useState, ReactNode, SetStateAction } from "react";


interface Icontext {
    children:   ReactNode    
};

interface IUser {
    avatar_url?: string
    bio: string
    course_module: string
    created_at: Date
    email: string
    id: string
    name: string
    techs: string[]
    updated_at?: Date
    works: string[]
}

interface IcontextProps {
    user: IUser | (() => IUser) | undefined
    userId: string
    loading: boolean
    setUser: React.Dispatch<SetStateAction<IUser | undefined>>
    setUserId: React.Dispatch<SetStateAction<string>>
    setLoading: React.Dispatch<SetStateAction<boolean>>
};

export const LoginContext = createContext<IcontextProps>({} as IcontextProps);

const LoginProvider = ({children}: Icontext) => {

    const [user, setUser] = useState<IUser>()
    const [userId, setUserId] = useState("")
    const [loading, setLoading] = useState(true)
    // const [botaoAdd, setBotaoAdd] = useState(false)

    return (
        <LoginContext.Provider value={{user, userId, setUser, 
        setUserId, loading, setLoading}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;
