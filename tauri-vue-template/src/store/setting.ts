import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

const LOCAL_NAME = "setting";

// export interface ISetting {
//   output_dir: string;
// }
export const useSettingStore = defineStore(LOCAL_NAME, () => {
  const setting = useLocalStorage<GSetting.ISetting>(
    LOCAL_NAME,
    default_setting()
  );

  const get_setting = computed(() => {
    return setting;
  });
  function update_setting(val: GSetting.ISetting) {
    setting.value = val;
  }
  return { setting, get_setting, update_setting };
});

// 辅助函数
function default_setting(): GSetting.ISetting {
  return { output_dir: "E:/go/src/HLXX_Server/HLXX_Server" };
}
