import { createVNode as _createVNode, mergeProps as _mergeProps, Fragment as _Fragment } from "/js/vue.js";
// @ts-nocheck
/* eslint-disable */

// Styles
import "./VDateRangeCard.css";

// Components
import { makeVDatePickerControlsProps, VDatePickerControls } from "../VDatePicker/VDatePickerControls.mjs";
import { makeVDatePickerMonthProps, VDatePickerMonth } from "../VDatePicker/VDatePickerMonth.mjs";
import { makeVDatePickerYearsProps, VDatePickerYears } from "../VDatePicker/VDatePickerYears.mjs";
import { VCard } from "../../components/VCard/index.mjs"; // Composables
import { createDatePicker } from "../VDatePicker/composables.mjs";
import { makeTransitionProps } from "../../composables/transition.mjs"; // Utilities
import { ref } from "/js/vue.js";
import { defineComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
import { dateEmits, makeDateProps } from "../VDateInput/composables.mjs";
import { useDate } from "../date/index.mjs";
export const makeVDateRangeCardProps = propsFactory({
  ...makeDateProps(),
  ...makeVDatePickerControlsProps(),
  ...makeVDatePickerMonthProps(),
  ...makeVDatePickerYearsProps(),
  ...makeTransitionProps({
    transition: 'fade'
  })
}, 'VDateRangeCard');
export const VDateRangeCard = defineComponent({
  name: 'VDateRangeCard',
  props: makeVDateRangeCardProps(),
  emits: {
    ...dateEmits
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const adapter = useDate();
    createDatePicker(props);
    const hoverDate = ref(null);
    useRender(() => {
      const [cardProps] = VCard.filterProps(props);
      const [datePickerControlsProps] = VDatePickerControls.filterProps(props);
      const [datePickerMonthProps] = VDatePickerMonth.filterProps(props);
      const [datePickerYearsProps] = VDatePickerYears.filterProps(props);
      return _createVNode(VCard, _mergeProps(cardProps, {
        "class": "v-date-range-card"
      }), {
        default: () => [props.viewMode === 'month' ? _createVNode(_Fragment, null, [_createVNode("div", {
          "class": "v-date-range-card__start"
        }, [_createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "onUpdate:displayDate": displayDate => emit('update:displayDate', displayDate),
          "onUpdate:viewMode": viewMode => emit('update:viewMode', viewMode),
          "range": "start"
        }), null), _createVNode(VDatePickerMonth, _mergeProps(datePickerMonthProps, {
          "onUpdate:modelValue": modelValue => emit('update:modelValue', modelValue),
          "hoverDate": hoverDate.value,
          "onUpdate:hoverDate": $event => hoverDate.value = $event,
          "multiple": true,
          "side": "start"
        }), null)]), _createVNode("div", {
          "class": "v-date-range-card__divider"
        }, null), _createVNode("div", {
          "class": "v-date-range-card__end"
        }, [_createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "onUpdate:displayDate": displayDate => emit('update:displayDate', displayDate),
          "onUpdate:viewMode": viewMode => emit('update:viewMode', viewMode),
          "range": "end"
        }), null), _createVNode(VDatePickerMonth, _mergeProps(datePickerMonthProps, {
          "onUpdate:modelValue": modelValue => emit('update:modelValue', modelValue),
          "displayDate": adapter.addMonths(props.displayDate, 1),
          "hoverDate": hoverDate.value,
          "onUpdate:hoverDate": $event => hoverDate.value = $event,
          "multiple": true,
          "side": "end"
        }), null)])]) : _createVNode("div", {
          "class": "v-date-range-card__years"
        }, [_createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "onUpdate:displayDate": displayDate => emit('update:displayDate', displayDate),
          "onUpdate:viewMode": viewMode => emit('update:viewMode', viewMode)
        }), null), _createVNode(VDatePickerYears, _mergeProps(datePickerYearsProps, {
          "onUpdate:displayDate": displayDate => emit('update:displayDate', displayDate),
          "onUpdate:viewMode": viewMode => emit('update:viewMode', viewMode)
        }), null)])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDateRangeCard.mjs.map