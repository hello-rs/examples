import type { GlobalThemeOverrides } from "naive-ui";
import { computed, watch } from "vue";
import { darkTheme, useOsTheme } from "naive-ui";
import { useAppStore } from "@/store";

export function useTheme() {
  const appStore = useAppStore();

  const OsTheme = useOsTheme();

  const isDark = computed(() => {
    const getPreferredScheme = () =>
      window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches;
    if (appStore.app.theme === "auto") return getPreferredScheme();
    else return appStore.app.theme === "dark";
  });

  const theme = computed(() => {
    return isDark.value ? darkTheme : undefined;
  });

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (isDark.value) {
      return {
        common: {},
      };
    }
    return {};
  });

  watch(
    () => isDark.value,
    (dark) => {
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    },
    { immediate: true }
  );

  return { theme, themeOverrides };
}
