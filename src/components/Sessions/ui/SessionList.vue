<script setup lang="ts">
import { useSessionListStore } from '@/components/Sessions/stores/SessionList.store.ts';
import SessionLineItem from '@/components/Sessions/ui/SessionLineItem.vue';
import SessionListHeader from '@/components/Sessions/ui/SessionListHeader.vue';
import { nextTick, ref } from 'vue';

const sessionStore = useSessionListStore();
const tableContainer = ref<HTMLDivElement | null>(null);

const scrollToTop = () => {
  nextTick(() => {
    tableContainer.value?.scrollTo(0, 0);
  });
};

defineExpose({
  scrollToTop,
});

</script>

<template>
  <div class="tableContainer" ref="tableContainer">
    <table>
      <SessionListHeader />
      <SessionLineItem
        :session="session"
        v-for="session in sessionStore.sessions"
        :key="session.id"
      />
    </table>
  </div>
</template>

<style scoped>

.tableContainer {
  width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  min-height: 0;
  border-radius: var(--br-xs) var(--br-xs) 0 0;
  margin-bottom: auto;
}

table tr:nth-child(odd) {
  background-color: var(--color-whitesmoke-100);
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
</style>
