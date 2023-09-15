import { ItemMock } from '@/mocks'
import useStore from './uiStore'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, test, vi } from 'vitest'

describe('UI Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('state', () => {
    test('modal - should be false', () => {
      const store = useStore()
      expect(store.modal).toBe(false)
    })
    test('selectedItem - should be empty object', () => {
      const store = useStore()
      expect(store.selectedItem).toStrictEqual({})
    })
  })
  describe('actions', () => {
    test('showModal - should set modal to true', () => {
      const store = useStore()

      store.showModal()

      expect(store.modal).toBe(true)
    })
    test('hideModal - should set modal to false', () => {
      const store = useStore()

      store.hideModal()

      expect(store.modal).toBe(false)
    })
    test('setSelectedItem - should set selectedItem to passed value', () => {
      const store = useStore()

      store.setSelectedItem(ItemMock)

      expect(store.selectedItem).toStrictEqual(ItemMock)
    })
    test('editItem - should call showModal and setSelectedItem with passed value', () => {
      const store = useStore()

      vi.spyOn(store, 'showModal')
      vi.spyOn(store, 'setSelectedItem')

      store.editItem(ItemMock)

      expect(store.showModal).toHaveBeenCalled()
      expect(store.setSelectedItem).toHaveBeenCalled()
      expect(store.setSelectedItem).toHaveBeenCalledWith(ItemMock)
    })
  })
})
