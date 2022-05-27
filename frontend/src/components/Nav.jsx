import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../context/authContext/hook/useAuthContext'
import ButtonLogOut from './ButtonLogOut'
import IconMenu from './IconMenu'
import NavBar from './NavBar'

const Nav = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const { user } = useAuthContext()

  return (
    <nav className="px-4 py-2 border-b border-gray-400">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <button
          onClick={() => setIsActiveMenu(true)}
          className="block md:hidden"
        >
          <IconMenu />
        </button>
        <h1 className="font-semibold text-xl">{user.name}</h1>
        <div className="hidden md:block">
          <Link
            className="border-r border-blue-600 px-2 text-blue-600 font-semibold"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="border-r border-blue-600 px-2 text-blue-600 font-semibold"
            to="/transactions"
          >
            Ver transacciones
          </Link>
          <Link
            className="border-r border-blue-600 px-2 text-blue-600 font-semibold"
            to="/"
          >
            Crear transacciones
          </Link>
          <ButtonLogOut className="pl-2 text-blue-600 font-semibold">
            Salir
          </ButtonLogOut>
        </div>
      </div>
      <NavBar closeMenu={() => setIsActiveMenu(false)} active={isActiveMenu} />
    </nav>
  )
}

export default Nav
