import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../components/Spinner'
import useAuthContext from '../../../context/authContext/hook/useAuthContext'
import useForm from '../../../hooks/useForm'

const Login = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const isMounted = useRef(true)

  const { dataForm, handleChange } = useForm({ email: '', password: '' })
  const { handleLogin } = useAuthContext()
  const { email, password } = dataForm

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.trim().length < 6) {
      setError({ msg: 'La contraseña debe tener minimo 6 caracteres' })
      return
    }
    try {
      setLoading(true)
      const res = await handleLogin(dataForm)
      if (isMounted.current) {
        setLoading(false)
      }
      if (res?.error) {
        setError({ msg: res.error })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full"
      autoComplete="off"
    >
      <label className="text-gray-600 text-sm">
        email:
        <input
          required
          value={email}
          onChange={handleChange}
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="email"
          name="email"
          type="email"
        />
      </label>
      <label className="text-gray-600 text-sm">
        contraseña:
        <input
          required
          value={password}
          onChange={handleChange}
          className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
          placeholder="password"
          name="password"
          type="password"
        />
      </label>
      <button
        disabled={loading}
        className="flex items-center justify-center w-full p-1 bg-blue-500 border border-blue-600 rounded-md active:bg-blue-600
        transition-colors duration-300 text-white"
      >
        {loading ? <Spinner /> : 'Iniciar Sesion'}
      </button>
      {error && (
        <span className="text-red-600 text-sm text-center">{error.msg}</span>
      )}
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
