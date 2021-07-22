import flushPromises from 'flush-promises'
import Datepicker from 'vuejs-datepicker'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from '@/router'
import BookTable from '@/views/BookTable/BookTable.vue'

const $t = () => ({})

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

jest.mock('@/firestore/firebase', () => ({
  __esModule: true,
  default: {
    apps: [],
    initializeApp: () => ({}),
    auth: () => ({})
  }
}))

global.Date = new Proxy(Date, {
  construct (target) {
    return new target(2019, 8, 12, 0, 0)
  }
})

const actions = {
  addBooking: jest.fn()
}

const createWrapper = () => {
  return mount(BookTable, {
    localVue,
    store: new Vuex.Store({
      modules: {
        booking: {
          state: {
            currentBooking: {
              name: '',
              email: '',
              date: '',
              guests: 1,
              confirmed: false,
              createdAt: ''
            }
          },
          actions,
          namespaced: true
        }
      }
    }),
    mocks: { $t },
    router
  })
}

describe('BookTable', () => {
  it('should render BookTable correctly ', async () => {
    const wrapper = createWrapper()
    await flushPromises()
    expect(wrapper.find('h1').text()).toBe('Make a reservation')
  })

  it('should move to the next step once user fill correct data', async () => {
    const wrapper = createWrapper()
    await flushPromises()
    wrapper.find('[name="name"]').setValue('Mariusz Kowalsky')
    await flushPromises()
    wrapper.find('[name="guests"]').setValue('3')
    await flushPromises()
    wrapper.find('[name="email"]').setValue('kowalsky@test.pl')
    await flushPromises()
    wrapper.findComponent(Datepicker).vm.$emit('input', new Date())
    await flushPromises()
    await wrapper.find('#booking-form').trigger('submit')
    await flushPromises()
    expect(wrapper.vm.$route.path).toBe('/review-booking')
  })
})
