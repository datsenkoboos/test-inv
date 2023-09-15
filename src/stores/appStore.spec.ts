import { ItemMock } from '@/mocks'
import useStore from './appStore'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import dataInit from '@/dataInit'

const testIndex = 7

describe('UI Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('state', () => {
    test('modal - should be false', () => {
      const store = useStore()
      expect(store.modal).toBe(false)
    })
    test('selectedIndex - should be null', () => {
      const store = useStore()
      expect(store.selectedIndex).toBe(null)
    })
    test('items - should be dataInit', () => {
      const store = useStore()
      expect(store.items).toStrictEqual(dataInit)
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
    test('setSelectedIndex - should set store.selectedCell to passed value', () => {
      const store = useStore()

      store.setSelectedIndex(testIndex)

      expect(store.selectedIndex).toBe(testIndex)
    })
    test('setItemStorage - should set store.items to passed value', () => {
      const newStorage = {
        5: { color: 'green', quantity: 1 }
      }
      const store = useStore()

      store.setItemStorage(newStorage)

      expect(store.items).toStrictEqual(newStorage)
    })
    test('editItem - should call showModal and setSelectedIndex with passed value', () => {
      const store = useStore()

      vi.spyOn(store, 'showModal')
      vi.spyOn(store, 'setSelectedIndex')

      store.editItem(testIndex)

      expect(store.showModal).toHaveBeenCalled()
      expect(store.setSelectedIndex).toHaveBeenCalled()
      expect(store.setSelectedIndex).toHaveBeenCalledWith(testIndex)
    })
  })
})
