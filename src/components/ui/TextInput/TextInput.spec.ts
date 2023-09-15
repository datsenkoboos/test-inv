import { shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import TextInput from './TextInput.vue'
import { describe, it, expect } from 'vitest'

const defaultMountOptions: ComponentMountingOptions<typeof TextInput> = {
  props: {
    name: 'testName',
    placeholder: 'testPlaceholder',
    value: 'testValue'
  }
}

describe('TextInput', () => {
  describe('props', () => {
    it('name - should render input with set name', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions)
      expect(wrapper.get('input').attributes('name')).toBe(defaultMountOptions.props!.name)
    })
    it('placeholder - should render input with set placeholder', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions)
      expect(wrapper.get('input').attributes('placeholder')).toBe(
        defaultMountOptions.props!.placeholder
      )
    })
    it('value - should render input with set value', () => {
      const wrapper = shallowMount(TextInput, defaultMountOptions)
      expect(wrapper.get('input').element.value).toBe(defaultMountOptions.props!.value)
    })
  })
  describe('user interactions', () => {
    it('input - should emit new value', async () => {
      const testValue = 'testValue'
      const wrapper = shallowMount(TextInput, defaultMountOptions)

      await wrapper.get('input').setValue(testValue)

      expect(wrapper.emitted()).toHaveProperty('update:value')
      expect(wrapper.emitted('update:value')).toHaveLength(1)
      expect(wrapper.emitted('update:value')![0][0]).toBe(testValue)
    })
  })
})
