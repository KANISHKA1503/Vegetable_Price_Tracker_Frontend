
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router'
import App from './App.jsx'
import HomeLayout from '../layouts/HomeLayout.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Notify from './components/Notify.jsx'
import AuthForm from './components/AuthForm.jsx'
import {ToastContainer} from 'react-toastify'
import VegetablePrices from './components/VegetablePrices.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
createRoot(document.getElementById('root')).render(
   <> <ToastContainer/>
   <BrowserRouter>
   <Routes>
      <Route element={<HomeLayout/>}>
      <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>} />
      <Route path='/prices' element={<VegetablePrices/>} />
        <Route path='/' element={ <App />}/>
     <Route path='/notify' element={<ProtectedRoute><Notify/></ProtectedRoute>}/>
      </Route>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
  <Route path='/login_or_reg' element={<AuthForm/>}/>
      </Routes>
    </BrowserRouter>
</> 
)
