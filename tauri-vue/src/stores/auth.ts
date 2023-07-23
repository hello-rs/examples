import { defineStore } from "pinia";
import { useLocalStorage, useStorage } from "@vueuse/core";
import { computed, ref } from "vue";

const LOCAL_NAME = "SECRET_TOKEN";

export interface IAuth {
  token: string | null;
}

type Auth = IAuth | null;

// getter = computed(() => count.value * 2)
// setter = function
export const useAuthStore = defineStore(LOCAL_NAME, () => {
  const auth = useLocalStorage<Auth>(LOCAL_NAME, null);
  function setToken(token: string) {
    if (auth.value == null) {
      auth.value = { token: token };
      return;
    }
    auth.value.token = token;
  }

  const getToken = computed((): Auth => auth.value);

  function removeToken() {
    auth.value = null;
  }
  return { auth, setToken, getToken, removeToken };
});
