import { useContext } from "react"
import { API_URL } from "../constants/Constants"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


export function TaskFormPage() {  
  const { authTokens } = useContext(AuthContext)   
  const accessToken = authTokens.access

  const navigate = useNavigate()
  
  const submitTask = async (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const description = event.target.description.value

    const response = await fetch(API_URL + '/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken)
      },
      body: JSON.stringify({
        title,
        description
      })
    })

    if ( response.status === 201) {
      navigate('/ ')
    }
  }
  

  return (
      <div className="task-form">
        <h1>Add task</h1>
        <form onSubmit={submitTask}>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" required/>

          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>

          <button>save</button>
        </form>
      </div>
    )
  }