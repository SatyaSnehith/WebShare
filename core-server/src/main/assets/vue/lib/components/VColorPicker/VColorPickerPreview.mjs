import { createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VColorPickerPreview.css";

// Components
import { VSlider } from "../VSlider/index.mjs"; // Composables
import { makeComponentProps } from "../../composables/component.mjs"; // Utilities
import { nullColor } from "./util/index.mjs";
import { defineComponent, HSVtoCSS, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVColorPickerPreviewProps = propsFactory({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...makeComponentProps()
}, 'VColorPickerPreview');
export const VColorPickerPreview = defineComponent({
  name: 'VColorPickerPreview',
  props: makeVColorPickerPreviewProps(),
  emits: {
    'update:color': color => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    useRender(() => _createVNode("div", {
      "class": ['v-color-picker-preview', {
        'v-color-picker-preview--hide-alpha': props.hideAlpha
      }, props.class],
      "style": props.style
    }, [_createVNode("div", {
      "class": "v-color-picker-preview__dot"
    }, [_createVNode("div", {
      "style": {
        background: HSVtoCSS(props.color ?? nullColor)
      }
    }, null)]), _createVNode("div", {
      "class": "v-color-picker-preview__sliders"
    }, [_createVNode(VSlider, {
      "class": "v-color-picker-preview__track v-color-picker-preview__hue",
      "modelValue": props.color?.h,
      "onUpdate:modelValue": h => emit('update:color', {
        ...(props.color ?? nullColor),
        h
      }),
      "step": 0,
      "min": 0,
      "max": 360,
      "disabled": props.disabled,
      "thumbSize": 14,
      "trackSize": 8,
      "trackFillColor": "white",
      "hideDetails": true
    }, null), !props.hideAlpha && _createVNode(VSlider, {
      "class": "v-color-picker-preview__track v-color-picker-preview__alpha",
      "modelValue": props.color?.a ?? 1,
      "onUpdate:modelValue": a => emit('update:color', {
        ...(props.color ?? nullColor),
        a
      }),
      "step": 1 / 256,
      "min": 0,
      "max": 1,
      "disabled": props.disabled,
      "thumbSize": 14,
      "trackSize": 8,
      "trackFillColor": "white",
      "hideDetails": true
    }, null)])]));
    return {};
  }
});
//# sourceMappingURL=VColorPickerPreview.mjs.map