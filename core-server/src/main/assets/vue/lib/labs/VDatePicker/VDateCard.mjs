import { createVNode as _createVNode, mergeProps as _mergeProps, Fragment as _Fragment } from "/js/vue.js";
// @ts-nocheck
/* eslint-disable */

// Styles
import "./VDateCard.css";

// Components
import { makeVDatePickerControlsProps, VDatePickerControls } from "./VDatePickerControls.mjs";
import { makeVDatePickerMonthProps, VDatePickerMonth } from "./VDatePickerMonth.mjs";
import { makeVDatePickerYearsProps, VDatePickerYears } from "./VDatePickerYears.mjs";
import { VFadeTransition } from "../../components/transitions/index.mjs";
import { VBtn } from "../../components/VBtn/index.mjs";
import { VCard } from "../../components/VCard/VCard.mjs"; // Composables
import { createDatePicker } from "./composables.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDateCardProps = propsFactory({
  cancelText: {
    type: String,
    default: '$vuetify.datePicker.cancel'
  },
  okText: {
    type: String,
    default: '$vuetify.datePicker.ok'
  },
  inputMode: {
    type: String,
    default: 'calendar'
  },
  hideActions: Boolean,
  ...makeVDatePickerControlsProps(),
  ...makeVDatePickerMonthProps(),
  ...makeVDatePickerYearsProps(),
  ...makeTransitionProps({
    transition: {
      component: VFadeTransition,
      leaveAbsolute: true
    }
  })
}, 'VDateCard');
export const VDateCard = genericComponent()({
  name: 'VDateCard',
  props: makeVDateCardProps(),
  emits: {
    save: () => true,
    cancel: () => true,
    'update:displayDate': value => true,
    'update:inputMode': value => true,
    'update:modelValue': value => true,
    'update:viewMode': mode => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      t
    } = useLocale();
    createDatePicker(props);
    function onDisplayUpdate(val) {
      emit('update:displayDate', val);
    }
    function onViewModeUpdate(val) {
      emit('update:viewMode', val);
    }
    function onSave() {
      emit('update:modelValue', model.value);
      emit('save');
    }
    function onCancel() {
      emit('cancel');
    }
    useRender(() => {
      const [cardProps] = VCard.filterProps(props);
      const [datePickerControlsProps] = VDatePickerControls.filterProps(props);
      const [datePickerMonthProps] = VDatePickerMonth.filterProps(props);
      const [datePickerYearsProps] = VDatePickerYears.filterProps(props);
      const hasActions = !props.hideActions || !!slots.actions;
      return _createVNode(VCard, _mergeProps(cardProps, {
        "class": "v-date-card"
      }), {
        ...slots,
        default: () => _createVNode(_Fragment, null, [_createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "onUpdate:displayDate": onDisplayUpdate,
          "onUpdate:viewMode": onViewModeUpdate
        }), null), _createVNode(MaybeTransition, {
          "transition": props.transition
        }, {
          default: () => [props.viewMode === 'month' ? _createVNode(VDatePickerMonth, _mergeProps(datePickerMonthProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "onUpdate:displayDate": onDisplayUpdate
          }), null) : _createVNode(VDatePickerYears, _mergeProps(datePickerYearsProps, {
            "onUpdate:displayDate": onDisplayUpdate,
            "onUpdate:viewMode": onViewModeUpdate
          }), null)]
        })]),
        actions: !hasActions ? undefined : () => _createVNode(_Fragment, null, [slots.actions?.() ?? _createVNode(_Fragment, null, [_createVNode(VBtn, {
          "onClick": onCancel,
          "text": t(props.cancelText)
        }, null), _createVNode(VBtn, {
          "onClick": onSave,
          "text": t(props.okText)
        }, null)])])
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDateCard.mjs.map