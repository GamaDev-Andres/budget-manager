export const formatDateforTransactions = (transactionsDb, plus2) => {
  if (transactionsDb?.length === 0) {
    return transactionsDb
  }
  const options = {
    year: 'numeric', month: '2-digit', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles'
  }
  if (plus2) {
    delete options.timeZone
  }
  return transactionsDb.map(transaction => ({
    ...transaction, date: new Intl.DateTimeFormat("es-CO", options).format(new Date(transaction.date))
  }))
}