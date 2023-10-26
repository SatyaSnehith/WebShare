import { resolveDirective as _resolveDirective, mergeProps as _mergeProps, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDateRangeInput.css";

// Components
import { VDateRangeCard, VDateRangePicker } from "../VDateRangePicker/index.mjs";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/index.mjs";
import { VDialog } from "../../components/VDialog/index.mjs";
import { VMenu } from "../../components/VMenu/index.mjs";
import { VTextField } from "../../components/VTextField/index.mjs"; // Composables
import { createDateInput, dateEmits, makeDateProps } from "./composables.mjs";
import { useDisplay, useLocale } from "../../composables/index.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { ref, toRef, watch } from "/js/vue.js";
import { genericComponent, useRender } from "../../util/index.mjs"; // Types
export const VDateRangeInput = genericComponent()({
  name: 'VDateRangeInput',
  props: {
    color: String,
    prependIcon: {
      type: String,
      default: '$calendar'
    },
    placeholder: {
      type: String,
      default: 'mm/dd/yyyy'
    },
    fromLabel: String,
    toLabel: String,
    dividerText: {
      type: String,
      default: '$vuetify.dateRangeInput.divider'
    },
    mobile: Boolean,
    ...makeDateProps(),
    modelValue: {
      type: null
    },
    displayDate: {
      type: null
    }
  },
  emits: {
    ...dateEmits
  },
  setup(props) {
    const {
      t
    } = useLocale();
    const {
      adapter,
      model,
      inputMode,
      viewMode,
      displayDate
    } = createDateInput(props, true);
    const startInput = ref(model.value.length ? adapter.format(model.value[0], 'keyboardDate') : '');
    const endInput = ref(model.value.length > 1 ? adapter.format(model.value[1], 'keyboardDate') : '');
    function handleBlur(index) {
      const {
        isValid,
        isSameDay,
        date
      } = adapter;
      if (index === 0 && isValid(startInput.value)) {
        const newDate = date(startInput.value);
        if (!isSameDay(newDate, model.value[0])) {
          model.value = [newDate, model.value[1]];
          displayDate.value = newDate;
        }
      } else if (index === 1 && isValid(endInput.value)) {
        const newDate = date(endInput.value);
        if (!isSameDay(newDate, model.value[1])) {
          model.value = [model.value[0], newDate];
          displayDate.value = newDate;
        }
      }
    }
    watch(model, newValue => {
      if (!newValue.length) return;
      if (newValue[0]) {
        startInput.value = adapter.format(newValue[0], 'keyboardDate');
      }
      if (newValue[1]) {
        endInput.value = adapter.format(newValue[1], 'keyboardDate');
      }
    });
    const {
      mobile
    } = useDisplay();
    provideDefaults({
      VTextField: {
        color: toRef(props, 'color')
      }
    });
    useRender(() => {
      if (mobile.value) {
        return _createVNode(VDialog, {
          "fullscreen": inputMode.value === 'calendar',
          "contentClass": "v-date-range-input__dialog-content"
        }, {
          activator: _ref => {
            let {
              props: slotProps
            } = _ref;
            return _createVNode("div", _mergeProps({
              "class": "v-date-range-input"
            }, slotProps), [_createVNode(VTextField, {
              "modelValue": startInput.value,
              "onBlur": () => handleBlur(0),
              "prependInnerIcon": props.prependIcon,
              "placeholder": props.placeholder,
              "label": props.fromLabel
            }, null), _createVNode("div", {
              "class": "v-date-range-input__divider"
            }, [t(props.dividerText)]), _createVNode(VTextField, {
              "modelValue": endInput.value,
              "onBlur": () => handleBlur(1),
              "prependInnerIcon": props.prependIcon,
              "placeholder": props.placeholder,
              "label": props.toLabel
            }, null)]);
          },
          default: _ref2 => {
            let {
              isActive
            } = _ref2;
            return _createVNode(VDateRangePicker, {
              "modelValue": model.value,
              "onUpdate:modelValue": $event => model.value = $event,
              "displayDate": displayDate.value,
              "onUpdate:displayDate": $event => displayDate.value = $event,
              "viewMode": viewMode.value,
              "onUpdate:viewMode": $event => viewMode.value = $event,
              "inputMode": inputMode.value,
              "onUpdate:inputMode": $event => inputMode.value = $event,
              "onSave": () => {
                isActive.value = false;
              },
              "onCancel": () => {
                isActive.value = false;
              }
            }, null);
          }
        });
      }
      return _createVNode(VDefaultsProvider, {
        "defaults": {
          VOverlay: {
            minWidth: '100%'
          }
        }
      }, {
        default: () => [_createVNode("div", {
          "class": "v-date-range-input"
        }, [_createVNode(VMenu, {
          "offset": [-28, 0],
          "closeOnContentClick": false,
          "contentClass": "foo"
        }, {
          activator: _ref3 => {
            let {
              props: slotProps
            } = _ref3;
            return _createVNode("div", _mergeProps(slotProps, {
              "style": "flex: 1 1 auto;"
            }), [_createVNode(VTextField, {
              "modelValue": startInput.value,
              "onUpdate:modelValue": $event => startInput.value = $event,
              "onBlur": () => handleBlur(0),
              "prependInnerIcon": props.prependIcon,
              "placeholder": props.placeholder,
              "label": props.fromLabel
            }, null)]);
          },
          default: () => _createVNode(VDateRangeCard, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "displayDate": displayDate.value,
            "onUpdate:displayDate": $event => displayDate.value = $event,
            "viewMode": viewMode.value,
            "onUpdate:viewMode": $event => viewMode.value = $event,
            "inputMode": inputMode.value,
            "onUpdate:inputMode": $event => inputMode.value = $event
          }, null)
        }), _createVNode("div", {
          "class": "v-date-range-input__divider"
        }, [t(props.dividerText)]), _createVNode(VMenu, {
          "key": "bar",
          "offset": [-28, 0],
          "closeOnContentClick": false
        }, {
          activator: _ref4 => {
            let {
              props: slotProps
            } = _ref4;
            return _createVNode("div", _mergeProps(slotProps, {
              "style": "flex: 1 1 auto;"
            }), [_createVNode(VTextField, {
              "modelValue": endInput.value,
              "onUpdate:modelValue": $event => endInput.value = $event,
              "onBlur": () => handleBlur(1),
              "prependInnerIcon": props.prependIcon,
              "placeholder": props.placeholder,
              "label": props.toLabel
            }, null)]);
          },
          default: () => _createVNode(VDateRangeCard, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "displayDate": displayDate.value,
            "onUpdate:displayDate": $event => displayDate.value = $event,
            "viewMode": viewMode.value,
            "onUpdate:viewMode": $event => viewMode.value = $event,
            "inputMode": inputMode.value,
            "onUpdate:inputMode": $event => inputMode.value = $event
          }, null)
        })])]
      });
    });
  }
});
//# sourceMappingURL=VDateRangeInput.mjs.map