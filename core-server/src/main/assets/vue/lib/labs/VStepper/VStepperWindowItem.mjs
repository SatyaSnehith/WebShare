import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "/js/vue.js";
// Components
import { makeVWindowItemProps, VWindowItem } from "../../components/VWindow/VWindowItem.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVStepperWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, 'VStepperWindowItem');
export const VStepperWindowItem = genericComponent()({
  name: 'VStepperWindowItem',
  props: makeVStepperWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const [windowItemProps] = VWindowItem.filterProps(props);
      return _createVNode(VWindowItem, _mergeProps(windowItemProps, {
        "class": "v-stepper-window-item"
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VStepperWindowItem.mjs.map