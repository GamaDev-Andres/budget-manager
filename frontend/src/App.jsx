import Nav from './components/Nav'
import AuthProvider from './context/authContext/AuthProvider'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <AuthProvider>
      <div className="bg-white min-h-screen text-black flex flex-col">
        <Nav />
        <AppRouter />
      </div>
    </AuthProvider>
  )
}

export default App
