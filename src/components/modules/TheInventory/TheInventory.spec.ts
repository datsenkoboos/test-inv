import TheInventoryVue from './TheInventory.vue'
import { describe, it, expect, beforeAll, vi, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import dataInit from '@/dataInit'
import { createPinia, setActivePinia } from 'pinia'
import { useAppStore } from '@/stores'

describe('TheInventory', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })
  afterEach(() => {
    vi.clearAllMocks()
  })
  describe('state', () => {
    it('appStore.items - should render items correctly', () => {
      const wrapper = shallowMount(TheInventoryVue)
      // should render items at indexes present in appStore.items
      for (const index of Object.keys(dataInit)) {
        expect(wrapper.find(`[data-testid=item-${index}]`).exists()).toBe(true)
      }
      // should not render items at indexes not present in appStore.items
      expect(wrapper.find(`[data-testid=item-5]`).exists()).toBe(false)
    })
  })
  describe('user interactions', () => {
    it('empty cell click - should not call appStore.editItem', async () => {
      const wrapper = shallowMount(TheInventoryVue)
      const appStore = useAppStore()
      vi.spyOn(appStore, 'editItem')

      await wrapper.get('[data-testid=cell-15]').trigger('click')

      expect(appStore.editItem).not.toHaveBeenCalled()
    })
    it('filled cell click - should call appStore.editItem with cell index', async () => {
      const filledIndex = 0
      const wrapper = shallowMount(TheInventoryVue)
      const appStore = useAppStore()
      vi.spyOn(appStore, 'editItem')

      await wrapper.get(`[data-testid=cell-${filledIndex}]`).trigger('click')

      expect(appStore.editItem).toHaveBeenCalled()
      expect(appStore.editItem).toHaveBeenCalledWith(filledIndex)
    })
    it('item dragStart - should call appStore.hideModal', async () => {
      const filledIndex = 0
      const wrapper = shallowMount(TheInventoryVue)
      const appStore = useAppStore()
      const eventMock = { dataTransfer: { setData: vi.fn() } }
      vi.spyOn(appStore, 'hideModal')

      await wrapper.get(`[data-testid=item-${filledIndex}]`).trigger('dragstart', eventMock)

      expect(appStore.hideModal).toHaveBeenCalled()
    })
  })
})
