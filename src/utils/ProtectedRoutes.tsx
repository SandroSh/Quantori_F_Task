import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router"
import { RootState } from "../state/store"





const ProtectedRoutes = () => {
  const user = useSelector((state:RootState) => state.userData)
  return  user.token ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectedRoutes