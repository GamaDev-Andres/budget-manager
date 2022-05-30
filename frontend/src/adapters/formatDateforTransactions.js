export const formatDateforTransactions = (transactionsDb) => {
  if (transactionsDb?.length === 0) {
    return transactionsDb
  }
  return transactionsDb.map(transaction => ({
    ...transaction, date: new Intl.DateTimeFormat("es-CO", {
      year: 'numeric', month: '2-digit', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles'
    }).format(new Date(transaction.date))
  }))
}