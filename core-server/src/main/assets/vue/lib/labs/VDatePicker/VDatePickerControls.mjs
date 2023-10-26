import { Fragment as _Fragment, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDatePickerControls.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VSpacer } from "../../components/VGrid/index.mjs"; // Utilities
import { computed } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDatePickerControlsProps = propsFactory({
  displayDate: String,
  disabled: {
    type: [Boolean, String, Array],
    default: false
  },
  nextIcon: {
    type: [String],
    default: '$next'
  },
  prevIcon: {
    type: [String],
    default: '$prev'
  },
  modeIcon: {
    type: [String],
    default: '$subgroup'
  },
  variant: {
    type: String,
    default: 'modern'
  },
  viewMode: {
    type: String,
    default: 'month'
  }
}, 'VDatePickerControls');
export const VDatePickerControls = genericComponent()({
  name: 'VDatePickerControls',
  props: makeVDatePickerControlsProps(),
  emits: {
    'click:mode': () => true,
    'click:prev': () => true,
    'click:next': () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const disableMode = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('mode') : !!props.disabled;
    });
    const disablePrev = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('prev') : !!props.disabled;
    });
    const disableNext = computed(() => {
      return Array.isArray(props.disabled) ? props.disabled.includes('next') : !!props.disabled;
    });
    function onClickPrev() {
      emit('click:prev');
    }
    function onClickNext() {
      emit('click:next');
    }
    function onClickMode() {
      emit('click:mode');
    }
    useRender(() => {
      const displayDate = _createVNode("div", {
        "class": "v-date-picker-controls__date"
      }, [props.displayDate]);
      return _createVNode("div", {
        "class": ['v-date-picker-controls', `v-date-picker-controls--variant-${props.variant}`]
      }, [props.variant === 'modern' && _createVNode(_Fragment, null, [displayDate, _createVNode(VBtn, {
        "key": "mode-btn",
        "disabled": disableMode.value,
        "density": "comfortable",
        "icon": props.modeIcon,
        "variant": "text",
        "onClick": onClickMode
      }, null), _createVNode(VSpacer, {
        "key": "mode-spacer"
      }, null)]), _createVNode("div", {
        "key": "month-buttons",
        "class": "v-date-picker-controls__month"
      }, [_createVNode(VBtn, {
        "disabled": disablePrev.value,
        "icon": props.prevIcon,
        "variant": "text",
        "onClick": onClickPrev
      }, null), props.variant === 'classic' && displayDate, _createVNode(VBtn, {
        "disabled": disableNext.value,
        "icon": props.nextIcon,
        "variant": "text",
        "onClick": onClickNext
      }, null)])]);
    });
    return {};
  }
});
//# sourceMappingURL=VDatePickerControls.mjs.map