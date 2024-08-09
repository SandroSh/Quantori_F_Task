
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Homepage/Home'
import ProtectedRoutes from './utils/ProtectedRoutes'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Contact from './Components/Contact/Contact'



function App() {
  useEffect(() => {
    toast(
      "For accessing all pages, please login with test user\n Username: emilys \n Password: emilyspass",
      {
        duration: 5000,
      }
    );
  },)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route> :


      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
