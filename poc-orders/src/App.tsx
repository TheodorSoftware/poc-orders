import { Fragment } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import GuardedRoute from './utils/GuardedRoute/GuardedRoute'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme/theme'
import DashboardLayout from './utils/layouts/DashboardLayout'
import OrderPage from './pages/order/OrderPage';
import OrderPageLayout from './utils/layouts/OrderPageLayout'
import ProductPage from './pages/product/ProductPage'
import {QueryClient,QueryClientProvider} from 'react-query';

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
    element: (
      <GuardedRoute> 
        <DashboardLayout/> 
      </GuardedRoute>
    ),
    children: [
      {
        path: '/',
        element: <DashboardPage />
      },
      {
        path: 'products',
        element: <OrderPageLayout />,
        children: [
          {
            path: '',
            element: <OrderPage />
          },
          {
            path: ':id',
            element: <ProductPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <p> Page not found </p>
  }
])

function App() {

  const queryClient = new QueryClient();

  return (
   <Fragment>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>    
      </QueryClientProvider>
    </ThemeProvider>
   </Fragment>
  )
}

export default App
