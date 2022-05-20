import { useContext } from 'react'
import { authContext } from '../authContext'

const useAuthContext = () => {
  const context = useContext(authContext)

  return context
}

export default useAuthContext
