import { API_URL } from "../constants/Constants"

export const getTasks = async ( token ) => {
  const response = await fetch(API_URL + '/tasks/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(token)
    }
  })

  const data = await response.json()
  return data
}

export const deleteTask = async ( token, id ) => {
  const response = await fetch(API_URL + `/tasks/${id}/`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(token)
    }
  })
  console.log(response)
  return response
}