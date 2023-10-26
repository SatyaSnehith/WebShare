import { resolveDirective as _resolveDirective, Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDatePicker.css";

// Components
import { makeVDatePickerControlsProps, VDatePickerControls } from "./VDatePickerControls.mjs";
import { VDatePickerHeader } from "./VDatePickerHeader.mjs";
import { makeVDatePickerMonthProps, VDatePickerMonth } from "./VDatePickerMonth.mjs";
import { makeVDatePickerYearsProps, VDatePickerYears } from "./VDatePickerYears.mjs";
import { VFadeTransition } from "../../components/transitions/index.mjs";
import { VBtn } from "../../components/VBtn/index.mjs";
import { VTextField } from "../../components/VTextField/index.mjs";
import { dateEmits, makeDateProps } from "../VDateInput/composables.mjs";
import { makeVPickerProps, VPicker } from "../VPicker/VPicker.mjs"; // Composables
import { createDatePicker } from "./composables.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useDate } from "../date/index.mjs"; // Utilities
import { computed, ref, shallowRef, watch } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDatePickerProps = propsFactory({
  calendarIcon: {
    type: String,
    default: '$calendar'
  },
  keyboardIcon: {
    type: String,
    default: '$edit'
  },
  cancelText: {
    type: String,
    default: '$vuetify.datePicker.cancel'
  },
  okText: {
    type: String,
    default: '$vuetify.datePicker.ok'
  },
  inputText: {
    type: String,
    default: '$vuetify.datePicker.input.placeholder'
  },
  inputPlaceholder: {
    type: String,
    default: 'dd/mm/yyyy'
  },
  header: {
    type: String,
    default: '$vuetify.datePicker.header'
  },
  hideActions: Boolean,
  ...makeDateProps(),
  ...makeVDatePickerControlsProps(),
  ...makeVDatePickerMonthProps(),
  ...makeVDatePickerYearsProps(),
  ...makeVPickerProps({
    title: '$vuetify.datePicker.title'
  })
}, 'VDatePicker');
export const VDatePicker = genericComponent()({
  name: 'VDatePicker',
  props: makeVDatePickerProps(),
  emits: {
    'click:cancel': () => true,
    'click:save': () => true,
    ...dateEmits
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      t
    } = useLocale();
    const {
      model,
      displayDate,
      viewMode,
      inputMode,
      isEqual
    } = createDatePicker(props);
    const isReversing = shallowRef(false);
    const inputModel = ref(model.value.map(date => adapter.format(date, 'keyboardDate')));
    const temporaryModel = ref(model.value);
    const title = computed(() => {
      return props.variant === 'modern' ? t(props.title) : adapter.format(displayDate.value, 'shortDate');
    });
    const header = computed(() => model.value.length ? adapter.format(model.value[0], 'normalDateWithWeekday') : t(props.header));
    const headerIcon = computed(() => inputMode.value === 'calendar' ? props.keyboardIcon : props.calendarIcon);
    const headerTransition = computed(() => `date-picker-header${isReversing.value ? '-reverse' : ''}-transition`);
    const minDate = computed(() => props.min && adapter.isValid(props.min) ? adapter.date(props.min) : null);
    const maxDate = computed(() => props.max && adapter.isValid(props.max) ? adapter.date(props.max) : null);
    const disabled = computed(() => {
      if (!minDate.value && !maxDate.value) return false;
      const targets = [];
      if (minDate.value) {
        const date = adapter.addDays(adapter.startOfMonth(displayDate.value), -1);
        adapter.isAfter(minDate.value, date) && targets.push('prev');
      }
      if (maxDate.value) {
        const date = adapter.addDays(adapter.endOfMonth(displayDate.value), 1);
        adapter.isAfter(date, maxDate.value) && targets.push('next');
      }
      if (minDate.value?.getFullYear() === maxDate.value?.getFullYear()) {
        targets.push('mode');
      }
      return targets;
    });
    watch(model, val => {
      if (!isEqual(val, temporaryModel.value)) {
        temporaryModel.value = val;
      }
      inputModel.value = val.map(date => adapter.format(date, 'keyboardDate'));
    });
    watch(temporaryModel, (val, oldVal) => {
      if (props.hideActions && !isEqual(val, model.value)) {
        model.value = val;
      }
      if (val[0] && oldVal[0]) {
        isReversing.value = adapter.isBefore(val[0], oldVal[0]);
      }
    });
    function updateFromInput(input, index) {
      const {
        isValid,
        date,
        isAfter
      } = adapter;
      const inputDate = date(input);
      if (isValid(input) && (!minDate.value || !isAfter(minDate.value, inputDate)) && (!maxDate.value || !isAfter(inputDate, maxDate.value))) {
        const newModel = model.value.slice();
        newModel[index] = date(input);
        if (props.hideActions) {
          model.value = newModel;
        } else {
          temporaryModel.value = newModel;
        }
      }
    }
    function onClickCancel() {
      emit('click:cancel');
    }
    function onClickSave() {
      emit('click:save');
      model.value = temporaryModel.value;
    }
    function onClickAppend() {
      inputMode.value = inputMode.value === 'calendar' ? 'keyboard' : 'calendar';
    }
    function onClickNext() {
      displayDate.value = adapter.addMonths(displayDate.value, 1);
    }
    function onClickPrev() {
      displayDate.value = adapter.addMonths(displayDate.value, -1);
    }
    function onClickMode() {
      viewMode.value = viewMode.value === 'month' ? 'year' : 'month';
    }
    function onClickHeader() {
      viewMode.value = 'month';
    }
    const headerSlotProps = computed(() => ({
      header: header.value,
      appendIcon: headerIcon.value,
      transition: headerTransition.value,
      'onClick:append': onClickAppend
    }));
    useRender(() => {
      const [pickerProps] = VPicker.filterProps(props);
      const [datePickerControlsProps] = VDatePickerControls.filterProps(props);
      const [datePickerMonthProps] = VDatePickerMonth.filterProps(props);
      const [datePickerYearsProps] = VDatePickerYears.filterProps(props);
      return _createVNode(VPicker, _mergeProps(pickerProps, {
        "class": ['v-date-picker', `v-date-picker--${viewMode.value}`, props.class],
        "style": props.style,
        "width": props.showWeek ? 408 : 360
      }), {
        title: () => slots.title?.() ?? _createVNode("div", {
          "class": "v-date-picker__title",
          "onClick": props.variant === 'classic' ? onClickMode : undefined
        }, [title.value]),
        header: () => slots.header?.(headerSlotProps.value) ?? _createVNode(VDatePickerHeader, _mergeProps({
          "key": "header"
        }, headerSlotProps.value, {
          "onClick": viewMode.value === 'year' ? onClickHeader : undefined
        }), null),
        default: () => inputMode.value === 'calendar' ? _createVNode(_Fragment, null, [(props.variant !== 'classic' || viewMode.value !== 'year') && _createVNode(VDatePickerControls, _mergeProps(datePickerControlsProps, {
          "disabled": disabled.value,
          "displayDate": adapter.format(displayDate.value, 'monthAndYear'),
          "onClick:next": onClickNext,
          "onClick:prev": onClickPrev,
          "onClick:mode": onClickMode
        }), null), _createVNode(VFadeTransition, {
          "hideOnLeave": true
        }, {
          default: () => [viewMode.value === 'month' ? _createVNode(VDatePickerMonth, _mergeProps({
            "key": "date-picker-month"
          }, datePickerMonthProps, {
            "modelValue": temporaryModel.value,
            "onUpdate:modelValue": $event => temporaryModel.value = $event,
            "displayDate": displayDate.value,
            "min": minDate.value,
            "max": maxDate.value
          }), null) : _createVNode(VDatePickerYears, _mergeProps({
            "key": "date-picker-years"
          }, datePickerYearsProps, {
            "displayDate": displayDate.value,
            "onUpdate:displayDate": $event => displayDate.value = $event,
            "min": minDate.value,
            "max": maxDate.value,
            "onClick:mode": onClickMode
          }), null)]
        })]) : _createVNode("div", {
          "class": "v-date-picker__input"
        }, [_createVNode(VTextField, {
          "modelValue": inputModel.value[0],
          "onUpdate:modelValue": v => updateFromInput(v, 0),
          "label": t(props.inputText),
          "placeholder": props.inputPlaceholder
        }, null)]),
        actions: () => !props.hideActions ? slots.actions?.() ?? _createVNode("div", null, [_createVNode(VBtn, {
          "variant": "text",
          "color": props.color,
          "onClick": onClickCancel,
          "text": t(props.cancelText)
        }, null), _createVNode(VBtn, {
          "variant": "text",
          "color": props.color,
          "onClick": onClickSave,
          "text": t(props.okText)
        }, null)]) : undefined
      });
    });
    return {};
  }
});
//# sourceMappingURL=VDatePicker.mjs.map