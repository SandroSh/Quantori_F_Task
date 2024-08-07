
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Homepage/Home'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
