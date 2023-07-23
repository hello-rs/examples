import { defineStore } from "pinia";
const LOCAL_NAME = "userStorage";

const useStore = defineStore(LOCAL_NAME, {
  state: () => {
    return {
      // 用于初始化空列表
      userList: [] as UserInfo[],
      // 用于尚未加载的数据
      user: null as UserInfo | null,
    };
  },
});

interface User {
  user_id: number;
}

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
