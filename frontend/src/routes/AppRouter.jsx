import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from '../components/Spinner'
import useAuthContext from '../context/authContext/hook/useAuthContext'
import Account from '../pages/account/Account'
import Login from '../pages/account/login/Login'
import Register from '../pages/account/register/Register'
import Home from '../pages/home/Home'
import Page404 from '../pages/page404/Page404'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const { renovarToken } = useAuthContext()
  const [verifyToken, setVerifyToken] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      renovarToken().then(() => {
        setVerifyToken(false)
      })
    } else {
      setVerifyToken(false)
    }
  }, [])
  if (verifyToken) {
    return <Spinner fullScreen={true} />
  }
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/account" element={<Account />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

      <Route element={<PublicRoute />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/*" element={<Page404 />} />
    </Routes>
  )
}

export default AppRouter
