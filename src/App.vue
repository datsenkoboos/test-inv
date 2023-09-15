<template>
  <div class="wrapper">
    <div class="wrapper-horizontal">
      <SideSection />
      <TheInventory />
    </div>
    <BottomSection />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { SideSection, BottomSection } from './components'
import { TheInventory } from './components/modules'
import type { ItemStorage } from './models'
import { useUiStore } from './stores'
import dataInit from './dataInit'

const uiStore = useUiStore()

function init() {
  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(dataInit))
    const firstKey = Object.keys(dataInit)[0]
    uiStore.setSelectedItem(dataInit[firstKey]!)
  } else {
    const data: ItemStorage = JSON.parse(localStorage.getItem('items')!)
    const firstKey = Object.keys(data)[0]
    uiStore.setSelectedItem(data[firstKey]!)
  }
}

onBeforeMount(() => {
  init()
})
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.wrapper-horizontal {
  display: flex;
  gap: 24px;
}
</style>
