import propTypes from 'prop-types'
const ListOfTransactions = ({ children }) => {
  return (
    <ul className="mb-4 flex flex-col bg-white max-w-3xl mx-auto md:border md:border-gray-300 md:rounded-2xl">
      {children}
    </ul>
  )
}

ListOfTransactions.propTypes = {
  children: propTypes.any
}

export default ListOfTransactions
