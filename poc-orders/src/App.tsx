import { Fragment } from 'react'
import './App.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element:<h1> TODO : Register page </h1>
  },
  {
    path: '/',
    element: <DashboardPage />
  },
  {
    path: '*',
    element: <p> Page not found </p>
  }
])

function App() {

  return (
   <Fragment>
    <RouterProvider router={router}/>
   </Fragment>
  )
}

export default App
