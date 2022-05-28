export const formatDateforTransactions = (transactionsDb) => {
  if (transactionsDb?.length === 0) {
    return transactionsDb
  }
  return transactionsDb.map(transaction => ({
    ...transaction, createdAt: new Date(transaction.createdAt).toLocaleString()
  }))
}