<template>
  <InventoryModal
    :show="appStore.modal"
    @close="appStore.hideModal"
    class="edit"
    data-testid="inv-modal"
  >
    <transition appear name="slide-vert">
      <div v-show="showQuantityEdit" class="edit-quantity-modal" data-testid="quantity-modal">
        <TextInput
          type="number"
          :value="quantity"
          @update:value="quantity = $event.replace(/\D/g, '')"
          name="quantity"
          placeholder="Введите количество"
        />
        <div class="edit-quantity-modal-controls">
          <TheButton
            class="edit-quantity-modal-controls-cancel"
            size="md"
            bg-color="white"
            text-color="black"
            @click="showQuantityEdit = false"
            data-testid="cancel-button"
            >Отмена</TheButton
          >
          <TheButton
            class="edit-quantity-modal-controls-confirm"
            size="md"
            bg-color="#fa7272"
            text-color="white"
            @click="deleteItem"
            data-testid="submit-button"
            >Подтвердить</TheButton
          >
        </div>
      </div>
    </transition>
    <ItemIcon
      :color="
        appStore.items[appStore.selectedIndex!]
          ? appStore.items[appStore.selectedIndex!]!.color
          : ''
      "
      :size="130"
      class="edit-icon"
    />
    <div class="edit-info">
      <SkeletonLoader width="211px" size="lg" />
      <div class="edit-info-description">
        <SkeletonLoader v-for="(_, index) in Array(5)" :width="widthMap[index]" size="sm" />
      </div>
    </div>
    <TheButton
      class="edit-delete-btn"
      size="lg"
      bg-color="#fa7272"
      text-color="white"
      @click="showQuantityEdit = true"
      data-testid="delete-button"
      >Удалить предмет</TheButton
    >
  </InventoryModal>
</template>
<script setup lang="ts">
import { useAppStore } from '@/stores'
import { InventoryModal, ItemIcon, SkeletonLoader, TheButton, TextInput } from '@/components/ui'
import { ref } from 'vue'

const appStore = useAppStore()

const widthMap = [...Array(3), ...['180px', '80px']]

const showQuantityEdit = ref(false)
const quantity = ref()

function deleteItem() {
  const newQuantity = appStore.items[appStore.selectedIndex!].quantity - Number(quantity.value)
  const data = JSON.parse(JSON.stringify(appStore.items))
  if (newQuantity < 1) {
    delete data[appStore.selectedIndex!]
  } else {
    data[appStore.selectedIndex!].quantity = newQuantity
  }
  appStore.hideModal()
  appStore.setItemStorage(data)
}
</script>
<style lang="scss" scoped>
.edit {
  padding: 0 15px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  &-delete-btn {
    margin-top: 18px;
    width: 100%;
  }
  &-icon {
    margin-bottom: 30px;
  }
  &-info {
    padding-top: 16px;
    border-bottom: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
    &-description {
      display: flex;
      gap: 16px;
      padding: 24px 0;
      flex-direction: column;
      align-items: center;
    }
  }
  &-quantity-modal {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--color-bg-secondary);
    border-bottom-right-radius: var(--border-radius);
    border-top: 1px solid var(--color-border);
    padding: 20px 21px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      button {
        box-shadow: 0px 2px 10px 1px rgba(250, 114, 114, 0.5);
      }
      &-confirm {
        flex: 1;
      }
    }
  }
}
.slide-vert-enter-active {
  transition: transform 0.3s;
}

.slide-vert-leave-active {
  transition: transform 0.3s;
}

.slide-vert-enter-from,
.slide-vert-leave-to {
  transform: translateY(100%);
}

.slide-vert-leave-from,
.slide-vert-enter-to {
  transform: translateY(0);
}
</style>
