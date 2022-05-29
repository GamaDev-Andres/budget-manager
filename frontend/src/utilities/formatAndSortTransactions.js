import { formatDateforTransactions } from '../adapters/formatDateforTransactions'

export const sortTransactions = (transactions) => {
  return transactions.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return dateB - dateA
  })
}
export const formatAndSortTransactions = (transactions) => {
  return formatDateforTransactions(sortTransactions(transactions))
}