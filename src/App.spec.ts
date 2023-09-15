import App from './App.vue'
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest'
import { LocalStorageMock } from './mocks'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useAppStore } from './stores'
import type { ItemStorage } from './models'

describe('App', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock })
  })
  afterEach(() => {
    // LocalStorageMock state reset
    LocalStorageMock.setItem('items', JSON.stringify({}))
    vi.clearAllMocks()
  })
  it('init - should not call appStore.setItemStorage if localStorage does not have "items"', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const appStore = useAppStore()

    expect(appStore.setItemStorage).not.toHaveBeenCalled()
  })
  it('init - should call appStore.setItemStorage with data from localStorage items if localStorage has "items"', () => {
    const newData: ItemStorage = {
      '5': { color: 'test', quantity: 5 }
    }
    LocalStorageMock.setItem('items', JSON.stringify(newData))

    const wrapper = shallowMount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const appStore = useAppStore()

    expect(appStore.setItemStorage).toHaveBeenCalled()
    expect(appStore.setItemStorage).toHaveBeenCalledWith(newData)
  })
})
