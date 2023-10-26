import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "/js/vue.js";
// Components
import { VDataTableGroupHeaderRow } from "./VDataTableGroupHeaderRow.mjs";
import { VDataTableRow } from "./VDataTableRow.mjs"; // Composables
import { useExpanded } from "./composables/expand.mjs";
import { useGroupBy } from "./composables/group.mjs";
import { useHeaders } from "./composables/headers.mjs";
import { useSelection } from "./composables/select.mjs";
import { useLocale } from "../../composables/locale.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: '$vuetify.dataIterator.loadingText'
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: '$vuetify.noDataText'
  },
  rowHeight: Number,
  'onClick:row': Function
}, 'VDataTableRows');
export const VDataTableRows = genericComponent()({
  name: 'VDataTableRows',
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    useRender(() => {
      if (props.loading) {
        return _createVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [_createVNode("td", {
          "colspan": columns.value.length
        }, [slots.loading?.() ?? t(props.loadingText)])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return _createVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [_createVNode("td", {
          "colspan": columns.value.length
        }, [slots['no-data']?.() ?? t(props.noDataText)])]);
      }
      return _createVNode(_Fragment, null, [props.items.map((item, index) => {
        if (item.type === 'group') {
          return slots['group-header'] ? slots['group-header']({
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          }) : _createVNode(VDataTableGroupHeaderRow, {
            "key": `group-header_${item.id}`,
            "item": item
          }, slots);
        }
        const slotProps = {
          index,
          item: item.raw,
          internalItem: item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: {
            key: `item_${item.key ?? item.index}`,
            onClick: expandOnClick.value || props['onClick:row'] ? event => {
              if (expandOnClick.value) {
                toggleExpand(item);
              }
              props['onClick:row']?.(event, {
                item: item.raw,
                internalItem: item
              });
            } : undefined,
            index,
            item
          }
        };
        return _createVNode(_Fragment, null, [slots.item ? slots.item(itemSlotProps) : _createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && slots['expanded-row']?.(slotProps)]);
      })]);
    });
    return {};
  }
});
//# sourceMappingURL=VDataTableRows.mjs.map