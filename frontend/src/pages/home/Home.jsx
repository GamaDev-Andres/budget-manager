import { formatDateforTransactions } from '../../adapters/formatDateforTransactions'
import Spinner from '../../components/Spinner'
import TransactionRow from '../../components/TransactionRow'
import useTransactionContext from '../../context/transactionContext/hook/useTransactionContext'
import Balance from './components/Balance'
import ListOfTransactions from './components/ListOfTransactions'

const Home = () => {
  const { transactions } = useTransactionContext()
  return (
    <div className="max-w-6xl pb-4 mx-auto w-full flex flex-col items-center justify-center md:flex-row md:px-4">
      <Balance />
      <div className="w-full">
        <h2 className="text-center text-blue-600 font-bold text-2xl my-2">
          Ultimas transacciones
        </h2>
        <ListOfTransactions>
          {transactions ? (
            formatDateforTransactions(transactions)
              .slice(0, 10)
              .map((transaction) => (
                <TransactionRow
                  key={transaction.transaction_id}
                  {...transaction}
                />
              ))
          ) : (
            <Spinner />
          )}
        </ListOfTransactions>
      </div>
    </div>
  )
}

export default Home
