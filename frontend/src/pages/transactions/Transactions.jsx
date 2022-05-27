import { NavLink, Outlet } from 'react-router-dom'

const Transactions = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">Transacciones</h1>
      <nav className="flex items-center justify-center mx-auto w-full">
        <div className="flex my-2 text-xs">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'rounded-l-full border px-4 py-1  border-blue-300 text-white bg-blue-300'
                : 'rounded-l-full border px-4 py-1  border-blue-300 text-black bg-transparent'
            }
            to="."
            end
          >
            Ver
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? 'rounded-r-full border-y border-blue-300 border-r px-4 py-1 text-black bg-transparent'
                : 'rounded-r-full border-y border-blue-300 border-r px-4 py-1 text-white bg-blue-300'
            }
            to="create"
          >
            Crear
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Transactions
