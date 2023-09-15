<template>
  <aside class="section">
    <div class="section-image-container">
      <img
        src="@/assets/images/side-section-img.svg"
        alt="side-section-image"
        class="section-image"
      />
    </div>
    <SkeletonLoader width="190px" />
    <div class="section-description">
      <SkeletonLoader v-for="(_, index) in Array(5)" :width="widthMap[index]" size="sm" />
    </div>
    <SkeletonLoader size="sm" width="80px" />
  </aside>
</template>
<script setup lang="ts">
import { SkeletonLoader } from '@/components/ui'

const widthMap = ['154px', '188px', '168px', '158px', '118px']
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
  }
}
</style>
