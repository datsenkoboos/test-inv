<template>
  <div class="input-wrapper">
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      ref="input"
      @input="updateValue"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  name: string
  placeholder: string
  value: string
}>()
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

const input = ref()

function updateValue(event: Event) {
  emit('update:value', (event.target as HTMLInputElement).value)
  input.value.value = props.value
}
</script>
<style lang="scss" scoped>
.input-wrapper {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: 0 11px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  input {
    color: white;
    border: none;
    background: none;
    padding: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ffffff;
    }
  }
}
</style>
