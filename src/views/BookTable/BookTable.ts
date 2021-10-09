import Navbar from '@/components/Navbar/Navbar.vue'
import Form from '@/components/Forms/Form/Form.vue'

export default {
  data () {
    return {
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ],
      location: {
        address: 'test',
        city: 'Montreal',
        province: 'Quebec',
        code: 'test'
      },
      hours: {
        weekdays: {
          days: 'Mon-Fri',
          time: '12:00'
        },
        weekend: {
          days: 'Mon-Fri',
          time: '12:00'
        }
      },
      contact: {
        phone: '+1 555 555 555'
      }
    }
  },
  components: {
    Navbar,
    Form
  }
}
