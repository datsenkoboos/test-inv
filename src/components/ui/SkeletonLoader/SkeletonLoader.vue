<template>
  <div class="skeleton-loader">&nbsp;</div>
</template>
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
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
