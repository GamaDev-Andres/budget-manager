import { Outlet, useLocation } from 'react-router-dom'

const Account = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <div className="flex flex-col items-center justify-center max-w-[350px] w-full rounded-2xl sm:border sm:border-gray-300 py-4 px-8">
        <h1 className="text-black font-bold text-center text-3xl my-1">
          {pathname.includes('register') ? 'Registrarse' : 'Login'}
        </h1>
        <div className="w-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Account
