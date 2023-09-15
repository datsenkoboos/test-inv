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
import { onBeforeMount } from 'vue';
import { SideSection, BottomSection } from './components'
import { TheInventory } from './components/modules'
import type { Item } from './models';

onBeforeMount(() => {
  if (!localStorage.getItem('items')) {
    const initialData: { [key: number]: null | Item } = {
      0: { color: 'green', quantity: 4 },
      1: { color: 'orange', quantity: 2 },
      2: { color: 'purple', quantity: 5 },
    }
    localStorage.setItem('items', JSON.stringify(initialData))
  }
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
