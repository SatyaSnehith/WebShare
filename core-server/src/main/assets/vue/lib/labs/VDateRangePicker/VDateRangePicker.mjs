import { resolveDirective as _resolveDirective, createTextVNode as _createTextVNode, createVNode as _createVNode, mergeProps as _mergeProps } from "/js/vue.js";
// Styles
import "./VDateRangePicker.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VTextField } from "../../components/VTextField/index.mjs";
import { VPicker } from "../VPicker/index.mjs"; // Composables
import { createDatePicker } from "../VDatePicker/composables.mjs";
import { makeTransitionProps } from "../../composables/transition.mjs";
import { useDate } from "../date/index.mjs";
import { makeVPickerProps } from "../VPicker/VPicker.mjs"; // Utilities
import { ref, watch } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
import { makeVDateRangePickerHeaderProps, VDateRangePickerHeader } from "./VDateRangePickerHeader.mjs";
import { makeVDateRangePickerMonthProps, VDateRangePickerMonth } from "./VDateRangePickerMonth.mjs";
import { makeDateProps } from "../VDateInput/composables.mjs";
export const makeVDateRangePickerProps = propsFactory({
  ...makeDateProps(),
  ...makeVPickerProps(),
  ...makeVDateRangePickerHeaderProps(),
  ...makeVDateRangePickerMonthProps(),
  ...makeTransitionProps({
    transition: 'fade'
  })
}, 'VDateRangePicker');
export const VDateRangePicker = genericComponent()({
  name: 'VDateRangePicker',
  props: makeVDateRangePickerProps(),
  emits: {
    'update:modelValue': date => true,
    'update:viewMode': mode => true,
    'update:inputMode': input => true,
    'update:displayDate': date => true,
    save: date => true,
    cancel: () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const adapter = useDate();
    createDatePicker(props);
    const selected = ref(props.modelValue);
    const inputModel = ref(props.modelValue[0] ? adapter.format(props.modelValue[0], 'keyboardDate') : '');

    // watch(() => props.modelValue, newValue => {
    //   if (!newValue?.length) return

    //   inputModel.value = adapter.format(newValue[0], 'keyboardDate')
    // })

    watch(inputModel, () => {
      const {
        isValid,
        date
      } = adapter;
      selected.value = isValid(inputModel.value) ? [date(inputModel.value)] : [];
    });

    // watch(selected, () => {
    //   if (!props.showActions) {
    //     emit('update:modelValue', selected.value)
    //   }
    // })

    // function handleInput (value: any, index: number) {
    //   if (value.length === 10 && adapter.isValid(value)) {
    //     const modelValue = props.modelValue.slice()
    //     modelValue.splice(index, value)
    //     emit('update:modelValue', modelValue)
    //   }
    // }

    const handleCancel = () => emit('cancel');
    const handleSave = () => {
      emit('update:modelValue', selected.value);
      emit('save', selected.value);
    };
    useRender(() => {
      const [pickerProps] = VPicker.filterProps(props);
      const [dateRangePickerHeaderProps] = VDateRangePickerHeader.filterProps(props);
      const [dateRangePickerMonthProps] = VDateRangePickerMonth.filterProps(props);
      return _createVNode(VPicker, _mergeProps(pickerProps, {
        "key": props.inputMode,
        "class": ['v-date-range-picker', `v-date-range-picker--${props.inputMode}`],
        "width": 328
      }), {
        header: () => _createVNode(VDateRangePickerHeader, _mergeProps(dateRangePickerHeaderProps, {
          "modelValue": selected.value,
          "onUpdate:displayDate": displayDate => emit('update:displayDate', displayDate),
          "onUpdate:inputMode": inputMode => emit('update:inputMode', inputMode),
          "onCancel": handleCancel,
          "onSave": handleSave
        }), null),
        default: () => props.inputMode === 'calendar' ? _createVNode(VDateRangePickerMonth, _mergeProps(dateRangePickerMonthProps, {
          "modelValue": selected.value,
          "onUpdate:modelValue": $event => selected.value = $event
        }), null) : _createVNode("div", {
          "class": "v-date-range-picker__input"
        }, [_createVNode(VTextField, {
          "label": "From",
          "placeholder": "yyyy/mm/dd",
          "modelValue": inputModel.value,
          "onUpdate:modelValue": $event => inputModel.value = $event
        }, null), _createVNode(VTextField, {
          "label": "To",
          "placeholder": "yyyy/mm/dd",
          "modelValue": inputModel.value,
          "onUpdate:modelValue": $event => inputModel.value = $event
        }, null)]),
        actions: props.inputMode === 'keyboard' ? () => _createVNode("div", null, [_createVNode(VBtn, {
          "variant": "text",
          "color": props.color,
          "onClick": handleCancel
        }, {
          default: () => [_createTextVNode("Cancel")]
        }), _createVNode(VBtn, {
          "variant": "text",
          "color": props.color,
          "onClick": handleSave
        }, {
          default: () => [_createTextVNode("Ok")]
        })]) : undefined
      });
    });
  }
});
//# sourceMappingURL=VDateRangePicker.mjs.map