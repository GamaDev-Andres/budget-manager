import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'

const Register = () => {
  const { dataForm, handleChange } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  })
  const { email, password, confirmPassword, name } = dataForm

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full"
      autoComplete="off"
    >
      <label className="text-gray-600 text-sm">
        email:
        <input
          required
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className="text-gray-600 text-sm">
        nombre:
        <input
          required
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="nombre"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="text-gray-600 text-sm">
        contraseña:
        <input
          required
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label className="text-gray-600 text-sm">
        confirmar contraseña:
        <input
          required
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="confirmar contraseña"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </label>
      <button
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
