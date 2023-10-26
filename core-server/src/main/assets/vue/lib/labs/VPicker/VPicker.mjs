import { mergeProps as _mergeProps, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VPicker.css";

// Components
import { VPickerTitle } from "./VPickerTitle.mjs";
import { makeVSheetProps, VSheet } from "../../components/VSheet/VSheet.mjs"; // Composables
import { useBackgroundColor } from "../../composables/color.mjs"; // Utilities
import { toRef } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVPickerProps = propsFactory({
  bgColor: String,
  landscape: Boolean,
  title: String,
  ...makeVSheetProps()
}, 'VPicker');
export const VPicker = genericComponent()({
  name: 'VPicker',
  props: makeVPickerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, 'color'));
    useRender(() => {
      const [sheetProps] = VSheet.filterProps(props);
      const hasTitle = !!(props.title || slots.title);
      return _createVNode(VSheet, _mergeProps(sheetProps, {
        "color": props.bgColor,
        "class": ['v-picker', {
          'v-picker--landscape': props.landscape,
          'v-picker--with-actions': !!slots.actions
        }, props.class],
        "style": props.style
      }), {
        default: () => [_createVNode("div", {
          "class": [backgroundColorClasses.value],
          "style": [backgroundColorStyles.value]
        }, [hasTitle && _createVNode(VPickerTitle, {
          "key": "picker-title"
        }, {
          default: () => [slots.title?.() ?? props.title]
        }), slots.header && _createVNode("div", {
          "class": "v-picker__header"
        }, [slots.header()])]), _createVNode("div", {
          "class": "v-picker__body"
        }, [slots.default?.()]), slots.actions?.()[0]?.children && _createVNode("div", {
          "class": "v-picker__actions"
        }, [slots.actions()])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VPicker.mjs.map