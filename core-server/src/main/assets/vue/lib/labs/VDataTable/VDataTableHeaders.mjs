import { resolveDirective as _resolveDirective, Fragment as _Fragment, createVNode as _createVNode } from "/js/vue.js";
// Components
import { VDataTableColumn } from "./VDataTableColumn.mjs";
import { VCheckboxBtn } from "../../components/VCheckbox/index.mjs";
import { VIcon } from "../../components/VIcon/index.mjs"; // Composables
import { useHeaders } from "./composables/headers.mjs";
import { useSelection } from "./composables/select.mjs";
import { useSort } from "./composables/sort.mjs";
import { useBackgroundColor } from "../../composables/color.mjs";
import { IconValue } from "../../composables/icons.mjs";
import { LoaderSlot, makeLoaderProps, useLoader } from "../../composables/loader.mjs"; // Utilities
import { computed } from "/js/vue.js";
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataTableHeadersProps = propsFactory({
  color: String,
  sticky: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: '$sortAsc'
  },
  sortDescIcon: {
    type: IconValue,
    default: '$sortDesc'
  },
  ...makeLoaderProps()
}, 'VDataTableHeaders');
export const VDataTableHeaders = genericComponent()({
  name: 'VDataTableHeaders',
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    const getFixedStyles = (column, y) => {
      if (!props.sticky && !column.fixed) return undefined;
      return {
        position: 'sticky',
        zIndex: column.fixed ? 4 : props.sticky ? 3 : undefined,
        // TODO: This needs to account for possible previous fixed columns.
        left: column.fixed ? convertToUnit(column.fixedOffset) : undefined,
        // TODO: This needs to account for possible row/colspan of previous columns
        top: props.sticky ? `calc(var(--v-table-header-height) * ${y})` : undefined
      };
    };
    function getSortIcon(column) {
      const item = sortBy.value.find(item => item.key === column.key);
      if (!item) return props.sortAscIcon;
      return item.order === 'asc' ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, 'color');
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon,
      getFixedStyles
    }));
    const VDataTableHeaderCell = _ref2 => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === 'data-table-select' || column.key === 'data-table-expand';
      return _createVNode(VDataTableColumn, {
        "tag": "th",
        "align": column.align,
        "class": ['v-data-table__th', {
          'v-data-table__th--sortable': column.sortable,
          'v-data-table__th--sorted': isSorted(column)
        }, loaderClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.width),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "onClick": column.sortable ? () => toggleSort(column) : undefined,
        "lastFixed": column.lastFixed,
        "noPadding": noPadding
      }, {
        default: () => {
          const columnSlotName = `column.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
          if (column.key === 'data-table-select') {
            return slots['column.data-table-select']?.(columnSlotProps) ?? (showSelectAll && _createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null));
          }
          return _createVNode("div", {
            "class": "v-data-table-header__content"
          }, [_createVNode("span", null, [column.title]), column.sortable && _createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && _createVNode("div", {
            "key": "badge",
            "class": ['v-data-table-header__sort-badge', ...backgroundColorClasses.value],
            "style": backgroundColorStyles.value
          }, [sortBy.value.findIndex(x => x.key === column.key) + 1])]);
        }
      });
    };
    useRender(() => {
      return _createVNode(_Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => _createVNode("tr", null, [row.map((column, x) => _createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && _createVNode("tr", {
        "class": "v-data-table-progress"
      }, [_createVNode("th", {
        "colspan": columns.value.length
      }, [_createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "active": true,
        "color": typeof props.loading === 'boolean' ? undefined : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});
//# sourceMappingURL=VDataTableHeaders.mjs.map