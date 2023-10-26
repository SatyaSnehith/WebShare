import { createVNode as _createVNode } from "/js/vue.js";
// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VCheckboxBtn } from "../../components/VCheckbox/index.mjs"; // Composables
import { useExpanded } from "./composables/expand.mjs";
import { useHeaders } from "./composables/headers.mjs";
import { useSelection } from "./composables/select.mjs";
import { VDataTableColumn } from "./VDataTableColumn.mjs"; // Utilities
import { toDisplayString, withModifiers } from "/js/vue.js";
import { genericComponent, getObjectValueByPath, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  onClick: Function
}, 'VDataTableRow');
export const VDataTableRow = genericComponent()({
  name: 'VDataTableRow',
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      columns
    } = useHeaders();
    useRender(() => _createVNode("tr", {
      "class": ['v-data-table__tr', {
        'v-data-table__tr--clickable': !!props.onClick
      }],
      "onClick": props.onClick
    }, [props.item && columns.value.map((column, i) => _createVNode(VDataTableColumn, {
      "align": column.align,
      "fixed": column.fixed,
      "fixedOffset": column.fixedOffset,
      "lastFixed": column.lastFixed,
      "noPadding": column.key === 'data-table-select' || column.key === 'data-table-expand',
      "width": column.width
    }, {
      default: () => {
        const item = props.item;
        const slotName = `item.${column.key}`;
        const slotProps = {
          index: props.index,
          item: item.raw,
          internalItem: item,
          value: getObjectValueByPath(item.columns, column.key),
          column,
          isSelected,
          toggleSelect,
          isExpanded,
          toggleExpand
        };
        if (slots[slotName]) return slots[slotName](slotProps);
        if (column.key === 'data-table-select') {
          return slots['item.data-table-select']?.(slotProps) ?? _createVNode(VCheckboxBtn, {
            "disabled": !item.selectable,
            "modelValue": isSelected([item]),
            "onClick": withModifiers(() => toggleSelect(item), ['stop'])
          }, null);
        }
        if (column.key === 'data-table-expand') {
          return slots['item.data-table-expand']?.(slotProps) ?? _createVNode(VBtn, {
            "icon": isExpanded(item) ? '$collapse' : '$expand',
            "size": "small",
            "variant": "text",
            "onClick": withModifiers(() => toggleExpand(item), ['stop'])
          }, null);
        }
        return toDisplayString(slotProps.value);
      }
    }))]));
  }
});
//# sourceMappingURL=VDataTableRow.mjs.map