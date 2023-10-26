import { mergeProps as _mergeProps, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDateInput.css";

// Components
import { VDialog } from "../../components/VDialog/index.mjs";
import { VMenu } from "../../components/VMenu/index.mjs";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.mjs";
import { VDateCard, VDatePicker } from "../VDatePicker/index.mjs"; // Composables
import { createDateInput, dateEmits, makeDateProps } from "./composables.mjs";
import { useDisplay } from "../../composables/index.mjs"; // Utilities
import { ref, watch } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDateInputProps = propsFactory({
  mobile: Boolean,
  ...makeDateProps(),
  ...makeVTextFieldProps({
    appendInnerIcon: '$calendar',
    dirty: true,
    placeholder: 'mm/dd/yyyy'
  })
}, 'VDateInput');
export const VDateInput = genericComponent()({
  name: 'VDateInput',
  props: makeVDateInputProps(),
  emits: {
    ...dateEmits
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      mobile
    } = useDisplay();
    const {
      adapter,
      model,
      inputMode,
      viewMode,
      displayDate,
      parseKeyboardDate
    } = createDateInput(props, false);
    const dialog = ref(false);
    const menu = ref(false);
    const inputModel = ref(model.value.length ? adapter.format(model.value[0], 'keyboardDate') : '');
    function onBlur() {
      const {
        isEqual
      } = adapter;
      const date = parseKeyboardDate(inputModel.value);
      if (date && (!model.value[0] || !isEqual(date, model.value[0]))) {
        model.value = date;
        displayDate.value = date;
      }
    }
    watch(model, val => {
      if (!val.length) return;
      inputModel.value = adapter.format(val[0], 'keyboardDate');
    });
    function onSave() {
      dialog.value = false;
      menu.value = false;
    }
    function onCancel() {
      dialog.value = false;
      menu.value = false;
    }
    useRender(() => {
      const [textFieldProps] = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps(textFieldProps, {
        "class": "v-date-input",
        "modelValue": inputModel.value,
        "onUpdate:modelValue": $event => inputModel.value = $event,
        "onBlur": onBlur
      }), {
        ...slots,
        default: () => !mobile.value ? _createVNode(VMenu, {
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "closeOnContentClick": false,
          "location": "end bottom",
          "origin": "top right"
        }, {
          default: () => [_createVNode(VDateCard, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "displayDate": displayDate.value,
            "onUpdate:displayDate": $event => displayDate.value = $event,
            "inputMode": inputMode.value,
            "onUpdate:inputMode": $event => inputMode.value = $event,
            "viewMode": viewMode.value,
            "onUpdate:viewMode": $event => viewMode.value = $event,
            "onSave": onSave,
            "onCancel": onCancel
          }, null)]
        }) : _createVNode(VDialog, {
          "modelValue": dialog.value,
          "onUpdate:modelValue": $event => dialog.value = $event,
          "activator": "parent",
          "contentClass": "v-date-input__dialog-content"
        }, {
          default: _ref2 => {
            let {
              isActive
            } = _ref2;
            return _createVNode(VDatePicker, {
              "key": "date-picker",
              "modelValue": model.value,
              "onUpdate:modelValue": $event => model.value = $event,
              "displayDate": displayDate.value,
              "onUpdate:displayDate": $event => displayDate.value = $event,
              "inputMode": inputMode.value,
              "onUpdate:inputMode": $event => inputMode.value = $event,
              "viewMode": viewMode.value,
              "onUpdate:viewMode": $event => viewMode.value = $event,
              "onSave": onSave,
              "onCancel": onCancel
            }, null);
          }
        })
      });
    });
  }
});
//# sourceMappingURL=VDateInput.mjs.map