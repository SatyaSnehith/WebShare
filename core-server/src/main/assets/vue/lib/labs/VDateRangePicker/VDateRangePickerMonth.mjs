import { mergeProps as _mergeProps, createVNode as _createVNode, Fragment as _Fragment } from "/js/vue.js";
// Styles
import "./VDateRangePickerMonth.css";

// Components
import { makeVDatePickerMonthProps, VDatePickerMonth } from "../VDatePicker/VDatePickerMonth.mjs"; // Composables
import { useDatePicker } from "../VDatePicker/composables.mjs"; // Utilities
import { computed, onMounted, ref } from "/js/vue.js";
import { useDate } from "../date/index.mjs";
import { createRange, genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVDateRangePickerMonthProps = propsFactory({
  ...makeVDatePickerMonthProps({
    hideWeekdays: true,
    multiple: true
  })
}, 'VDateRangePickerMonth');
export const VDateRangePickerMonth = genericComponent()({
  name: 'VDateRangePickerMonth',
  props: makeVDateRangePickerMonthProps(),
  emits: {
    'update:modelValue': date => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const adapter = useDate();
    const {
      hasScrolled
    } = useDatePicker();
    const months = computed(() => {
      const range = createRange(6, -3);
      return range.map(offset => adapter.addMonths(props.displayDate, offset));
    });
    const monthRef = ref();
    onMounted(() => {
      monthRef.value?.$el.scrollIntoView({
        block: 'center'
      });
    });
    function handleScroll() {
      hasScrolled.value = true;
    }
    useRender(() => {
      const [datePickerMonthProps] = VDatePickerMonth.filterProps(props);
      return _createVNode("div", {
        "class": "v-date-range-picker-month",
        "onScrollPassive": handleScroll
      }, [months.value.map(month => _createVNode(_Fragment, null, [_createVNode("div", {
        "class": "v-date-range-picker-month__header"
      }, [adapter.format(month, 'monthAndYear')]), _createVNode(VDatePickerMonth, _mergeProps({
        "ref": adapter.isSameMonth(month, props.displayDate) ? monthRef : undefined
      }, datePickerMonthProps, {
        "modelValue": props.modelValue,
        "onUpdate:modelValue": modelValue => emit('update:modelValue', modelValue),
        "displayDate": month
      }), null)]))]);
    });
  }
});
//# sourceMappingURL=VDateRangePickerMonth.mjs.map