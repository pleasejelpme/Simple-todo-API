import jwt_decode from 'jwt-decode'
import { createContext, useEffect, useState } from "react"
import { API_URL } from '../constants/Constants'



export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'))
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))

  const [loading, setLoading] = useState(true)

  const [loggedUser, setLoggedUser] = useState(
    accessToken ? jwt_decode(accessToken).username : null
  )

  const [authTokens, setAuthTokens] = useState(
    accessToken && refreshToken ? 
    {'access': accessToken, 'refresh': refreshToken} : 
    null
  )

  const logoutUser = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoggedUser(null)
    setAuthTokens(null)
  }

  const refreshTokens = async () => {
    console.log('refresh tokens called')
    const response = await fetch(API_URL + '/login/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refresh: authTokens.refresh
      })
    })

    const data = await response.json()

    if ( response.status === 200 ) {
      setAuthTokens({'access': data.access, 'refresh': data.refresh })
      setLoggedUser(jwt_decode(data.access).username)
      localStorage.setItem('accessToken', JSON.stringify(data.access))
      localStorage.setItem('refreshToken', JSON.stringify(data.refresh))
    } else {
      console.log('error ocurred on refresh token', data)
      logoutUser()
    }

    if (loading) setLoading(false)
  }

  useEffect(() => {
    const time = 1000 * 60 * 4
    const interval = setInterval(() => {
      authTokens && refreshTokens()
    }, time)
    return () => clearInterval(interval)
  }, [authTokens])

  return (
    <AuthContext.Provider value={{ 
      loggedUser, 
      authTokens,
      setLoading,
      setAuthTokens, 
      setLoggedUser, 
      logoutUser,
      refreshTokens
      }}>
      { children }
    </AuthContext.Provider>
  )
}
