import type { App } from "vue";
import { createI18n } from "vue-i18n";
import enUS from "./en-US";
import koKR from "./ko-KR";
import zhCN from "./zh-CN";
import zhTW from "./zh-TW";
import ruRU from "./ru-RU";
import deDE from "./de-DE";
import frFR from "./fr-FR";
import itIT from "./it-IT";
import { Language, useAppStoreWithOut } from "@/store/app";

const appStore = useAppStoreWithOut();

const defaultLocale = appStore.app.language || "en-US";

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: "en-US",
  allowComposition: true,
  messages: {
    "en-US": enUS,
    "de-DE": deDE,
    "it-IT": itIT,
    "fr-FR": frFR,
    "ko-KR": koKR,
    "zh-CN": zhCN,
    "zh-TW": zhTW,
    "ru-RU": ruRU,
    "zh-SG": zhCN,
  },
});

export const t = i18n.global.t;

export function setLocale(locale: Language) {
  i18n.global.locale = locale;
}

export function setupI18n(app: App) {
  app.use(i18n);
}

export default i18n;
