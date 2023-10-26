import { createVNode as _createVNode } from "/js/vue.js";
// Composables
import { makeComponentProps } from "../../composables/component.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVBannerActionsProps = propsFactory({
  color: String,
  density: String,
  ...makeComponentProps()
}, 'VBannerActions');
export const VBannerActions = genericComponent()({
  name: 'VBannerActions',
  props: makeVBannerActionsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: props.color,
        density: props.density,
        variant: 'text'
      }
    });
    useRender(() => _createVNode("div", {
      "class": ['v-banner-actions', props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VBannerActions.mjs.map