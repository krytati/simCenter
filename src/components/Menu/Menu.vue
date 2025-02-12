<script setup lang="ts">
const { menuHidden } = defineProps<{ menuHidden: boolean }>();
</script>

<template>
  <div class="menu" v-if="menuHidden">
    <div class="navHeader">
      <div class="navHeaderInner">
        <div class="frameParent">
          <img class="frameChild" alt="" src="@/components/icons/Frame 198.svg" />
          <div class="div13">Сим Центр</div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/CalendarBlank.svg" />
        <div class="div">Расписание</div>
      </div>
      <div class="tuiAccordion tuiAccordionActive">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/GraduationCap.svg" />
        <div class="div">Учебные сессии</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/Door.svg" />
        <div class="div">Список комнат</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/Student.svg" />
        <div class="div">Пользователи</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/UserList.svg" />
        <div class="div">Учебные группы</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/VideoCamera.svg" />
        <div class="div">Список устройств</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/Icons.svg" />
        <div class="div">Настройки системы</div>
      </div>
      <div class="tuiAccordion">
        <img class="phosphorIconsRegularCalen" alt="" src="@/components/icons/Icons-2.svg" />
        <div class="div">Архив</div>
      </div>
    </div>
    <div class="footerNav">
      <div class="tuiAccordion8">
        <div class="parent">
          <div class="div8">Барнаби Мармадюк</div>
          <div class="div9">Преподаватель</div>
        </div>
        <div class="wrapper">
          <div class="div10">БМ</div>
        </div>
      </div>
      <div class="navFooter">
        <div class="tuiAccordion">
          <img class="fetherIconsLogOut" alt="" src="@/components/icons/log-out.svg" />
          <div class="div">Выйти</div>
          <div class="phosphorIconsRegularCalen" />
        </div>
        <div class="tuiAccordion10">
          <img class="flagIcon" alt="" src="@/components/icons/RU.svg" />
          <div class="div">Русcкий</div>
          <img class="icons7" alt="" src="@/components/icons/More.svg" />
        </div>
      </div>
      <div class="div12">Версия 1.02</div>
    </div>
  </div>
</template>

<style scoped>
.phosphorIconsRegularCalen {
  width: 24px;
  position: relative;
  height: 24px;
}
.div {
  font-weight: 800;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.tuiAccordion {
  cursor: pointer;
  width: 250px;
  border-radius: var(--br-base);
  background-color: var(--color-white);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-xs);
}
.tuiAccordionActive {
  background-color: var(--sc-base-7);
  color: var(--color-white);
}
.tuiAccordion:hover:not(.tuiAccordionActive) {
  background-color: #f4f4f4;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
}
.div8 {
  width: 166px;
  position: relative;
  line-height: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
}
.div9 {
  width: 166px;
  flex: 1;
  position: relative;
  font-size: var(--body-s-size);
  line-height: 20px;
  font-weight: 500;
  color: var(--sc-base-2);
  display: inline-block;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div10 {
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  line-height: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}
.wrapper {
  width: 48px;
  position: relative;
  border-radius: var(--br-29xl);
  background-color: var(--sc-base-11);
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;
  color: var(--color-white);
}
.tuiAccordion8 {
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: var(--br-base);
  background-color: var(--color-white);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-xs);
  cursor: pointer;
}
.fetherIconsLogOut {
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
}
.flagIcon {
  width: 24.4px;
  position: relative;
  border-radius: 4px;
  height: 24.4px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
}
.icons7 {
  width: 24px;
  position: relative;
  height: 24px;
  object-fit: contain;
}
.tuiAccordion10 {
  border-radius: 12px;
  background-color: var(--color-white);
  border: 1px solid var(--sc-base-4);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-xs);
  cursor: pointer;
}
.navFooter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
}
.div12 {
  position: relative;
  font-size: var(--body-s-size);
  line-height: 20px;
  font-weight: 500;
  color: var(--sc-base-2);
}
.footerNav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18px;
  margin-top: auto;
}

.frameChild {
  width: 46px;
  border-radius: 14px;
  height: 46px;
  overflow: hidden;
  flex-shrink: 0;
}
.div13 {
  font-weight: 800;
  text-shadow: var(--sc-base-2) 0 3px 5px;
}
.frameParent {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
}
.navHeaderInner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navHeader {
  font-size: 24px;
  padding-top: 13px;
}
.menu {
  width: 274px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  font-size: var(--body-m);
  color: var(--sc-base-1);
  font-family: var(--body-s);
  padding: 10px;
  transition: transform 0.3s ease-in-out;
}

.menu.hidden {
  transform: translateX(-100%);
}
</style>
