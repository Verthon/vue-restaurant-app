import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'

import Button from '@/components/Button/Button.vue'

const createWrapper = () => {
  return mount(Button)
}

describe('Button', () => {
  it('should render button correctly ', async () => {
    const wrapper = createWrapper()
    await flushPromises()
    expect(wrapper.element.className).toBe('btn')
  })
})
