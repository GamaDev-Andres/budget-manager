import { Navigate, Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import useAuthContext from '../context/authContext/hook/useAuthContext'

const PrivateRoute = () => {
  const { user } = useAuthContext()
  return user ? (
    <>
      <Nav />
      <Outlet />
    </>
  ) : (
    <Navigate to={'/account'} />
  )
}

export default PrivateRoute
