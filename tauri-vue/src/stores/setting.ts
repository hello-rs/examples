import { defineStore } from "pinia";
import { useLocalStorage, useStorage } from "@vueuse/core";
import { computed, ref } from "vue";

const LOCAL_NAME = "settings";

export interface ISettings {
  theme: string;
}

function defaultSetting(): ISettings {
  return {
    theme: "dark",
  };
}

export const useSettingStore = defineStore(LOCAL_NAME, () => {
  const setting = useStorage<ISettings>(LOCAL_NAME, defaultSetting());
  function updateSetting(token: string | null) {
    if (token == null) {
      setting.value = null;
      return;
    }
    if (setting.value == null) {
      setting.value = { token: token };
      return;
    }
    setting.value.token = token;
  }

  const resetSetting = () => {};

  return { auth, updateSetting, resetSetting };
});
