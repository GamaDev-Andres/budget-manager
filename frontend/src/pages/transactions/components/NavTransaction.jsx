import { NavLink } from 'react-router-dom'

const NavTransaction = () => {
  return (
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
  )
}

export default NavTransaction
