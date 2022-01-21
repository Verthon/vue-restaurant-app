import Button from '@/components/Button/Button.vue'

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['is-small', 'is-medium', 'is-large']
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'primary', 'danger']
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props">{{label}}</Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
  outlined: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true
}

export const ButtonLoading = Template.bind({})
ButtonLoading.args = {
  label: 'Button',
  loading: true
}
