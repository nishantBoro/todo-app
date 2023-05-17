import { ReactNode } from 'react';

interface PublicRouteTypes {
  children: ReactNode
}

function PublicRoute({ children }: PublicRouteTypes) {
  
  return (
    <>{ children }</>
  )
}

export default PublicRoute