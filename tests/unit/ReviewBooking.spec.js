import flushPromises from 'flush-promises'
import Datepicker from 'vuejs-datepicker'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import store from '@/store'
import router from '@/router'
import ReviewBooking from '@/views/ReviewBooking/ReviewBooking.vue'

const $t = () => ({})

const localVue = createLocalVue()
localVue.use(VueRouter)

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

const createWrapper = () => {
  return mount(ReviewBooking, {
    localVue,
    store,
    mocks: { $t },
    router
  })
}

describe('ReviewBooking', () => {
  it('should render ReviewBooking correctly ', async () => {
    const wrapper = createWrapper()
    await flushPromises()
    expect(wrapper.find('p').text()).toBe('John Doe reservation')
  })
})
