import { VueWrapper, mount, shallowMount } from '@vue/test-utils'
import ItemEdit from './ItemEdit.vue'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useAppStore } from '@/stores'

const quantityModalSelector = '[data-testid=quantity-modal]'
const inventoryModalSelector = '[data-testid=inv-modal]'
const deleteButtonSelector = '[data-testid=delete-button]'
const cancelButtonSelector = '[data-testid=cancel-button]'
const submitButtonSelector = '[data-testid=submit-button]'

describe('ItemEdit', () => {
  describe('state', () => {
    it('appStore.modal - should render InventoryModal with set show attr', () => {
      const testModalValue = true
      const wrapper = shallowMount(ItemEdit, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                app: {
                  modal: testModalValue
                }
              }
            })
          ],
          renderStubDefaultSlot: true
        }
      })
      expect(wrapper.get(inventoryModalSelector).attributes('show')).toBe(testModalValue.toString())
    })
    it('should render quantity modal invisible by default', () => {
      const wrapper = shallowMount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      expect(wrapper.get(quantityModalSelector).isVisible()).toBe(false)
    })
  })
  describe('user interactions', () => {
    it('InventoryModal close event - should call appStore.hideModal', async () => {
      const wrapper = shallowMount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      const appStore = useAppStore()
      vi.spyOn(appStore, 'hideModal')

      await (wrapper.getComponent(inventoryModalSelector) as VueWrapper).vm.$emit('close')

      expect(appStore.hideModal).toHaveBeenCalled()
    })
    it('delete button click - should open quantity modal', async () => {
      const wrapper = shallowMount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })

      await wrapper.get(deleteButtonSelector).trigger('click')

      expect(wrapper.get(quantityModalSelector).isVisible()).toBe(true)
    })
    it('cancel button click - should close quantity modal', async () => {
      const wrapper = shallowMount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      await wrapper.get(deleteButtonSelector).trigger('click')

      await wrapper.get(cancelButtonSelector).trigger('click')

      expect(wrapper.get(quantityModalSelector).isVisible()).toBe(false)
    })
    it('submit button click - should call appStore.hideModal and appStore.setItemStorage', async () => {
      const wrapper = shallowMount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      const appStore = useAppStore()
      appStore.selectedIndex = 0
      vi.spyOn(appStore, 'hideModal')
      vi.spyOn(appStore, 'setItemStorage')

      await wrapper.get(deleteButtonSelector).trigger('click')

      await wrapper.get(submitButtonSelector).trigger('click')

      expect(appStore.hideModal).toHaveBeenCalled()
      expect(appStore.hideModal).toHaveBeenCalled()
    })
    it('quantity input < item quantity + submit button click - should call appStore.setItemStorage with valid data', async () => {
      const typedQuantity = 1
      const wrapper = mount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      const appStore = useAppStore()
      appStore.selectedIndex = 0
      const prevData = JSON.parse(JSON.stringify(appStore.items))
      vi.spyOn(appStore, 'setItemStorage')

      await wrapper.get(deleteButtonSelector).trigger('click')
      await wrapper.get('input').setValue(typedQuantity)
      await wrapper.get(submitButtonSelector).trigger('click')

      expect(appStore.setItemStorage).toHaveBeenCalled()
      expect(appStore.setItemStorage).toHaveBeenCalledWith({
        ...prevData,
        0: { color: prevData[0].color, quantity: prevData[0].quantity - typedQuantity }
      })
    })
    it('quantity input >= item quantity + submit button click - should call appStore.setItemStorage with valid data', async () => {
      const wrapper = mount(ItemEdit, {
        global: {
          renderStubDefaultSlot: true
        }
      })
      const appStore = useAppStore()
      appStore.selectedIndex = 0
      const prevData = JSON.parse(JSON.stringify(appStore.items))
      vi.spyOn(appStore, 'setItemStorage')

      await wrapper.get(deleteButtonSelector).trigger('click')
      await wrapper.get('input').setValue(999)
      await wrapper.get(submitButtonSelector).trigger('click')

      const copyWithoutFirstItem = JSON.parse(JSON.stringify(prevData))
      delete copyWithoutFirstItem[0]

      expect(appStore.setItemStorage).toHaveBeenCalled()
      expect(appStore.setItemStorage).toHaveBeenCalledWith(copyWithoutFirstItem)
    })
  })
})
