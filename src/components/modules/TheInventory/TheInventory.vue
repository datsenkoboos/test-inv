<template>
  <main class="inventory">
    <ItemEdit />
    <div class="inventory-cells">
      <div
        v-for="(item, index) in Array(25)"
        :key="index"
        class="inventory-cell"
        @drop="onDrop($event, index)"
        @dragenter.prevent
        @dragover.prevent
        @click="selectCell(index)"
        :data-testid="`cell-${index}`"
      >
        <TheItem
          v-if="appStore.items[index]"
          :item="appStore.items[index]!"
          @dragstart="onDrag($event, index)"
          :data-testid="`item-${index}`"
        />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { ItemStorage } from '@/models'
import { TheItem, ItemEdit } from './components'
import { useAppStore } from '@/stores'

const appStore = useAppStore()

function onDrop(event: DragEvent, index: number) {
  const prevIndex = event.dataTransfer!.getData('prevIndex')
  const data: ItemStorage = JSON.parse(JSON.stringify(appStore.items))
  const item = data[prevIndex]
  delete data[prevIndex]
  data[index] = item
  appStore.setItemStorage(data)
}
function onDrag(event: DragEvent, index: number) {
  appStore.hideModal()
  event.dataTransfer!.dropEffect = 'move'
  event.dataTransfer!.effectAllowed = 'move'
  event.dataTransfer!.setData('prevIndex', index.toString())
}
function selectCell(index: number) {
  if (appStore.items[index]) {
    appStore.editItem(index)
  }
}
</script>
<style lang="scss">
.inventory {
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius);
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
  &-cells {
    display: grid;
    grid-template-columns: repeat(5, 105px);
    grid-template-rows: repeat(5, 100px);
  }
  &-cell {
    border-right: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    &:nth-child(5) {
      border-top-right-radius: var(--border-radius);
    }
    &:nth-child(21) {
      border-bottom-left-radius: var(--border-radius);
    }
    &:nth-child(25) {
      border-bottom-right-radius: var(--border-radius);
    }
  }
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
