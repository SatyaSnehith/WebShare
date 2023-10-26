// Utilities
import { inject, provide, ref, watchEffect } from "/js/vue.js";
import { createRange, propsFactory } from "../../../util/index.mjs"; // Types
export const makeDataTableHeaderProps = propsFactory({
  headers: {
    type: Array,
    default: () => []
  }
}, 'DataTable-header');
export const VDataTableHeadersSymbol = Symbol.for('vuetify:data-table-headers');
export function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  watchEffect(() => {
    const wrapped = !props.headers.length ? [] : Array.isArray(props.headers[0]) ? props.headers : [props.headers];
    const flat = wrapped.flatMap((row, index) => row.map(column => ({
      column,
      row: index
    })));
    const rowCount = wrapped.length;
    const defaultHeader = {
      title: '',
      sortable: false
    };
    const defaultActionHeader = {
      ...defaultHeader,
      width: 48
    };
    if (options?.groupBy?.value.length) {
      const index = flat.findIndex(_ref => {
        let {
          column
        } = _ref;
        return column.key === 'data-table-group';
      });
      if (index < 0) flat.unshift({
        column: {
          ...defaultHeader,
          key: 'data-table-group',
          title: 'Group',
          rowspan: rowCount
        },
        row: 0
      });else flat.splice(index, 1, {
        column: {
          ...defaultHeader,
          ...flat[index].column
        },
        row: flat[index].row
      });
    }
    if (options?.showSelect?.value) {
      const index = flat.findIndex(_ref2 => {
        let {
          column
        } = _ref2;
        return column.key === 'data-table-select';
      });
      if (index < 0) flat.unshift({
        column: {
          ...defaultActionHeader,
          key: 'data-table-select',
          rowspan: rowCount
        },
        row: 0
      });else flat.splice(index, 1, {
        column: {
          ...defaultActionHeader,
          ...flat[index].column
        },
        row: flat[index].row
      });
    }
    if (options?.showExpand?.value) {
      const index = flat.findIndex(_ref3 => {
        let {
          column
        } = _ref3;
        return column.key === 'data-table-expand';
      });
      if (index < 0) flat.push({
        column: {
          ...defaultActionHeader,
          key: 'data-table-expand',
          rowspan: rowCount
        },
        row: 0
      });else flat.splice(index, 1, {
        column: {
          ...defaultActionHeader,
          ...flat[index].column
        },
        row: flat[index].row
      });
    }
    const fixedRows = createRange(rowCount).map(() => []);
    const fixedOffsets = createRange(rowCount).fill(0);
    flat.forEach(_ref4 => {
      let {
        column,
        row
      } = _ref4;
      const key = column.key ?? (typeof column.value === 'string' ? column.value : null);
      const value = column.value ?? column.key ?? null;
      for (let i = row; i <= row + (column.rowspan ?? 1) - 1; i++) {
        fixedRows[i].push({
          ...column,
          key,
          value,
          fixedOffset: fixedOffsets[i],
          sortable: column.sortable ?? key != null
        });
        fixedOffsets[i] += Number(column.width ?? 0);
      }
    });
    fixedRows.forEach(row => {
      for (let i = row.length; i--; i >= 0) {
        if (row[i].fixed) {
          row[i].lastFixed = true;
          return;
        }
      }
    });
    const seen = new Set();
    headers.value = fixedRows.map(row => {
      const filtered = [];
      for (const column of row) {
        if (!seen.has(column.key)) {
          seen.add(column.key);
          filtered.push(column);
        }
      }
      return filtered;
    });
    columns.value = fixedRows.at(-1) ?? [];
  });
  const data = {
    headers,
    columns
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
export function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data) throw new Error('Missing headers!');
  return data;
}
//# sourceMappingURL=headers.mjs.map