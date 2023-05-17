import { Navigate } from 'react-router-dom'
import { ReactNode, useContext } from 'react'

import { AuthContext } from '../context'

interface PrivateRouteTypes {
  children: ReactNode
}

function PrivateRoute({ children }: PrivateRouteTypes) {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) {
    return <>{ children }</>
  }

  return (
    <Navigate
      to={{
        pathname: '/login'
      }}
    />
  )
}

export default PrivateRoute;