import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "/js/vue.js";
// Components
import { makeDataTableProps } from "./VDataTable.mjs";
import { VDataTableHeaders } from "./VDataTableHeaders.mjs";
import { VDataTableRow } from "./VDataTableRow.mjs";
import { VDataTableRows } from "./VDataTableRows.mjs";
import { VTable } from "../../components/VTable/index.mjs";
import { VVirtualScrollItem } from "../../components/VVirtualScroll/VVirtualScrollItem.mjs"; // Composables
import { provideExpanded } from "./composables/expand.mjs";
import { createGroupBy, makeDataTableGroupProps, provideGroupBy, useGroupedItems } from "./composables/group.mjs";
import { createHeaders } from "./composables/headers.mjs";
import { useDataTableItems } from "./composables/items.mjs";
import { useOptions } from "./composables/options.mjs";
import { provideSelection } from "./composables/select.mjs";
import { createSort, provideSort, useSortedItems } from "./composables/sort.mjs";
import { provideDefaults } from "../../composables/defaults.mjs";
import { makeFilterProps, useFilter } from "../../composables/filter.mjs";
import { makeVirtualProps, useVirtual } from "../../composables/virtual.mjs"; // Utilities
import { computed, shallowRef, toRef } from "/js/vue.js";
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataTableVirtualProps = propsFactory({
  ...makeDataTableProps(),
  ...makeDataTableGroupProps(),
  ...makeVirtualProps(),
  ...makeFilterProps()
}, 'VDataTableVirtual');
export const VDataTableVirtual = genericComponent()({
  name: 'VDataTableVirtual',
  props: makeVDataTableVirtualProps(),
  emits: {
    'update:modelValue': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:groupBy': value => true,
    'update:expanded': value => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, 'showSelect'),
      showExpand: toRef(props, 'showExpand')
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, 'search');
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: item => item.columns
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const allItems = computed(() => extractRows(flatItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems,
      currentPage: allItems
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const headerHeight = computed(() => headers.value.length * 56);
    const {
      containerRef,
      paddingTop,
      paddingBottom,
      computedItems,
      handleItemResize,
      handleScroll
    } = useVirtual(props, flatItems, headerHeight);
    const displayItems = computed(() => computedItems.value.map(item => item.raw));
    useOptions({
      sortBy,
      page: shallowRef(1),
      itemsPerPage: shallowRef(-1),
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, 'hideNoData'),
        noDataText: toRef(props, 'noDataText'),
        loading: toRef(props, 'loading'),
        loadingText: toRef(props, 'loadingText')
      }
    });
    const slotProps = computed(() => ({
      sortBy: sortBy.value,
      toggleSort,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: allItems.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return _createVNode(VTable, _mergeProps({
        "class": ['v-data-table', {
          'v-data-table--loading': props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => slots.top?.(slotProps.value),
        wrapper: () => _createVNode("div", {
          "ref": containerRef,
          "onScroll": handleScroll,
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [_createVNode("table", null, [_createVNode("thead", null, [_createVNode(VDataTableHeaders, _mergeProps(dataTableHeadersProps, {
          "sticky": props.fixedHeader
        }), slots)]), _createVNode("tbody", null, [_createVNode("tr", {
          "style": {
            height: convertToUnit(paddingTop.value),
            border: 0
          }
        }, [_createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: 0,
            border: 0
          }
        }, null)]), _createVNode(VDataTableRows, _mergeProps(dataTableRowsProps, {
          "items": displayItems.value
        }), {
          ...slots,
          item: itemSlotProps => _createVNode(VVirtualScrollItem, {
            "key": itemSlotProps.internalItem.index,
            "renderless": true,
            "onUpdate:height": height => handleItemResize(itemSlotProps.internalItem.index, height)
          }, {
            default: _ref2 => {
              let {
                itemRef
              } = _ref2;
              return slots.item?.({
                ...itemSlotProps,
                itemRef
              }) ?? _createVNode(VDataTableRow, _mergeProps(itemSlotProps.props, {
                "ref": itemRef,
                "key": itemSlotProps.internalItem.index
              }), slots);
            }
          })
        }), _createVNode("tr", {
          "style": {
            height: convertToUnit(paddingBottom.value),
            border: 0
          }
        }, [_createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: 0,
            border: 0
          }
        }, null)])])])]),
        bottom: () => slots.bottom?.(slotProps.value)
      });
    });
  }
});
//# sourceMappingURL=VDataTableVirtual.mjs.map