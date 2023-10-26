import { createVNode as _createVNode } from "/js/vue.js";
// Composables
import { makeComponentProps } from "../../composables/component.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { genericComponent, useRender } from "../../util/index.mjs";
export const VCardActions = genericComponent()({
  name: 'VCardActions',
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: 'text'
      }
    });
    useRender(() => _createVNode("div", {
      "class": ['v-card-actions', props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VCardActions.mjs.map