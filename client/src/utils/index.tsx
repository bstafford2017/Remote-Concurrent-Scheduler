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

export function getWeekDay(index: string): string {
  return index.split('').reduce((total: string, next: string): any => {
    switch (next) {
      case '0':
        total += 'Sun '
      case '1':
        total += 'Mon '
      case '2':
        total += 'Tues '
      case '3':
        total += 'Wed '
      case '4':
        total += 'Thur '
      case '5':
        total += 'Fri '
      case '6':
        total += 'Sat '
      default:
        total += ''
    }
  })
}
