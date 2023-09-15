<template>
    <section class="section">
        <CloseButton />
        <SkeletonLoader class="section-skeleton" />
    </section>
</template>
<script setup lang="ts">
import { SkeletonLoader, CloseButton } from '@/components/ui'
</script>
<style lang="scss" scoped>
.section {
    width: 100%;
    background-color: var(--color-bg-secondary);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    padding: 18px 68px 18px 18px;
    position: relative;
    &-skeleton {
        height: 36px;
        border-radius: var(--border-radius);
    }
}
</style>