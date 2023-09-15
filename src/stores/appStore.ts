import dataInit from '@/dataInit'
import type { ItemStorage } from '@/models'
import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: (): {
    modal: boolean
    items: ItemStorage
    selectedIndex: number | null
  } => {
    return {
      modal: false,
      items: dataInit,
      selectedIndex: null
    }
  },
  actions: {
    showModal(): void {
      this.modal = true
    },
    hideModal(): void {
      this.modal = false
    },
    setItemStorage(data: ItemStorage): void {
      this.items = {}
      Object.assign(this.items, data)
      localStorage.setItem('items', JSON.stringify(data))
    },
    setSelectedIndex(index: number | null): void {
      this.selectedIndex = index
    },
    editItem(index: number): void {
      this.setSelectedIndex(index)
      this.showModal()
    }
  }
})

export default useAppStore
