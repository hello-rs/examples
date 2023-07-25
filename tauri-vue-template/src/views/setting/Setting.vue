<script setup lang="ts">
import { t } from "@/locales";
import { Language, Theme, useAppStore } from "@/store";
import { NButton, NSelect, NCard, NTabs, NTabPane, NSpace, useMessage } from "naive-ui";

const appStore = useAppStore()
const ms = useMessage()

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
function cliMenu(item: { label: string; key: string }): void {
  ms.info("[onUpdate:value]: " + JSON.stringify(item));
}
// 多语言点击事件
function cli_reset() {
  console.log("??")
  ms.success(t('common.success'))
  window.location.reload()
}
</script>

<template>
  <div>
    <n-card title="设置">
      <n-tabs default-value="app" size="large" animated type="line">
        <n-tab-pane name="app" tab="App 设置">
          <n-space vertical>
            <n-space>
              <span class="flex-shrink-0 w-[100px]">{{ $t('setting.theme') }}</span>
              <div class="flex flex-wrap items-center gap-4">
                <template v-for="item of themeOptions" :key="item.key">
                  <NButton size="small" :type="item.key === appStore.app.theme ? 'primary' : undefined"
                    @click="appStore.set_theme(item.key)">
                    {{ item.label }}
                  </NButton>
                </template>
              </div>
            </n-space>
            <n-space>
              <span class="flex-shrink-0 w-[100px]">{{ $t('setting.language') }}</span>
              <div class="flex flex-wrap items-center gap-4">
                <NSelect :value="appStore.app.language" :options="languageOptions"
                  @update-value="(value: string) => appStore.set_language(value as Language)" />
              </div>
            </n-space>
            <n-space>
              <span class="flex-shrink-0 w-[100px]">{{ $t('setting.resetUserInfo') }}</span>
              <NButton size="small" @click="cli_reset">
                {{ $t('common.reset') }}
              </NButton>
            </n-space>
          </n-space>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-button type="primary" block secondary strong>
            注册
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
