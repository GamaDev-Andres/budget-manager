import { Link } from 'react-router-dom'
import IconMenu from './IconMenu'
import propTypes from 'prop-types'

const NavBar = ({ active, closeMenu }) => {
  console.log(active)
  return (
    <div
      onClick={() => closeMenu()}
      className={`${
        active ? ' bg-opacity-50 visible' : 'bg-opacity-0 invisible'
      } transition-all duration-300 fixed  bg-black inset-0 md:hidden`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`${
          active ? 'translate-x-0 ' : '-translate-x-full '
        } bg-blue-600 p-4 w-3/4 h-full flex flex-col text-white absolute left-0 top-0 transition-all duration-300`}
      >
        <button onClick={closeMenu} className="self-start">
          <IconMenu />
        </button>
        <div className="flex flex-col justify-center mt-4">
          <Link className="border-b border-blue-700  py-2" to="/">
            Inicio
          </Link>
          <Link className="border-b border-blue-700  py-2" to="/">
            Ver transacciones
          </Link>
          <Link className="border-b border-blue-700  py-2" to="/">
            Crear transacciones
          </Link>
          <button className="self-start py-2">Salir</button>
        </div>
      </div>
    </div>
  )
}
NavBar.propTypes = {
  active: propTypes.bool.isRequired,
  closeMenu: propTypes.func.isRequired
}
export default NavBar
