import AuthProvider from './context/authContext/AuthProvider'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
