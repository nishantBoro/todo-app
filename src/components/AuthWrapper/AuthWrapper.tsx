import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context';

import { apiHelper, deleteToken, getToken } from '../../utils';

interface User {
  email: string
}

function getIntialUserData() {
  return {
    email: ''
  }
}

function AuthWrapper ({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<User>(getIntialUserData)
  const navigate = useNavigate()
  const token = getToken()

  const cachedLogout = useCallback(function logout() {
    deleteToken()
    setUserData(getIntialUserData())
    navigate('/login')
  }, [navigate])

  useEffect(() => {
    const token = getToken()

    async function validateTokenAndGetUser() {
      try {
        const response = await apiHelper.get('/auth/getUser', token)

        const { email } = response.body
        setUserData({ email })
      } catch (error) {
        cachedLogout()
      }
    }

    if (token) {
      validateTokenAndGetUser()
    }
  }, [cachedLogout])

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!token,
      userData,
      setUserData,
      logout: cachedLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper;
