import { useNavigate } from "react-router-dom"
import { API_URL } from "../constants/Constants"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { deleteTask } from '../api/ApiRequests'


export const TaskCard = ({ task }) => {

  const navigate = useNavigate()
  const { authTokens } = useContext(AuthContext)
  const accessToken = authTokens.access

  // const deleteTask = async () => {
  //   await fetch(API_URL + `/tasks/${task.id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + String(accessToken)
  //     }
  //   })
  // }
  const handleDelete = () => {
    deleteTask(accessToken, task.id)
  }

  return (
    <div className="task">
      <div className="task-info" onClick={() => {navigate(`/task/${task.id}`)}}>
        <h3>{ task.title }</h3>
      </div>
      <div className="options">
        <div className="delete" onClick={handleDelete}>
          delete
        </div>
        <div className="edit">
          edit
        </div>
      </div>
    </div>
  )
}