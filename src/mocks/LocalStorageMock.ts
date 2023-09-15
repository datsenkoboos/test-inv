import { vi } from 'vitest'

const LocalStorageMock: Omit<Storage, 'length' | 'clear' | 'key'> = (() => {
  const storage: { [key: string]: string } = {}
  return {
    getItem: vi.fn((key: string) => storage[key]),
    setItem: vi.fn((key: string, value: string) => (storage[key] = value)),
    removeItem: vi.fn((key: string) => delete storage[key])
  }
})()
export default LocalStorageMock
