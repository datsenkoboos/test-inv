<template>
  <button
    class="btn"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      padding: paddingMap[size],
      borderRadius: borderRadiusMap[size]
    }"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size: 'md' | 'lg'
    bgColor: string
    textColor: string
  }>(),
  {
    size: 'md'
  }
)

const paddingMap = {
  md: '8px 18px',
  lg: '11px 55px'
}
const borderRadiusMap = {
  md: '8px',
  lg: '10px'
}
</script>
<style lang="scss" scoped>
.btn {
  border: none;
  cursor: pointer;
}
</style>
