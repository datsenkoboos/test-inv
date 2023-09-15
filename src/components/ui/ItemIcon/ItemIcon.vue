<template>
  <div
    class="icon"
    data-testid="item-icon"
    :style="{ width: (1.1 * size).toString() + 'px', height: (1.1 * size).toString() + 'px' }"
  >
    <div
      :style="{
        width: size.toString() + 'px',
        height: size.toString() + 'px',
        backgroundColor: color
      }"
      data-testid="item-icon-main"
    >
      &nbsp;
    </div>
    <div
      class="icon-blurred"
      :style="{ width: size.toString() + 'px', height: size.toString() + 'px' }"
      data-testid="item-icon-blurred"
    >
      &nbsp;
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Item } from '@/models'

const props = defineProps<{
  color: Item['color']
  size: number
}>()
</script>
<style lang="scss" scoped>
.icon {
  position: relative;
  user-select: none;
  display: flex;
  align-items: end;
  &-blurred {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
  }
}
</style>
