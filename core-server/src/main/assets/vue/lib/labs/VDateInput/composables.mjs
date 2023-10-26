// Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useDate } from "../date/index.mjs"; // Utilities
import { propsFactory, wrapInArray } from "../../util/index.mjs"; // Types
export const makeDateProps = propsFactory({
  modelValue: {
    type: null,
    default: () => []
  },
  displayDate: {
    type: null,
    default: null
  },
  inputMode: {
    type: String,
    default: 'calendar'
  },
  viewMode: {
    type: String,
    default: 'month'
  },
  format: String
}, 'date');
export const dateEmits = {
  'update:modelValue': date => true,
  'update:displayDate': date => true,
  'update:focused': focused => true,
  'update:inputMode': inputMode => true,
  'update:viewMode': viewMode => true
};
export function createDateInput(props, isRange) {
  const adapter = useDate();
  const model = useProxiedModel(props, 'modelValue', [], v => {
    if (v == null) return [];
    const arr = wrapInArray(v).filter(v => !!v);
    return arr.map(adapter.date);
  }, v => {
    const arr = wrapInArray(v);
    const formatted = props.format ? arr.map(d => adapter.format(d, props.format)) : arr;
    if (isRange) return formatted;
    return formatted[0];
  });
  const inputMode = useProxiedModel(props, 'inputMode');
  const viewMode = useProxiedModel(props, 'viewMode');
  const displayDate = useProxiedModel(props, 'displayDate', model.value.length ? model.value[0] : adapter.date());
  function parseKeyboardDate(input, fallback) {
    const date = adapter.date(input);
    return adapter.isValid(date) ? date : fallback;
  }
  function isEqual(model, comparing) {
    if (model.length !== comparing.length) return false;
    for (let i = 0; i < model.length; i++) {
      if (comparing[i] && !adapter.isEqual(model[i], comparing[i])) {
        return false;
      }
    }
    return true;
  }
  return {
    model,
    adapter,
    inputMode,
    viewMode,
    displayDate,
    parseKeyboardDate,
    isEqual
  };
}
//# sourceMappingURL=composables.mjs.map