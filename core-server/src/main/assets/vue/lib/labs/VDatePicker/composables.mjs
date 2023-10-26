// Composables
import { createDateInput } from "../VDateInput/composables.mjs"; // Utilities
import { inject, provide, ref } from "/js/vue.js";

// Types

export const DatePickerSymbol = Symbol.for('vuetify:date-picker');
export function createDatePicker(props) {
  const hoverDate = ref();
  const hoverMonth = ref();
  const isDragging = ref(false);
  const dragHandle = ref(null);
  const hasScrolled = ref(false);
  provide(DatePickerSymbol, {
    hoverDate,
    hoverMonth,
    isDragging,
    dragHandle,
    hasScrolled
  });

  // TODO: This composable should probably not live in DateInput
  const {
    model,
    displayDate,
    viewMode,
    inputMode,
    isEqual
  } = createDateInput(props, !!props.multiple);
  return {
    hoverDate,
    hoverMonth,
    isDragging,
    dragHandle,
    hasScrolled,
    model,
    displayDate,
    viewMode,
    inputMode,
    isEqual
  };
}
export function useDatePicker() {
  const datePicker = inject(DatePickerSymbol);
  if (!datePicker) throw new Error('foo');
  return datePicker;
}
//# sourceMappingURL=composables.mjs.map