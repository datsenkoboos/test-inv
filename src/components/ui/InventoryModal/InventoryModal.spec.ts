import { shallowMount } from '@vue/test-utils'
import InventoryModal from './InventoryModal.vue'
import { describe, it, expect } from 'vitest'

const inventoryModalSelector = '[data-testid=inventory-modal]'
const closeButtonSelector = '[data-testid=close-button]'

describe('InventoryModal', () => {
  describe('props', () => {
    it('show - should render invisible when set to false', () => {
      const wrapper = shallowMount(InventoryModal, {
        props: {
          show: false
        }
      })
      expect(wrapper.get(inventoryModalSelector).isVisible()).toBe(false)
    })
    it('show - should render visible when set to true', () => {
      const wrapper = shallowMount(InventoryModal, {
        props: {
          show: true
        }
      })
      expect(wrapper.get(inventoryModalSelector).isVisible()).toBe(true)
    })
  })
  describe('user interactions', () => {
    it('close button click - should emit close event', async () => {
      const wrapper = shallowMount(InventoryModal, {
        props: {
          show: true
        }
      })
      await wrapper.get(closeButtonSelector).trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })
  })
})
