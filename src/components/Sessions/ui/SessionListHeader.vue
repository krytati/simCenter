<script setup lang="ts">
import { useSessionListStore } from '@/components/Sessions/stores/SessionList.store.ts'
import { HeaderKeys } from '@/types/HeaderKeys.ts'
import { computed, ref, watch } from 'vue'

const store = useSessionListStore();
const Keys = computed(() =>  HeaderKeys);

const sortKey = ref<HeaderKeys|null>(null);
const sortOrder = ref(1);

const sortBy = (key: HeaderKeys) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
}

watch([sortKey, sortOrder], () => {
  if (sortKey.value) {
    store.sortSessionData(sortKey.value, sortOrder.value);
  }
});

</script>

<template>
  <tr class="tbH">

    <th class="parent" @click="sortBy(Keys.dateTime)">
      <div class="headerCell">
        <div class="headerText">Дата и время</div>
        <div v-if="sortKey === Keys.dateTime">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>

    <th class="parent" @click="sortBy(Keys.status)">
      <div class="headerCell">
        <div class="headerText">Статус</div>
        <div v-if="sortKey === Keys.status">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>

    <th class="parent">
      <div class="headerCell" @click="sortBy(Keys.module)">
        <div class="headerText">Название учебного модуля</div>
        <div v-if="sortKey === Keys.module">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>

    <th class="parent">
      <div class="headerCell" @click="sortBy(Keys.type)">
        <div class="headerText">Тип сессии</div>
        <div v-if="sortKey === Keys.type">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>

    <th class="parent">
      <div class="headerCell" @click="sortBy(Keys.room)">
        <div class="headerText">Комната</div>
        <div v-if="sortKey === Keys.room">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>

    <th class="parent">
      <div class="headerCell" @click="sortBy(Keys.group)">
        <div class="headerText">Группа</div>
        <div v-if="sortKey === Keys.group">
          <img class="icon" :class="{ iconRevert: sortOrder === 1}" alt="" src="@/components/icons/More.svg"/>
        </div>
      </div>
    </th>
  </tr>
</template>


<style scoped>
  .icon {
    width: 16px;
    position: relative;
    height: 16px;
    margin: 3px;
  }

  .iconRevert {
    transform: rotate(180deg);
  }

  .parent {
    padding: var(--padding-3xs) var(--padding-base);
    gap: var(--gap-3xs);
  }

  .headerText {
    font-size: var(--body-l-bold-size);
    font-weight: 800;
    color: var(--sc-base-1);
  }

  .headerCell {
    min-width: 140px;
    display: flex;
  }

  .tbH {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: var(--color-whitesmoke-100);
    font-size: var(--body-m-size);
    color: var(--sc-base-6);
    font-family: var(--body-m);
    border: 1px solid var(--sc-base-4);
  }

  th {
    padding: 8px;
    text-align: left;
    cursor: pointer;
  }

</style>
