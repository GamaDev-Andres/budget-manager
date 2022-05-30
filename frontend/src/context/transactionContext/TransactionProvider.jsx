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

  const createCategory = useCallback(
    async (name) => {
      try {
        const urlPeticion = url + '/api/category'
        const response = await customFetch(urlPeticion, 'POST', { name })
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setCategories([...categories, response.category])
      } catch (error) {
        console.log(error)
      }
    },
    [transactions, categories]
  )
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
        if (
          response.transaction.category &&
          !categories.some(
            (category) =>
              category.category_id ===
              response.transaction.category?.category_id
          )
        ) {
          setCategories([...categories, response.transaction.category])
        }
      } catch (error) {
        console.log(error)
      }
    },
    [transactions, categories]
  )
  const updateTransaction = useCallback(
    async (dataTransaction, id) => {
      try {
        const urlPeticion = url + '/api/transaction/' + id
        dataTransaction.value = +dataTransaction.value
        const response = await customFetch(urlPeticion, 'PUT', dataTransaction)
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setTransactions(
          transactions.map((transaction) =>
            transaction.transaction_id === id
              ? response.transaction
              : transaction
          )
        )
      } catch (error) {
        console.log(error)
      }
    },
    [transactions]
  )
  const deleteCategory = useCallback(
    async (id) => {
      try {
        const urlPeticion = url + '/api/category/' + id
        const response = await customFetch(urlPeticion, 'DELETE')
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setCategories(
          categories.filter((category) => category.category_id !== id)
        )
      } catch (error) {
        console.log(error)
      }
    },
    [categories]
  )
  const deleteTransaction = useCallback(
    async (id) => {
      try {
        const urlPeticion = url + '/api/transaction/' + id
        const response = await customFetch(urlPeticion, 'DELETE')
        if (!response.ok) {
          console.error(response.errors[0]?.msg)
          return { error: response.errors[0]?.msg }
        }
        setTransactions(
          transactions.filter(
            (transaction) => transaction.transaction_id !== id
          )
        )
      } catch (error) {
        console.log(error)
      }
    },
    [transactions]
  )

  return (
    <transactionContext.Provider
      value={{
        originalTransactions: transactions,
        transactions: transactionsFormatted,
        createTransaction,
        updateTransaction,
        deleteTransaction,
        deleteCategory,
        createCategory,
        categories
      }}
    >
      {children}
    </transactionContext.Provider>
  )
}

export default TransactionProvider
