<template>
  <aside class="section">
    <div class="section-image-container">
      <img
        src="@/assets/images/side-section-img.svg"
        alt="side-section-image"
        class="section-image"
      />
    </div>
    <SkeletonLoader class="section-top-skeleton" />
    <div class="section-description">
      <SkeletonLoader v-for="_ in Array(5)" class="section-description-skeleton" />
    </div>
    <SkeletonLoader
      class="section-description-skeleton section-description-skeleton-bottom"
    />
  </aside>
</template>
<script setup lang="ts">
import { SkeletonLoader } from '@/components/ui'
</script>
<style lang="scss" scoped>
.section {
  width: 236px;
  padding: 18px 14px 24px;
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  border: 1px solid var(--color-border);
  &-image-container {
    overflow: hidden;
    border-radius: var(--border-radius);
  }
  &-image {
    filter: blur(10px);
  }
  &-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    &-skeleton {
      height: 10px;
      border-radius: 4px;
      &-bottom {
        width: 80px;
      }
    }
    & :nth-child(1) {
      width: 154px;
    }
    & :nth-child(2) {
      width: 188px;
    }
    & :nth-child(3) {
      width: 168px;
    }
    & :nth-child(4) {
      width: 158px;
    }
    & :nth-child(5) {
      width: 118px;
    }
  }
  &-top-skeleton {
    border-radius: 8px;
    width: 190px;
    height: 26px;
  }
}
</style>
