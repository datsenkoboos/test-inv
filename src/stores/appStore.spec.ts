import useStore from './appStore'
import { setActivePinia, createPinia } from 'pinia'
import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest'
import dataInit from '@/dataInit'
import { LocalStorageMock } from '@/mocks'

const testIndex = 7

describe('UI Store', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock })
  })
  afterEach(() => {
    // LocalStorageMock state reset
    LocalStorageMock.setItem('items', JSON.stringify({}))
    vi.clearAllMocks()
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
    test('setSelectedIndex - should set store.selectedIndex to passed value', () => {
      const store = useStore()

      store.setSelectedIndex(testIndex)

      expect(store.selectedIndex).toBe(testIndex)
    })
    test('setItemStorage - should set store.items and localStorage.items to passed value', () => {
      const newStorage = {
        5: { color: 'green', quantity: 1 }
      }
      const store = useStore()

      store.setItemStorage(newStorage)

      expect(store.items).toStrictEqual(newStorage)
      expect(LocalStorageMock.setItem).toHaveBeenCalled()
      expect(LocalStorageMock.setItem).toHaveBeenCalledWith('items', JSON.stringify(newStorage))
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
