import { createContext, Dispatch, SetStateAction } from 'react'

interface User {
  email: string
}

interface AuthContextProps {
  userData: User
  isAuthenticated: boolean,
  setUserData: Dispatch<SetStateAction<User>>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  userData: {
    email: ''
  },
  isAuthenticated: false,
  setUserData: () => { /* noop */ },
  logout: () => { /* noop */ }
});
