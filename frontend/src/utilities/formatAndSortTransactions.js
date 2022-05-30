import { formatDateforTransactions } from '../adapters/formatDateforTransactions'

export const sortTransactions = (transactions) => {
  return transactions.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}
export const formatAndSortTransactions = (transactions, withPlus2) => {
  return formatDateforTransactions(sortTransactions(transactions), withPlus2)
}