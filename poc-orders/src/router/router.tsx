import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import GuardedRoute from "../utils/GuardedRoute/GuardedRoute"
import DashboardLayout from "../utils/layouts/DashboardLayout"
import OrderPageLayout from "../utils/layouts/OrderPageLayout"
import OrderPage from "../pages/order/OrderPage"
import ProductPage from "../pages/product/ProductPage"
import DashboardPage from "../pages/dashboard/DashboardPage"

export const router = createBrowserRouter([
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
          path: 'orders',
          element: <OrderPageLayout />,
          children: [
            {
              path: '',
              element: <OrderPage />
            },
            {
              path: ':id',
              element: <ProductPage />
            },
            {
              path:'create',
              element: <p> Create Order Page </p>
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <p> Page not found </p>
    }
]);
