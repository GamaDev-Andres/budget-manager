import AuthProvider from './context/authContext/AuthProvider'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-200 min-h-screen text-black flex flex-col">
        <AppRouter />
      </div>
    </AuthProvider>
  )
}

export default App
