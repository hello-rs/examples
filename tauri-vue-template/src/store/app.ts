import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

const LOCAL_NAME = "app";

export type Theme = "light" | "dark" | "auto";

export type Language =
  | "en-US"
  | "de-DE"
  | "fr-FR"
  | "it-IT"
  | "zh-CN"
  | "zh-TW"
  | "ko-KR"
  | "zh-SG"
  | "ru-RU";

export interface IApp {
  theme: Theme;
  language: Language;
}

export const useAppStore = defineStore(LOCAL_NAME, () => {
  const app = useLocalStorage<IApp>(LOCAL_NAME, default_setting());

  const get_app = computed(() => {
    return app;
  });

  function set_theme(theme: Theme) {
    app.value.theme = theme;
  }

  function set_language(language: Language) {
    if (app.value.language !== language) {
      app.value.language = language;
    }
  }

  return { app, get_app, set_theme, set_language };
});

// 辅助函数
function default_setting(): IApp {
  return { theme: "auto", language: "auto" as Language };
}