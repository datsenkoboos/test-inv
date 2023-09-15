import { shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import ItemIcon from './ItemIcon.vue'
import { describe, expect, it } from 'vitest'

const itemIconSelector = '[data-testid=item-icon]'
const itemIconMainPartSelector = '[data-testid=item-icon-main]'
const itemIconBlurredPartSelector = '[data-testid=item-icon-blurred]'

const defaultMountOptions: ComponentMountingOptions<typeof ItemIcon> = {
  props: {
    color: 'blue',
    size: 20
  }
}

describe('ItemIcon', () => {
  describe('props', () => {
    it('color - should render main icon part with set background color', () => {
      const wrapper = shallowMount(ItemIcon, defaultMountOptions)
      expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(
        `background-color: ${defaultMountOptions.props!.color}`
      )
    })
    it('size - should render icon and its parts with set size', () => {
      const wrapper = shallowMount(ItemIcon, defaultMountOptions)
      expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(
        `width: ${defaultMountOptions.props!.size}px`
      )
      expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(
        `height: ${defaultMountOptions.props!.size}px`
      )
      expect(wrapper.find(itemIconBlurredPartSelector).attributes('style')).toContain(
        `width: ${defaultMountOptions.props!.size}px`
      )
      expect(wrapper.find(itemIconBlurredPartSelector).attributes('style')).toContain(
        `height: ${defaultMountOptions.props!.size}px`
      )
      expect(wrapper.find(itemIconSelector).attributes('style')).toContain(
        `width: ${1.1 * defaultMountOptions.props!.size}px`
      )
      expect(wrapper.find(itemIconSelector).attributes('style')).toContain(
        `height: ${1.1 * defaultMountOptions.props!.size}px`
      )
    })
  })
})
