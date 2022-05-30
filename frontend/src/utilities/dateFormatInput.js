import { dateFormat, timeFormat } from './dateFormat'

export const dateFormatInput = (date) => {
  const yearMonthDay = dateFormat(date).split(',')[0]
  const hoursMinutes = timeFormat(date)

  return yearMonthDay + 'T' + hoursMinutes
}
