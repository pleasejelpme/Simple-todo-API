import { useContext, useEffect, useState } from "react"

import { AuthContext } from "../context/AuthContext"
// import { API_URL } from "../constants/Constants"
import { TaskCard } from '../components/TaskCard'
import { getTasks } from '../api/ApiRequests'
 


export function TasksPage() {
  const { authTokens } = useContext(AuthContext)
  const [tasks, setTasks] = useState([])
  
  const accessToken = authTokens.access

  useEffect(() => {
    async function loadTasks () {
      const response = await getTasks(accessToken)
      setTasks(response)
    }
    loadTasks()
  }, [])

  return (
    <>
      <div className="task-list">
      <h2>Tasks</h2>
        {tasks.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    </>
  )
}
