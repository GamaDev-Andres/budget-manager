import { useCallback, useState } from 'react'
import { customFetch } from '../../utilities/customFetch'
import { transactionContext } from './transactionContext'

// eslint-disable-next-line react/prop-types
const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(null)
  const url = import.meta.env.VITE_URL_SERVER

  const createTransaction = useCallback(async (dataTransaction) => {
    try {
      const urlPeticion = url + '/api/transaction'
      const response = await customFetch(urlPeticion, 'POST', dataTransaction)
      if (!response.ok) {
        return { error: response.errors[0]?.msg }
      }
      setTransactions(response.transactions)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <transactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </transactionContext.Provider>
  )
}

export default TransactionProvider
