import App from './App.vue'
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest'
import { LocalStorageMock } from './mocks'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import dataInit from './dataInit'
import { useUiStore } from './stores'
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
  it('init - should set LocalStorage "items" property to dataInit, should call uiStore.setSelectedItem with first dataInit item if localStorage does not have "items"', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const uiStore = useUiStore()
    expect(LocalStorageMock.setItem).toHaveBeenCalled()
    expect(LocalStorageMock.setItem).toHaveBeenCalledWith('items', JSON.stringify(dataInit))

    expect(uiStore.setSelectedItem).toHaveBeenCalled()
    expect(uiStore.setSelectedItem).toHaveBeenCalledWith(dataInit['0'])
  })
  it('init - should not set LocalStorage "items" property, should call uiStore.setSelectedItem with first localStorage item if localStorage has "items"', () => {
    const newData: ItemStorage = {
      '5': { color: 'test', quantity: 5 }
    }

    LocalStorageMock.setItem('items', JSON.stringify(newData))
    vi.clearAllMocks()

    const wrapper = shallowMount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const uiStore = useUiStore()
    expect(LocalStorageMock.setItem).not.toHaveBeenCalled()

    expect(uiStore.setSelectedItem).toHaveBeenCalled()
    expect(uiStore.setSelectedItem).toHaveBeenCalledWith(newData['5'])
  })
})
