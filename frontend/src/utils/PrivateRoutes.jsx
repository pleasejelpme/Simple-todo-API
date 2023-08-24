import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";


export const PrivateRoutes = () => {
  const { loggedUser } = useContext(AuthContext)

  return (
    loggedUser ? <Outlet /> : <Navigate to='/login' />
  )
}

export const AuthRoutes = () => {
  const { loggedUser } = useContext(AuthContext)

  return (
    loggedUser ? <Outlet/> : <Navigate to='/' /> 
  )
}


