<template>
  <div class="wrapper wrapper-vert">
    <div class="wrapper">
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

onBeforeMount(() => {
  appStore.init()
})
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 24px;
  &-vert {
    flex-direction: column;
  }
}
</style>
