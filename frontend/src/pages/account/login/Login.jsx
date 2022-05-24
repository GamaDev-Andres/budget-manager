import { Link } from 'react-router-dom'

const Login = () => {
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
        contraseña:
        <input
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="password"
          type="password"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="w-full p-1 bg-blue-500 border border-blue-600 rounded-md active:bg-blue-600
        transition-colors duration-300 text-white"
      >
        Inciar Sesion
      </button>
      <span className="text-sm ">
        ¿No tienes cuenta?{' '}
        <Link className="text-blue-600" to={'register'}>
          Registrate
        </Link>
      </span>
    </form>
  )
}

export default Login
