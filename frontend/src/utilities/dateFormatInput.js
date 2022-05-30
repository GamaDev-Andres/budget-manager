import { dateFormat, timeFormat } from './dateFormat'

export const dateFormatInput = (date) => {
  const yearMonthDay = dateFormat(date).split(',')[0]
  const hoursMinutes = timeFormat(date)
  const hoursMinutesArr = hoursMinutes.split(":")
  if (Number(hoursMinutesArr[0]) < 10) {
    hoursMinutesArr[0] = "0" + hoursMinutesArr[0]
  }
  return yearMonthDay + 'T' + hoursMinutesArr.join(":")
}
