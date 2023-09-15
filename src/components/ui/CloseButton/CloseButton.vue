<template>
    <button class="btn">
        <Icon icon="carbon:close" style="font-size: 24px; color: white;" />
    </button>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<style lang="scss" scoped>
.btn {
    position: absolute;
    
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>