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
import { useAppStore } from './stores'

const appStore = useAppStore()

function init() {
  if (localStorage.getItem('items')) {
    appStore.setItemStorage(JSON.parse(localStorage.getItem('items')!))
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
