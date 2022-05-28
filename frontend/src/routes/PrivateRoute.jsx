import { Navigate, Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import useAuthContext from '../context/authContext/hook/useAuthContext'
import TransactionProvider from '../context/transactionContext/TransactionProvider'

const PrivateRoute = () => {
  const { user } = useAuthContext()
  return user ? (
    <TransactionProvider>
      <Nav />
      <Outlet />
    </TransactionProvider>
  ) : (
    <Navigate to={'/account'} />
  )
}

export default PrivateRoute
