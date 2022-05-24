import { Link } from 'react-router-dom'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="flex flex-col gap-4 w-full" autoComplete="off">
      <label className="text-gray-600 text-sm">
        email:
        <input
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="email"
          type="email"
        />
      </label>
      <label className="text-gray-600 text-sm">
        nombre:
        <input
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="nombre"
          type="text"
        />
      </label>
      <label className="text-gray-600 text-sm">
        contraseña:
        <input
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="password"
          type="password"
        />
      </label>
      <label className="text-gray-600 text-sm">
        confirmar contraseña:
        <input
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="confirmar contraseña"
          type="password"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="w-full p-1 bg-blue-500 border border-blue-600 rounded-md active:bg-blue-600
        transition-colors duration-300 text-white"
      >
        Registrarse
      </button>
      <span className="text-sm ">
        ¿Ya tienes cuenta?{' '}
        <Link className="text-blue-600" to={'/account'}>
          Inicia sesion
        </Link>
      </span>
    </form>
  )
}

export default Register
