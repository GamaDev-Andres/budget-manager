import { useCallback, useEffect, useMemo, useState } from 'react'
import { customFetch } from '../../utilities/customFetch'
import { formatAndSortTransactions } from '../../utilities/formatAndSortTransactions'
import { transactionContext } from './transactionContext'

// eslint-disable-next-line react/prop-types
const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(null)
  const [categories, setCategories] = useState(null)
  const url = import.meta.env.VITE_URL_SERVER
  const transactionsFormatted = useMemo(
    () => (transactions ? formatAndSortTransactions(transactions) : null),
    [transactions]
  )
  useEffect(() => {
    async function getTransactions() {
      try {
        const urlPeticion = url + '/api/transaction'
        const response = await customFetch(urlPeticion, 'GET')
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setTransactions(response.transactions)
      } catch (error) {
        console.log(error)
      }
    }
    async function getCategories() {
      try {
        const urlPeticion = url + '/api/category'
        const response = await customFetch(urlPeticion, 'GET')
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setCategories(response.categories)
      } catch (error) {
        console.log(error)
      }
    }
    getTransactions()
    getCategories()
  }, [])

  const createTransaction = useCallback(
    async (dataTransaction) => {
      try {
        const urlPeticion = url + '/api/transaction'
        dataTransaction.value = +dataTransaction.value
        const response = await customFetch(urlPeticion, 'POST', dataTransaction)
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setTransactions([...transactions, response.transaction])
      } catch (error) {
        console.log(error)
      }
    },
    [transactions]
  )

  return (
    <transactionContext.Provider
      value={{
        transactions: transactionsFormatted,
        createTransaction,
        categories
      }}
    >
      {children}
    </transactionContext.Provider>
  )
}

export default TransactionProvider
