import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Spinner from '../../../components/Spinner'
import TransactionRow from '../../../components/TransactionRow'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'
import ListOfTransactions from '../../home/components/ListOfTransactions'
import FiltersBy from './FiltersBy'

const AllTransactions = () => {
  const { transactions } = useTransactionContext()
  const [searchParams] = useSearchParams()
  const transactionFiltered = useMemo(() => {
    if (searchParams.get('type') === 'egresos') {
      return transactions?.filter(
        (transaction) => transaction.type === 'egreso'
      )
    }
    if (searchParams.get('type') === 'ingresos') {
      return transactions?.filter(
        (transaction) => transaction.type === 'ingreso'
      )
    }
    if (searchParams.get('category')) {
      return transactions?.filter(
        (transaction) =>
          transaction.category?.name === searchParams.get('category')
      )
    }
    return transactions
  }, [transactions, searchParams])

  return (
    <ListOfTransactions>
      <FiltersBy />
      {transactionFiltered ? (
        transactionFiltered.map((transaction) => (
          <TransactionRow key={transaction.transaction_id} {...transaction} />
        ))
      ) : (
        <Spinner />
      )}
    </ListOfTransactions>
  )
}

export default AllTransactions
