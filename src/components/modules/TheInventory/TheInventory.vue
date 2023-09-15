<template>
    <main class="inventory">
        <div v-for="(item, index) in Array(25)" :key="index" class="inventory-cell" @drop="onDrop($event, index)" @dragenter.prevent @dragover.prevent >
            <div v-if="data[index]" @dragstart="onDrag($event, index)" class="inventory-item">
                <img :src="`@/assets/images/item-${data[index]!.color}.svg`" alt="item-image">
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { type Item } from '@/models'
import { reactive } from 'vue';

const data: { [key: number]: null | Item } = reactive(JSON.parse(localStorage.getItem('items')!));

function onDrop(event: DragEvent, index: number) {
    const prevIndex = Number(event.dataTransfer!.getData('prevIndex'));
    const item = data[prevIndex];
    data[prevIndex] = null;
    data[index] = item;
    localStorage.setItem('items', JSON.stringify(data));
}
function onDrag(event: DragEvent, index: number) {
    event.dataTransfer!.dropEffect = 'move'
    event.dataTransfer!.effectAllowed = 'move'
    event.dataTransfer!.setData('prevIndex', index.toString())
}
</script>
<style lang="scss">
.inventory {
    background-color: var(--color-bg-secondary);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: repeat(5, 105px);
    grid-template-rows: repeat(5, 100px);
    border-top: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);
    &-cell {
        border-right: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
        &:nth-child(1) {
            border-top-left-radius: var(--border-radius);
        }
        &:nth-child(5) {
            border-top-right-radius: var(--border-radius);
        }
        &:nth-child(21) {
            border-bottom-left-radius: var(--border-radius);
        }
        &:nth-child(25) {
            border-bottom-right-radius: var(--border-radius);
        }
    }
    &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
}
</style>