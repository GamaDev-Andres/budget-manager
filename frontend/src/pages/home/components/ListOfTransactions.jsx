import propTypes from 'prop-types'
import TransactionRow from '../../../components/TransactionRow'
const ListOfTransactions = ({
  arrTransactions = Array.from({ length: 10 })
}) => {
  return (
    <ul className="flex flex-col bg-white max-w-3xl mx-auto md:border md:border-gray-300 md:rounded-2xl">
      {arrTransactions.map((transaction, i) => (
        <TransactionRow key={i} />
      ))}
    </ul>
  )
}

ListOfTransactions.propTypes = {
  arrTransactions: propTypes.array
}

export default ListOfTransactions
