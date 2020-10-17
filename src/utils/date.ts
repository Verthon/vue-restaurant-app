export const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

export const splitDate = (date: string) => {
  let formatedDate = ''
  const temp = date.split(',')
  formatedDate = temp[1]
  return formatedDate
}

export const splitTime = (date: string) => {
  let formatedTime = ''
  const temp = date.split(',')
  formatedTime = temp[3]
  return formatedTime
}

export const convertToDate = (date: string | number | Date) => {
  if (date) {
    return new Date(date)
  }
  return new Date()
}
