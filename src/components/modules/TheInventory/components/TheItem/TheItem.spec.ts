import TheItem from './TheItem.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import { ItemMock } from '@/mocks'
import { createTestingPinia } from '@pinia/testing'
import { useAppStore } from '@/stores'

const defaultMountOptions: ComponentMountingOptions<typeof TheItem> = {
  props: {
    item: ItemMock
  },
  global: {
    plugins: [createTestingPinia()]
  }
}

const theItemSelector = '[data-testid=the-item]'
const itemIconSelector = '[data-testid=item-icon]'
const itemQuantitySelector = '[data-testid=item-quantity]'

describe('TheItem', () => {
  describe('props', () => {
    it('item - should render itemIcon with item.color, should render set item.quantity', () => {
      const wrapper = shallowMount(TheItem, defaultMountOptions)
      expect(wrapper.get(itemIconSelector).attributes('color')).toBe(
        defaultMountOptions.props!.item.color
      )
      expect(wrapper.get(itemQuantitySelector).text()).toBe(
        defaultMountOptions.props!.item.quantity.toString()
      )
    })
  })
})
