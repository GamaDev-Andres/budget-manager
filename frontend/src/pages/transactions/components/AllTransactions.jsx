import Spinner from '../../../components/Spinner'
import TransactionRow from '../../../components/TransactionRow'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'
import ListOfTransactions from '../../home/components/ListOfTransactions'

const AllTransactions = () => {
  const { transactions } = useTransactionContext()

  return (
    <ListOfTransactions>
      {transactions ? (
        transactions.map((transaction) => (
          <TransactionRow key={transaction.transaction_id} {...transaction} />
        ))
      ) : (
        <Spinner />
      )}
    </ListOfTransactions>
  )
}

export default AllTransactions
