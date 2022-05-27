import { Route, Routes } from 'react-router-dom'
import Account from '../pages/account/Account'
import Login from '../pages/account/login/Login'
import Register from '../pages/account/register/Register'
import Home from '../pages/home/Home'
import Page404 from '../pages/page404/Page404'
import AllTransactions from '../pages/transactions/components/AllTransactions'
import { FormTransaction } from '../pages/transactions/components/FormTransaction'
import Transactions from '../pages/transactions/Transactions'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />}>
          <Route index element={<AllTransactions />} />
          <Route path="create" element={<FormTransaction />} />
        </Route>
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/account" element={<Account />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

      <Route path="/*" element={<Page404 />} />
    </Routes>
  )
}

export default AppRouter
