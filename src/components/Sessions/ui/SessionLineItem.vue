<script setup lang="ts">
import type { SessionItem } from '@/types/SessionItem.ts';
import { computed } from 'vue';
import { formatDatesToTimeRange } from '@/components/Sessions/functions/formatDatesToTimeRange.ts';
import { getStatusText } from '@/components/Sessions/functions/getStatusText.ts';
import { getTypeText } from '@/components/Sessions/functions/getTypeText.ts';
import { SessionStatus } from '@/types/SessionItem.ts';

const { session } = defineProps<{
  session: SessionItem;
}>();

const sessionTime = computed(() => {
  if (session.start && session.end) {
    const start = new Date(session.start);
    const end = new Date(session.end);
    return formatDatesToTimeRange(start, end);
  } else return '';
});

const sessionStatus = computed(() => getStatusText(session.status.name));
const sessionType = computed(() => getTypeText(session.type.name));

const sessionStatusClass = computed(() => {
  switch (session.status.name) {
    case SessionStatus.planned:
      return 'tegnew blue';
    case SessionStatus.canceled:
      return 'tegnew red';
    case SessionStatus.progress:
      return 'tegnew yellow';
    case SessionStatus.completed:
      return 'tegnew green';
    default:
      return 'tegnew';
  }
});

const rooms = computed(() => session.rooms?.map((room) => room.name).join(', '));
const groups = computed(() => session.groups?.map((group) => group.name).join(', '));

</script>

<template>
  <tr class="lineTb">
    <td class="colm">
      <div class="data">{{ sessionTime }}</div>
    </td>
    <td class="colm">
      <div class="teg">
        <div :class="sessionStatusClass">
          <div class="label">{{ sessionStatus }}</div>
        </div>
      </div>
    </td>
    <td class="colm">
      <div class="data">{{ session.module }}</div>
    </td>
    <td class="colm">
      <div class="data">{{ sessionType }}</div>
    </td>
    <td class="colm">
      <div class="data">{{ rooms }}</div>
    </td>
    <td class="colm">
      <div class="data">{{ groups }}</div>
    </td>
  </tr>
</template>

<style>
.data {
  font-weight: 500;
  display: flex;
  word-wrap: break-word;
}
.colm {
  font-weight: 500;
  padding: var(--padding-3xs) var(--padding-base);
}
.label {
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.tegnew {
  border-radius: 43px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 12px;
}

.blue {
  background-color: #afbff5;
}
.yellow {
  background-color: #ffdaa1;
}
.red {
  background-color: #f6d1d1;
}
.green {
  background-color: #91c893;
}

.lineTb {
  width: 100%;
  font-size: var(--body-m-size);
  color: var(--sc-base-1);
  font-family: var(--body-m);
  border: 1px solid var(--sc-base-4);
}

td {
  padding: 8px;
  text-align: left;
}
</style>
