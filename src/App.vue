<script setup lang="ts">
import Menu from '@/components/Menu/Menu.vue'
import { ref } from 'vue'
import Sessions from '@/components/Sessions/ui/Sessions.vue'

const menuHidden = ref(true);
const toggleMenu = () => {
  menuHidden.value = !menuHidden.value;
}
</script>

<template>
  <div class='page'>
    <div class='appBox'>
      <Menu :menuHidden='menuHidden'/>
      <button class="tuiAccordionItem" @click='toggleMenu'>
        <img class="icon" :class="{ iconRotated: !menuHidden }" alt="" src="@/components/icons/Icon.svg" />
      </button>
      <Sessions/>
    </div>
  </div>
</template>

<style scoped>

.icon {
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}

.iconRotated {
  transform: rotate(180deg);
}

.tuiAccordionItem {
  position: relative;
  border: none;
  left: -11px;
  top: 34px;
  appearance: none;
  border-radius: var(--br-29xl);
  background-color: var(--sc-base-1);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.appBox {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--main-background-color);
}

.page {
  width: 100vw;
  height: 100vh;
}
</style>
