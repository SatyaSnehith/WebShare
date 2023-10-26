import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDateRangePickerHeader.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs"; // Composables
import { useBackgroundColor } from "../../composables/color.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useDate } from "../date/index.mjs";
import { makeDateProps } from "../VDateInput/composables.mjs"; // Utilities
import { computed } from "/js/vue.js";
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.mjs";
export const makeVDateRangePickerHeaderProps = propsFactory({
  color: String,
  title: String,
  header: String,
  keyboardIcon: {
    type: String,
    default: '$edit'
  },
  calendarIcon: {
    type: String,
    default: '$calendar'
  },
  closeIcon: {
    type: String,
    default: '$close'
  },
  showInputSwitch: Boolean,
  range: null,
  ...omit(makeDateProps(), ['viewMode', 'format'])
}, 'VDateRangePickerHeader');
export const VDateRangePickerHeader = genericComponent()({
  name: 'VDateRangePickerHeader',
  props: makeVDateRangePickerHeaderProps(),
  emits: {
    cancel: () => true,
    save: () => true,
    'update:inputMode': input => true,
    'update:displayDate': date => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      t
    } = useLocale();
    const adapter = useDate();
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, 'color');
    const headerText = computed(() => {
      if (props.header) return props.header;
      if (!props.modelValue.length) return t(`$vuetify.datePicker.${props.range ? 'range.' : ''}header.placeholder`);
      if (props.modelValue.length === 1) return adapter.format(props.modelValue[0], 'normalDateWithWeekday');
      return props.modelValue.map(date => adapter.format(date, 'shortDate')).join(' - ');
    });
    const titleText = computed(() => {
      if (props.title) return props.title;
      if (!props.modelValue.length) return t(`$vuetify.datePicker.${props.range ? 'range.' : ''}title.placeholder`);
      return t(`$vuetify.datePicker.${props.range ? 'range.' : ''}title.selected`);
    });
    function handleHeaderClick() {
      if (!props.modelValue.length) return;
      const date = props.modelValue[0];
      emit('update:displayDate', date);
    }
    useRender(() => _createVNode("div", {
      "class": ['v-date-range-picker-header', backgroundColorClasses.value, `v-date-range-picker-header--${props.inputMode}`],
      "style": backgroundColorStyles.value
    }, [props.inputMode === 'calendar' && _createVNode("div", {
      "key": "calendar-buttons",
      "class": "v-date-range-picker-header__buttons"
    }, [_createVNode(VBtn, {
      "variant": "text",
      "icon": props.closeIcon,
      "onClick": () => emit('cancel')
    }, null), _createVNode(VBtn, {
      "variant": "text",
      "onClick": () => emit('save')
    }, {
      default: () => [_createTextVNode("Save")]
    })]), _createVNode("div", {
      "class": "v-date-range-picker-header__wrapper"
    }, [_createVNode("div", {
      "class": "v-date-range-picker-header__title"
    }, [titleText.value]), _createVNode("div", {
      "class": "v-date-range-picker-header__text"
    }, [_createVNode("div", {
      "class": "v-date-range-picker-header__date",
      "onClick": handleHeaderClick
    }, [headerText.value]), _createVNode(VBtn, {
      "variant": "text",
      "icon": props.inputMode === 'keyboard' ? props.calendarIcon : props.keyboardIcon,
      "onClick": () => emit('update:inputMode', props.inputMode === 'keyboard' ? 'calendar' : 'keyboard')
    }, null)])])]));
    return {};
  }
});
//# sourceMappingURL=VDateRangePickerHeader.mjs.map