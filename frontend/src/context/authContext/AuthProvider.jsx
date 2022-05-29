import { useCallback, useState } from 'react'
import { customFetch } from '../../utilities/customFetch'
import { authContext } from './authContext'

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const url = import.meta.env.VITE_URL_SERVER

  const handleLogin = useCallback(async ({ email, password }) => {
    try {
      const urlPeticion = url + '/api/auth'
      const response = await customFetch(
        urlPeticion,
        'POST',
        { email, password },
        false
      )
      if (!response.ok) {
        return { error: response.errors[0]?.msg }
      }
      localStorage.setItem('token', response.token)
      setUser(response.user)
    } catch (error) {
      console.log(error)
    }
  }, [])
  const handleRegister = useCallback(async ({ email, password, name }) => {
    try {
      const urlPeticion = url + '/api/user'
      const response = await customFetch(
        urlPeticion,
        'POST',
        { email, password, name },
        false
      )
      if (!response.ok) {
        return { error: response.errors[0]?.msg }
      }
      localStorage.setItem('token', response.token)
      setUser(response.user)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const renovarToken = useCallback(async () => {
    try {
      const urlPeticion = url + '/api/auth'
      const response = await customFetch(urlPeticion, 'GET')
      if (!response.ok) {
        logOut()
        return response.errors[0]?.msg
      }
      setUser(response.user)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const logOut = useCallback(() => {
    if (user) {
      localStorage.removeItem('token')
    }
    setUser(null)
  }, [user])

  return (
    <authContext.Provider
      value={{ user, renovarToken, handleLogin, handleRegister, logOut }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
