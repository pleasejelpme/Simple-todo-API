const loginForm = document.getElementById('login-form')
const apiEndpoint = 'http://localhost:8000/api' 
const tasksList = document.getElementById('tasks-list')

if (loginForm){
    loginForm.addEventListener('submit', event => {
        event.preventDefault()
        let logiFormData = new FormData(loginForm)
        let loginObjectData = Object.fromEntries(logiFormData)
  
        const loginEndpoint = `${apiEndpoint}/login/`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObjectData)
        }

        fetch(loginEndpoint, options)

        .then(response => {
            return response.json()
        })
        
        .then(data => {
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
        })

        .then(getTasks())

        .catch(error => console.log(error))
        
    })
}


function getTasks(){
    const endpoint = `${apiEndpoint}/tasks/`
    
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (tasksList){
            tasksList.innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`
        }
    })
}

getTasks()