<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  totalItems: Number,
  itemsPerPage: Number,
  currentPage: Number,
});

const emit = defineEmits(['update:currentPage']);

const totalPages = computed(() => Math.ceil(props.totalItems! / props.itemsPerPage!));
const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));

const changePage = (page: number) => {
  if (page !== props.currentPage) emit('update:currentPage', page);
};

const prevPage = () => {
  if (props.currentPage! > 1) emit('update:currentPage', props.currentPage! - 1);
};

const nextPage = () => {
  if (props.currentPage! < totalPages.value) emit('update:currentPage', props.currentPage! + 1);
};
</script>

<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <img class="icon" alt="" src="@/components/icons/IconsDark.svg" />
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>

    <button @click="nextPage" :disabled="currentPage === totalPages">
      <img class="icon iconRevert" alt="" src="@/components/icons/IconsDark.svg" />
    </button>
  </div>
</template>

<style scoped>
.icon {
  width: 15px;
  height: 15px;
}

.iconRevert {
  transform: rotate(180deg);
}

.pagination {
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  padding: 10px;
  height: 30px;
  background-color: var(--color-whitesmoke-100);
  border-radius: 0 0 var(--br-xs) var(--br-xs);
  text-align: center;
  font-size: var(--body-m-size);
  color: var(--sc-base-1);
  font-family: var(--body-m);
}

button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--sc-base-6);
  color: var(--sc-base-1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: var(--sc-base-4);
}

button.active {
  border: 1px solid var(--sc-base-7);
  border-radius: var(--br-5xs);
  color: var(--sc-base-7);
}

button:disabled {
  opacity: 0.5;
  cursor: unset;
}
</style>
