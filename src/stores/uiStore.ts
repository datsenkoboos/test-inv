import type { Item } from '@/models'
import { defineStore } from 'pinia'

const useUiStore = defineStore('ui', {
  state: (): {
    modal: boolean
    selectedItem: Item
  } => {
    return {
      modal: false,
      selectedItem: {} as Item
    }
  },
  actions: {
    showModal(): void {
      this.modal = true
    },
    hideModal(): void {
      this.modal = false
    },
    setSelectedItem(item: Item): void {
      this.selectedItem = item
    },
    editItem(item: Item): void {
      this.showModal()
      this.setSelectedItem(item)
    }
  }
})

export default useUiStore
