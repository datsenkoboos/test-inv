<template>
  <div
    class="input-wrapper"
    :style="{ borderColor: focused ? 'white' : '' }"
    @click="input.focus()"
  >
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      ref="input"
      @input="updateValue"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  name: string
  placeholder: string
  value: string
}>()
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

const input = ref()
const focused = ref(false)

function updateValue(event: Event) {
  emit('update:value', (event.target as HTMLInputElement).value)
  input.value.value = props.value
}
</script>
<style lang="scss" scoped>
.input-wrapper {
  background-color: var(--color-bg-secondary);
  cursor: text;
  border: 1px solid var(--color-border);
  padding: 0 11px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: border-color 0.3s;
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
