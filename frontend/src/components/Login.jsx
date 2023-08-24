import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import { AuthContext } from '../context/AuthContext'
import { API_URL } from "../constants/Constants"


export const Login = () => {
  const { setLoggedUser, setAuthTokens, setLoading } = useContext(AuthContext)

  const userRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    userRef.current.focus()
  }, [userRef])


  const loginUser = async (event) => {
    event.preventDefault()
    const response = await fetch(API_URL + '/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json()
    
    if (response.status === 200 ) {
      setAuthTokens({'access': data.access, 'refresh': data.refresh})

      localStorage.setItem('accessToken', JSON.stringify(data.access))
      localStorage.setItem('refreshToken', JSON.stringify(data.refresh))
      
      setLoggedUser(jwt_decode(data.access).username)
      setLoading(false)
      navigate('/')
    }

    if ( response.status === 401 ) {
      alert('Invalid username or password')
    }
  }


  return (
    <section className="login-form">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="username">username: </label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            ref={userRef} 
            autoComplete="off"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            required
            />

        <label htmlFor="password">password: </label>
        <input 
            type="password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
        />

        <button>Login</button>
      </form>
      <p>Dont have an account?</p><br />
      <span><Link to='/register'>Register</Link></span>
    </section>
  )
}
