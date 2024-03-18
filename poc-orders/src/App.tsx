import { Fragment } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import GuardedRoute from './utils/GuardedRoute/GuardedRoute'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme/theme'
import DashboardLayout from './utils/layouts/DashboardLayout'

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
    element: 
      <GuardedRoute> 
        <DashboardLayout/> 
      </GuardedRoute>,
    children: [
      {
        path: '/',
        element: <DashboardPage />
      },
      {
        path: '/products',
        element: <p> Produse </p>
      }
    ]
  },
  {
    path: '*',
    element: <p> Page not found </p>
  }
])

function App() {

  return (
   <Fragment>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>    
    </ThemeProvider>
   </Fragment>
  )
}

export default App
