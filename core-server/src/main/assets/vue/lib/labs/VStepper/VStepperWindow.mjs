import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "/js/vue.js";
// Components
import { makeVWindowProps, VWindow } from "../../components/VWindow/VWindow.mjs"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, inject } from "/js/vue.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const VStepperSymbol = Symbol.for('vuetify:v-stepper');
export const makeVStepperWindowProps = propsFactory({
  ...makeVWindowProps({
    mandatory: false
  })
}, 'VStepperWindow');
export const VStepperWindow = genericComponent()({
  name: 'VStepperWindow',
  props: makeVStepperWindowProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VStepperSymbol, null);
    const _model = useProxiedModel(props, 'modelValue');
    const model = computed({
      get() {
        // Always return modelValue if defined
        // or if not within a VStepper group
        if (_model.value != null || !group) return _model.value;

        // If inside of a VStepper, find the currently selected
        // item by id. Item value may be assigned by its index
        return group.items.value.find(item => group.selected.value.includes(item.id))?.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const [windowProps] = VWindow.filterProps(props);
      return _createVNode(VWindow, _mergeProps(windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": "v-stepper-window"
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VStepperWindow.mjs.map