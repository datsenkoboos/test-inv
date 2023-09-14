<template>
  <aside class="side-section">
    <div class="side-section-image-container">
      <img
        src="@/assets/images/side-section-img.svg"
        alt="side-section-image"
        class="side-section-image"
      />
    </div>
    <SkeletonLoader class="side-section-top-skeleton" />
    <div class="side-section-description">
      <SkeletonLoader class="side-section-description-skeleton" />
      <SkeletonLoader class="side-section-description-skeleton" />
      <SkeletonLoader class="side-section-description-skeleton" />
      <SkeletonLoader class="side-section-description-skeleton" />
      <SkeletonLoader class="side-section-description-skeleton" />
    </div>
    <SkeletonLoader
      class="side-section-description-skeleton side-section-description-skeleton-bottom"
    />
  </aside>
</template>
<script setup lang="ts">
import { SkeletonLoader } from '@/components/ui'
</script>
<style lang="scss">
.side-section {
  width: 236px;
  padding: 18px 14px 24px;
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
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
