<script setup lang='ts'>
import SessionList from '@/components/Sessions/ui/SessionList.vue'
import { ref, watch } from 'vue'
import { useSessionListStore } from '@/components/Sessions/stores/SessionList.store.ts'

const store = useSessionListStore();

const inputModule = ref('');

watch(inputModule, () => {
  store.filterByModule(inputModule.value);
});
</script>

<template>
  <div class="sessionBox">
    <div class="sessionHeader">
      <div class="sessionHeaderText">Учебные сессии</div>
      <div class="buttonsBox">
        <div class="inputContainer">
          <input class="input" placeholder='Поиск' v-model='inputModule'>
        </div>
        <button class="iconButton">
          <img class="icon" alt="" src="@/components/icons/filter.svg" />
        </button>
        <button class="iconButton">
          <img class="icon" alt="" src="@/components/icons/Sort.svg" />
        </button>
        <button class="buttonCreate">
          <div class="buttonText">Создать</div>
        </button>
      </div>
    </div>
    <SessionList/>
    <div class="sessionFooter"> это футер </div>
  </div>
</template>

<style scoped>

.sessionHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.sessionHeaderText {
  font-size: var(--heading-5-size);
  font-weight: 800;
  font-family: var(--heading-5);
  color: var(--sc-base-1);
}

.sessionBox {
  background-color: var(--sc-base-6);
  height: 93%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 10px 10px -10px;
}

.sessionFooter {
  height: 30px;
  background-color: var(--color-whitesmoke-100);
  border-radius: 0 0 var(--br-xs) var(--br-xs);
  text-align: center;
  font-size: var(--body-m-size);
  color: var(--sc-base-1);
  font-family: var(--body-m);
}

.icon {
  width: 15px;
  height: 15px;
}

.inputContainer {
  display: flex;
}

.buttonsBox {
  display: flex;
  gap: 5px;
  margin-left: auto;
  padding: 0px 16px;
}
.iconButton {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--sc-base-12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttonCreate {
  border: none;
  border-radius: 9px;
  background-color: var(--sc-base-7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--body-s-size);
  color: var(--sc-base-6);
}

.buttonText {
  padding: 0 15px;
}

.input {
  height: 100%;
  width: 220px;
  border-radius: 9px;
  background-color: var(--sc-base-6);
  border: 1px solid var(--sc-base-4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px var(--padding-base);
  gap: 10px;
  padding-left: 35px;
  background: url("@/components/icons/search.svg") no-repeat left;
  background-size: 17px;
  background-position: 10px;
}


</style>
