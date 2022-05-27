import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'
import useAuthContext from './context/authContext/hook/useAuthContext'
import AppRouter from './routes/AppRouter'

function App() {
  const { renovarToken } = useAuthContext()
  const [verifyToken, setVerifyToken] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      renovarToken().then(() => {
        setVerifyToken(false)
      })
    } else {
      setVerifyToken(false)
    }
  }, [])
  if (verifyToken) {
    return <Spinner fullScreen={true} />
  }
  return (
    <div className="bg-white min-h-screen text-black flex flex-col">
      <AppRouter />
    </div>
  )
}

export default App
