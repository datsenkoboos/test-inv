import TheItem from './TheItem.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import type { Item } from '@/models'
import { createTestingPinia } from '@pinia/testing'
import { useUiStore } from '@/stores'

const ItemMock: Item = {
  color: 'color',
  quantity: 1
}
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
  describe('user interactions', () => {
    it('click - should call uiStore.editItem with props.item', async () => {
      const wrapper = shallowMount(TheItem, defaultMountOptions)
      const uiStore = useUiStore()

      await wrapper.get(theItemSelector).trigger('click')

      expect(uiStore.editItem).toHaveBeenCalled()
      expect(uiStore.editItem).toHaveBeenCalledWith(defaultMountOptions.props!.item)
    })
  })
})
