import React, { ReactNode, useEffect, useState } from 'react';

import { AuthContext } from '../../context';

import { apiHelper, getToken } from '../../utils';

interface User {
  email: string
}

function AuthWrapper ({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<User>({
    email: ''
  })
  const token = getToken()

  useEffect(() => {
    const token = getToken()

    async function validateTokenAndGetUser() {
      try {
        const response = await apiHelper.get('/auth/getUser', token)

        const { email } = response.body
        setUserData({ email })
      } catch (error) {
        // Logout
      }
    }

    if (token) {
      validateTokenAndGetUser()
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!token,
      userData,
      setUserData
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper;
