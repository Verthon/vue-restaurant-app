import { formatPrice } from '@/utils/formatPrice'
export default {
  props: {
    name: String,
    price: Number,
    description: String
  },
  computed: {
    formattedPrice () {
      return formatPrice(this.price)
    }
  }
}
