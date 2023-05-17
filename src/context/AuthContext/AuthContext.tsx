import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'

interface User {
  email: string
}

interface AuthContextProps {
  userData: User
  isAuthenticated: boolean,
  setUserData: Dispatch<SetStateAction<User>>
}

export const AuthContext = createContext<AuthContextProps>({
  userData: {
    email: ''
  },
  isAuthenticated: false,
  setUserData: () => { /* noop */ }
});
