import { defineComponent } from '@vue/composition-api'
import { useQueryProvider } from 'vue-query'
import { VueQueryDevTools } from 'vue-query/devtools'

export default defineComponent({
  name: 'App',
  components: { VueQueryDevTools },
  setup () {
    useQueryProvider()
  }
})
