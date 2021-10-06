import { render } from '@testing-library/vue'

import Button from '@/components/Button/Button.vue'

const createWrapper = () => {
  return render(Button)
}

describe('Button', () => {
  it('should render button correctly ', async () => {
    const wrapper = createWrapper()
    wrapper.debug()
    expect(wrapper.container.className).toBe('btn')
  })
})
