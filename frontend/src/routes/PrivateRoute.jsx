import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../context/authContext/hook/useAuthContext'

const PrivateRoute = () => {
  const { user } = useAuthContext()
  return !user ? <Outlet /> : <Navigate to={'/home'} />
}

export default PrivateRoute
