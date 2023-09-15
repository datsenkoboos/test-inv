<template>
  <transition appear name="slide">
    <section class="modal" v-show="show" data-testid="inventory-modal">
      <CloseButton @click="emit('close')" data-testid="close-button" />
      <slot />
    </section>
  </transition>
</template>
<script setup lang="ts">
import { CloseButton } from '@/components/ui'

const props = defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 250px;
  right: 0;
  top: 0;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  background-color: rgba(38, 38, 38, 0.76);
  backdrop-filter: blur(7px);
  border: 1px solid var(--color-border);
  border-top: none;
}
.slide-enter-active {
  transition: transform 0.3s;
}

.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-leave-from,
.slide-enter-to {
  transform: translateX(0);
}
</style>
