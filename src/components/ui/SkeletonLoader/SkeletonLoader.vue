<template>
  <div
    class="skeleton-loader"
    :style="{ width: width, height: heightMap[height] ?? height }"
    data-testid="skeleton"
  >
    &nbsp;
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    height?: 'sm' | 'md' | 'lg' | 'xl' | string
    width?: string
  }>(),
  {
    height: 'md',
    width: '100%'
  }
)

const heightMap = {
  sm: '10px',
  md: '26px',
  lg: '30px',
  xl: '36px'
}
</script>
<style lang="scss">
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
.skeleton-loader {
  background-image: linear-gradient(
    to right,
    rgba(214, 215, 216, 0.05) 0%,
    rgba(226, 227, 228, 0.2) 10%,
    rgba(214, 215, 216, 0.05) 20%,
    rgba(214, 215, 216, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: bgAnimate 1.2s linear infinite;
}
</style>
