import { Outlet } from 'react-router-dom'
import NavTransaction from './components/NavTransaction'

const Transactions = () => {
  return (
    <div className="max-w-6xl mx-auto w-full md:px-4 ">
      <h1 className="text-2xl font-bold text-blue-600 text-center">
        Transacciones
      </h1>
      <NavTransaction />
      <Outlet />
    </div>
  )
}

export default Transactions
