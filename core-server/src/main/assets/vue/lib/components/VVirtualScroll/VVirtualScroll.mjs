import { Fragment as _Fragment, createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VVirtualScroll.css";

// Components
import { VVirtualScrollItem } from "./VVirtualScrollItem.mjs"; // Composables
import { makeComponentProps } from "../../composables/component.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { useToggleScope } from "../../composables/toggleScope.mjs";
import { makeVirtualProps, useVirtual } from "../../composables/virtual.mjs"; // Utilities
import { onMounted, onScopeDispose, toRef } from "/js/vue.js";
import { convertToUnit, genericComponent, getCurrentInstance, getScrollParent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, 'VVirtualScroll');
export const VVirtualScroll = genericComponent()({
  name: 'VVirtualScroll',
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vm = getCurrentInstance('VVirtualScroll');
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      containerRef,
      handleScroll,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(props, 'items'));
    useToggleScope(() => props.renderless, () => {
      onMounted(() => {
        containerRef.value = getScrollParent(vm.vnode.el, true);
        containerRef.value?.addEventListener('scroll', handleScroll);
      });
      onScopeDispose(() => {
        containerRef.value?.removeEventListener('scroll', handleScroll);
      });
    });
    useRender(() => {
      const children = computedItems.value.map(item => _createVNode(VVirtualScrollItem, {
        "key": item.index,
        "renderless": props.renderless,
        "onUpdate:height": height => handleItemResize(item.index, height)
      }, {
        default: slotProps => slots.default?.({
          item: item.raw,
          index: item.index,
          ...slotProps
        })
      }));
      return props.renderless ? _createVNode(_Fragment, null, [_createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, _createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : _createVNode("div", {
        "ref": containerRef,
        "class": ['v-virtual-scroll', props.class],
        "onScroll": handleScroll,
        "style": [dimensionStyles.value, props.style]
      }, [_createVNode("div", {
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      scrollToIndex
    };
  }
});
//# sourceMappingURL=VVirtualScroll.mjs.map