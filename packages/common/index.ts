import { format } from 'date-fns'

export const name = 'common123'
export function formatDate(date: Date) {
  return format(date, 'yyyy-MM-dd HH:mm')
}