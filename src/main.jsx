import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Components/context/Auth.context.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import AuthContextProvider from './Context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false}}})
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
      <ToastContainer autoClose={500}></ToastContainer>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
