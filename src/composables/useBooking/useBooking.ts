import { useLocalStorage } from '@vueuse/core'

export const useBooking = () => {
  const store = useLocalStorage('booking', '')
}
