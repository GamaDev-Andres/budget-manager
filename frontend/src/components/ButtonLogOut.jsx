import useAuthContext from '../context/authContext/hook/useAuthContext'
import propTypes from 'prop-types'
const ButtonLogOut = ({ children, className }) => {
  const { logOut } = useAuthContext()
  return (
    <button className={className} onClick={logOut}>
      {children}
    </button>
  )
}
ButtonLogOut.propTypes = {
  className: propTypes.string,
  children: propTypes.any
}
export default ButtonLogOut
