import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export function Navigation() {
  const { loggedUser, logoutUser } = useContext(AuthContext)

  return (
    <nav>
      <div className="logo">
        <Link to='/'><h1>Task App</h1></Link>
      </div>
      <div className="navigation-links">
        { loggedUser ? (
          <>
            <Link to='/add-task'>Add task</Link>
            <Link to='/login' onClick={ logoutUser }>Logout</Link>
            <div className="welcome-user">
              <p>Hello { loggedUser }!</p>
            </div>
          </>
        ) : (
          <>
            <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
          </>
        )}
      </div>
    </nav>
  )
}
