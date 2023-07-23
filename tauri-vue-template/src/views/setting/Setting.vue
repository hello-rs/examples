<script setup lang="ts">
import { Language, Theme } from "@/store";
import { MenuOption, NLayout, NLayoutSider, NMenu } from "naive-ui";

// 菜单
const menuOptions: MenuOption[] = [
  {
    label: "App设置",
    key: "app",
  },
];
// 主题选项
const themeOptions: { label: string; key: Theme }[] = [
  {
    label: "Auto",
    key: "auto",
  },
  {
    label: "Light",
    key: "light",
  },
  {
    label: "Dark",
    key: "dark",
  },
];
// 多语言选项
const languageOptions: { label: string; key: Language; value: Language }[] = [
  { label: "简体中文", key: "zh-CN", value: "zh-CN" },
  { label: "繁體中文", key: "zh-TW", value: "zh-TW" },
  { label: "English", key: "en-US", value: "en-US" },
  { label: "한국어", key: "ko-KR", value: "ko-KR" },
  { label: "Русский", key: "ru-RU", value: "ru-RU" },
  { label: "Deutsch", key: "de-DE", value: "de-DE" },
  { label: "Français", key: "fr-FR", value: "fr-FR" },
  { label: "Italiano", key: "it-IT", value: "it-IT" },
];
// menu 点击事件
function cliMenu(key: string, item: MenuOption): void {
  window.$message?.info("[onUpdate:value]: " + JSON.stringify(key));
  window.$message?.info("[onUpdate:value]: " + JSON.stringify(item));
}
// 多语言点击事件
function cliLanguageMenu(key: string, item: MenuOption): void {
  window.$message?.info("[onUpdate:value]: " + JSON.stringify(key));
  window.$message?.info("[onUpdate:value]: " + JSON.stringify(item));
}
</script>

<template>
  <NLayout has-sider>
    <NLayoutSider>
      <NMenu :options="menuOptions" @update:value="cliMenu" />
    </NLayoutSider>
    <template>
      <NMenu :options="themeOptions" @update:value="cliLanguageMenu" />
      <NMenu :options="languageOptions" @update:value="cliLanguageMenu" />
    </template>
  </NLayout>
</template>
