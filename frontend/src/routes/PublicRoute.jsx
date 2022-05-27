import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../context/authContext/hook/useAuthContext'

const PublicRoute = () => {
  const { user } = useAuthContext()
  return !user ? <Outlet /> : <Navigate to={'/'} />
}

export default PublicRoute
