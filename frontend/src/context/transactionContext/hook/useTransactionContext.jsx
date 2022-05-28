import { useContext } from 'react'
import { transactionContext } from '../transactionContext'

const useTransactionContext = () => {
  const context = useContext(transactionContext)

  return context
}

export default useTransactionContext
