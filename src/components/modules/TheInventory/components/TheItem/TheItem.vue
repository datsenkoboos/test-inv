<template>
  <div class="item" data-testid="the-item" draggable="true">
    <ItemIcon :color="item.color" :size="55" data-testid="item-icon" />
    <div class="item-quantity" data-testid="item-quantity">
      {{ item.quantity }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Item } from '@/models'
import { ItemIcon } from '@/components/ui'

const props = defineProps<{
  item: Item
}>()
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  &-quantity {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 18%;
    height: 18%;
    border-top-left-radius: 6px;
    border-left: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
  }
  &:active {
    transform: scale(1.05);
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
  }
}
</style>
