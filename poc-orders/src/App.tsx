import { Fragment } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import GuardedRoute from './utils/GuardedRoute/GuardedRoute'

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
    element: <GuardedRoute> <DashboardPage/> </GuardedRoute>
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
