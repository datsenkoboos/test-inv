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
  it('init - should call appStore.init', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const store = useAppStore()
    expect(store.init).toHaveBeenCalled()
  })
})
