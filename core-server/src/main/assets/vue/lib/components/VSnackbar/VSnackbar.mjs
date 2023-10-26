import { mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VSnackbar.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VOverlay } from "../VOverlay/index.mjs";
import { makeVOverlayProps } from "../VOverlay/VOverlay.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { makeLocationProps, useLocation } from "../../composables/location.mjs";
import { makePositionProps, usePosition } from "../../composables/position.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { useScopeId } from "../../composables/scopeId.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.mjs"; // Utilities
import { mergeProps, onMounted, ref, watch } from "/js/vue.js";
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.mjs";
export const makeVSnackbarProps = propsFactory({
  multiLine: Boolean,
  timeout: {
    type: [Number, String],
    default: 5000
  },
  vertical: Boolean,
  ...makeLocationProps({
    location: 'bottom'
  }),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeVariantProps(),
  ...makeThemeProps(),
  ...omit(makeVOverlayProps({
    transition: 'v-snackbar-transition'
  }), ['persistent', 'noClickAnimation', 'scrim', 'scrollStrategy'])
}, 'VSnackbar');
export const VSnackbar = genericComponent()({
  name: 'VSnackbar',
  props: makeVSnackbarProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      scopeId
    } = useScopeId();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      roundedClasses
    } = useRounded(props);
    const overlay = ref();
    watch(isActive, startTimeout);
    watch(() => props.timeout, startTimeout);
    onMounted(() => {
      if (isActive.value) startTimeout();
    });
    let activeTimeout = -1;
    function startTimeout() {
      window.clearTimeout(activeTimeout);
      const timeout = Number(props.timeout);
      if (!isActive.value || timeout === -1) return;
      activeTimeout = window.setTimeout(() => {
        isActive.value = false;
      }, timeout);
    }
    function onPointerenter() {
      window.clearTimeout(activeTimeout);
    }
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-snackbar', {
          'v-snackbar--active': isActive.value,
          'v-snackbar--multi-line': props.multiLine && !props.vertical,
          'v-snackbar--vertical': props.vertical
        }, positionClasses.value, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "contentProps": mergeProps({
          class: ['v-snackbar__wrapper', themeClasses.value, colorClasses.value, roundedClasses.value, variantClasses.value],
          style: [locationStyles.value, colorStyles.value],
          onPointerenter,
          onPointerleave: startTimeout
        }, overlayProps.contentProps),
        "persistent": true,
        "noClickAnimation": true,
        "scrim": false,
        "scrollStrategy": "none",
        "_disableGlobalStack": true
      }, scopeId), {
        default: () => [genOverlays(false, 'v-snackbar'), slots.default && _createVNode("div", {
          "class": "v-snackbar__content",
          "role": "status",
          "aria-live": "polite"
        }, [slots.default()]), slots.actions && _createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              variant: 'text',
              ripple: false
            }
          }
        }, {
          default: () => [_createVNode("div", {
            "class": "v-snackbar__actions"
          }, [slots.actions()])]
        })],
        activator: slots.activator
      });
    });
    return forwardRefs({}, overlay);
  }
});
//# sourceMappingURL=VSnackbar.mjs.map