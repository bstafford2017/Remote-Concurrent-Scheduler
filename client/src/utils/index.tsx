export function formatDate(date: string): string {
  const unformatted: string[] = date.split('T')[0].split('-')
  return unformatted[1] + '-' + unformatted[2] + '-' + unformatted[0]
}

export function timeConversion(time: string): string {
  const splitTime: string[] = time.split(':')
  const hours: number = parseInt(splitTime[0]) % 12 || 12
  const minutes: number = parseInt(splitTime[1])
  const AmOrPm: string = hours >= 12 ? 'pm' : 'am'
  return hours + ':' + minutes + AmOrPm
}

export function weekdaysToString(weekdays: string): string {
  return weekdays.split('').reduce((total, next, index): any => {
    total += getWeekDayString(index)
  })
}

function getWeekDayString(index: number): string {
  switch (index) {
    case 0:
      return 'Sun '
    case 1:
      return 'Mon '
    case 2:
      return 'Tues '
    case 3:
      return 'Wed '
    case 4:
      return 'Thur '
    case 5:
      return 'Fri '
    case 6:
      return 'Sat '
    default:
      return ''
  }
}
