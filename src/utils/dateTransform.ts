export const transformDate = (date: Date | string) => {
  return new Date(date)
    .toLocaleDateString('en', dateConfig)
}

const dateConfig: Intl.DateTimeFormatOptions = {day: '2-digit', month: 'short', year: 'numeric'}
