import React from 'react'
import { useAuth } from '../../features/auth/ContextProvider'
import { Navigate } from 'react-router-dom'
import { PageLoader } from '../PageLoader/PageLoader'

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isUserLoading, user } = useAuth()

  if (isUserLoading) {
    return <PageLoader />
  }

  return (
    <React.Fragment>
      {isAuthenticated && user.isAdmin ? (
        children
      ) : (
        <Navigate replace to="/login" />
      )}
    </React.Fragment>
  )
}
