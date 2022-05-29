import propTypes from 'prop-types'

const Balance = ({ children }) => {
  console.log(children)
  return (
    <div className="bg-white w-full md:pl-4">
      <h1 className="text-[35px] text-gray-600 font-semibold text-center">
        Balance total:
      </h1>
      <span
        className={`block text-[60px] font-black text-center ${
          children >= 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
Balance.propTypes = {
  children: propTypes.any
}
export default Balance
