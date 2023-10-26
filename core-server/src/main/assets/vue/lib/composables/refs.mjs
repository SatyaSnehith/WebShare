// Utilities
import { onBeforeUpdate, ref } from "/js/vue.js";

// Types

export function useRefs() {
  const refs = ref([]);
  onBeforeUpdate(() => refs.value = []);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}
//# sourceMappingURL=refs.mjs.map