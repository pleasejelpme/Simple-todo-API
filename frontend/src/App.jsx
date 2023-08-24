import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TasksPage } from './pages/TasksPage'
import { RegisterPage } from './pages/RegisterPage'
import { TaskFormPage } from './pages/TaskFormPage'

import { Navigation } from './components/Navigation'
import { Login } from './components/Login'
import { PrivateRoutes } from './utils/PrivateRoutes'



function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<TasksPage/>} />
            <Route path='/add-task' element={<TaskFormPage/>} />  
            <Route path='/task/:id' element={<TaskFormPage/>} />           
          </Route>

          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
