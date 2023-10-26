// Utilities
import { nextTick, watch } from "/js/vue.js";

// Types

export function useSelectLink(link, select) {
  watch(() => link.isActive?.value, isActive => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
//# sourceMappingURL=selectLink.mjs.map