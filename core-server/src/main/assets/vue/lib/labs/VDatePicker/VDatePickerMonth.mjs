import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "/js/vue.js";
// Styles
import "./VDatePickerMonth.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs"; // Composables
import { useDatePicker } from "./composables.mjs";
import { useBackgroundColor } from "../../composables/color.mjs"; // Utilities
import { computed, ref } from "/js/vue.js";
import { genericComponent, omit, propsFactory } from "../../util/index.mjs"; // Types
import { getWeek, toIso } from "../date/date.mjs";
import { dateEmits, makeDateProps } from "../VDateInput/composables.mjs";
import { useDate } from "../date/index.mjs";
export const makeVDatePickerMonthProps = propsFactory({
  allowedDates: [Array, Function],
  color: String,
  showAdjacentMonths: Boolean,
  hideWeekdays: Boolean,
  showWeek: Boolean,
  hoverDate: null,
  multiple: Boolean,
  side: {
    type: String
  },
  min: [Number, String, Date],
  max: [Number, String, Date],
  ...omit(makeDateProps(), ['inputMode', 'viewMode'])
}, 'VDatePickerMonth');
export const VDatePickerMonth = genericComponent()({
  name: 'VDatePickerMonth',
  props: makeVDatePickerMonthProps({
    color: 'surface-variant'
  }),
  emits: {
    ...omit(dateEmits, ['update:inputMode', 'update:viewMode']),
    'update:hoverDate': date => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      isDragging,
      dragHandle,
      hasScrolled
    } = useDatePicker();
    const month = computed(() => props.displayDate);
    const findClosestDate = (date, dates) => {
      const {
        isSameDay,
        getDiff
      } = adapter;
      const [startDate, endDate] = dates;
      if (isSameDay(startDate, endDate)) {
        return getDiff(date, startDate, 'days') > 0 ? endDate : startDate;
      }
      const distStart = Math.abs(getDiff(date, startDate));
      const distEnd = Math.abs(getDiff(date, endDate));
      return distStart < distEnd ? startDate : endDate;
    };

    // const hoverRange = computed<[any, any] | null>(() => {
    //   if (!props.hoverDate) return null

    //   const closestDate = findClosestDate(props.hoverDate, props.modelValue)

    //   if (!closestDate) return null

    //   return adapter.isAfter(props.hoverDate, closestDate) ? [closestDate, props.hoverDate] : [props.hoverDate, closestDate]
    // })

    const weeksInMonth = computed(() => {
      const weeks = adapter.getWeekArray(month.value);
      const days = weeks.flat();

      // Make sure there's always 6 weeks in month (6 * 7 days)
      // But only do it if we're not hiding adjacent months?
      const daysInMonth = 6 * 7;
      if (days.length < daysInMonth && props.showAdjacentMonths) {
        const lastDay = days[days.length - 1];
        let week = [];
        for (let day = 1; day <= daysInMonth - days.length; day++) {
          week.push(adapter.addDays(lastDay, day));
          if (day % 7 === 0) {
            weeks.push(week);
            week = [];
          }
        }
      }
      return weeks;
    });
    const daysInMonth = computed(() => {
      const validDates = props.modelValue.filter(v => !!v);
      const isRange = validDates.length > 1;
      const days = weeksInMonth.value.flat();
      const today = adapter.date();
      const startDate = validDates[0];
      const endDate = validDates[1];
      return days.map((date, index) => {
        const isStart = startDate && adapter.isSameDay(date, startDate);
        const isEnd = endDate && adapter.isSameDay(date, endDate);
        const isAdjacent = !adapter.isSameMonth(date, month.value);
        const isSame = validDates.length === 2 && adapter.isSameDay(startDate, endDate);
        return {
          date,
          isoDate: toIso(adapter, date),
          formatted: adapter.format(date, 'keyboardDate'),
          year: adapter.getYear(date),
          month: adapter.getMonth(date),
          isDisabled: isDisabled(date),
          isWeekStart: index % 7 === 0,
          isWeekEnd: index % 7 === 6,
          isSelected: isStart || isEnd,
          isStart,
          isEnd,
          isToday: adapter.isSameDay(date, today),
          isAdjacent,
          isHidden: isAdjacent && !props.showAdjacentMonths,
          inRange: isRange && !isSame && (isStart || isEnd || validDates.length === 2 && adapter.isWithinRange(date, validDates)),
          // isHovered: props.hoverDate === date,
          // inHover: hoverRange.value && isWithinRange(date, hoverRange.value),
          isHovered: false,
          inHover: false,
          localized: adapter.format(date, 'dayOfMonth')
        };
      });
    });
    const weeks = computed(() => {
      return weeksInMonth.value.map(week => {
        return getWeek(adapter, week[0]);
      });
    });
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, 'color');
    function isDisabled(value) {
      const date = adapter.date(value);
      if (props.min && adapter.isAfter(props.min, date)) return true;
      if (props.max && adapter.isAfter(date, props.max)) return true;
      if (Array.isArray(props.allowedDates)) {
        return !props.allowedDates.some(d => adapter.isSameDay(adapter.date(d), date));
      }
      if (typeof props.allowedDates === 'function') {
        return !props.allowedDates(date);
      }
      return false;
    }
    function selectDate(date) {
      let newModel = props.modelValue.slice();
      if (props.multiple) {
        if (isDragging.value && dragHandle.value != null) {
          const otherIndex = (dragHandle.value + 1) % 2;
          const fn = otherIndex === 0 ? 'isBefore' : 'isAfter';
          if (adapter[fn](date, newModel[otherIndex])) {
            newModel[dragHandle.value] = newModel[otherIndex];
            newModel[otherIndex] = date;
            dragHandle.value = otherIndex;
          } else {
            newModel[dragHandle.value] = date;
          }
        } else {
          if (newModel.find(d => adapter.isSameDay(d, date))) {
            newModel = newModel.filter(v => !adapter.isSameDay(v, date));
          } else if (newModel.length === 2) {
            let index;
            if (!props.side || adapter.isSameMonth(newModel[0], newModel[1])) {
              const closest = findClosestDate(date, newModel);
              index = newModel.indexOf(closest);
            } else {
              index = props.side === 'start' ? 0 : props.side === 'end' ? 1 : undefined;
            }
            newModel = newModel.map((v, i) => i === index ? date : v);
          } else {
            if (newModel[0] && adapter.isBefore(newModel[0], date)) {
              newModel = [newModel[0], date];
            } else {
              newModel = [date, newModel[0]];
            }
          }
        }
      } else {
        newModel = [date];
      }
      emit('update:modelValue', newModel.filter(v => !!v));
    }
    const daysRef = ref();
    function findElement(el) {
      if (!el || el === daysRef.value) return null;
      if ('vDate' in el.dataset) {
        return adapter.date(el.dataset.vDate);
      }
      return findElement(el.parentElement);
    }
    function findDate(e) {
      const x = 'changedTouches' in e ? e.changedTouches[0]?.clientX : e.clientX;
      const y = 'changedTouches' in e ? e.changedTouches[0]?.clientY : e.clientY;
      const el = document.elementFromPoint(x, y);
      return findElement(el);
    }
    let canDrag = false;
    function handleMousedown(e) {
      hasScrolled.value = false;
      const selected = findDate(e);
      if (!selected) return;
      const modelIndex = props.modelValue.findIndex(d => adapter.isEqual(d, selected));
      if (modelIndex >= 0) {
        canDrag = true;
        dragHandle.value = modelIndex;
        window.addEventListener('touchmove', handleTouchmove, {
          passive: false
        });
        window.addEventListener('mousemove', handleTouchmove, {
          passive: false
        });
        e.preventDefault();
      }
      window.addEventListener('touchend', handleTouchend, {
        passive: false
      });
      window.addEventListener('mouseup', handleTouchend, {
        passive: false
      });
    }
    function handleTouchmove(e) {
      if (!canDrag) return;
      e.preventDefault();
      isDragging.value = true;
      const over = findDate(e);
      if (!over) return;
      selectDate(over);
    }
    function handleTouchend(e) {
      if (e.cancelable) e.preventDefault();
      window.removeEventListener('touchmove', handleTouchmove);
      window.removeEventListener('mousemove', handleTouchmove);
      window.removeEventListener('touchend', handleTouchend);
      window.removeEventListener('mouseup', handleTouchend);
      const end = findDate(e);
      if (!end) return;
      if (!hasScrolled.value) {
        selectDate(end);
      }
      isDragging.value = false;
      dragHandle.value = null;
      canDrag = false;
    }
    return () => _createVNode("div", {
      "class": "v-date-picker-month"
    }, [props.showWeek && _createVNode("div", {
      "key": "weeks",
      "class": "v-date-picker-month__weeks"
    }, [!props.hideWeekdays && _createVNode("div", {
      "key": "hide-week-days",
      "class": "v-date-picker-month__day"
    }, [_createTextVNode("\xA0")]), weeks.value.map(week => _createVNode("div", {
      "class": ['v-date-picker-month__day', 'v-date-picker-month__day--adjacent']
    }, [week]))]), _createVNode("div", {
      "ref": daysRef,
      "class": "v-date-picker-month__days",
      "onMousedown": handleMousedown,
      "onTouchstart": handleMousedown
    }, [!props.hideWeekdays && adapter.getWeekdays().map(weekDay => _createVNode("div", {
      "class": ['v-date-picker-month__day', 'v-date-picker-month__weekday']
    }, [weekDay])), daysInMonth.value.map((item, index) => {
      const color = item.isSelected || item.isToday ? props.color : item.isHovered || item.isDisabled ? undefined : 'transparent';
      const variant = item.isDisabled ? 'text' : (item.isToday || item.isHovered) && !item.isSelected ? 'outlined' : 'flat';
      return _createVNode("div", {
        "class": ['v-date-picker-month__day', {
          'v-date-picker-month__day--selected': item.isSelected,
          'v-date-picker-month__day--start': item.isStart,
          'v-date-picker-month__day--end': item.isEnd,
          'v-date-picker-month__day--adjacent': item.isAdjacent,
          'v-date-picker-month__day--hide-adjacent': item.isHidden,
          'v-date-picker-month__day--week-start': item.isWeekStart,
          'v-date-picker-month__day--week-end': item.isWeekEnd,
          'v-date-picker-month__day--hovered': item.isHovered
        }],
        "data-v-date": !item.isHidden && !item.isDisabled ? item.isoDate : undefined
      }, [item.inRange && _createVNode("div", {
        "key": "in-range",
        "class": ['v-date-picker-month__day--range', backgroundColorClasses.value],
        "style": backgroundColorStyles.value
      }, null), item.inHover && !item.isStart && !item.isEnd && !item.isHovered && !item.inRange && _createVNode("div", {
        "key": "in-hover",
        "class": "v-date-picker-month__day--hover"
      }, null), (props.showAdjacentMonths || !item.isAdjacent) && _createVNode(VBtn, {
        "color": !item.isToday || item.isSelected ? color : undefined,
        "disabled": item.isDisabled,
        "icon": true,
        "ripple": false,
        "variant": variant
      }, {
        default: () => [item.localized]
      })]);
    })])]);
  }
});
//# sourceMappingURL=VDatePickerMonth.mjs.map