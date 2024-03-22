import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './utils/theme/theme'
import {QueryClient,QueryClientProvider} from 'react-query';
import { router } from './router/router'

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
