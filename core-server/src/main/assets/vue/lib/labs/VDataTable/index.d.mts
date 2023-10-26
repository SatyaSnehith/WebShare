import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, Ref, UnwrapRef, CSSProperties } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;
type SelectItemKey = boolean | null | undefined | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type ExpandProps = {
    expandOnClick: boolean;
    expanded: readonly string[];
    'onUpdate:expanded': ((value: any[]) => void) | undefined;
};
declare function provideExpanded(props: ExpandProps): {
    expand: (item: DataTableItem, value: boolean) => void;
    expanded: Ref<Set<string>> & {
        readonly externalValue: readonly string[];
    };
    expandOnClick: Ref<boolean>;
    isExpanded: (item: DataTableItem) => boolean;
    toggleExpand: (item: DataTableItem) => void;
};

type SortItem = {
    key: string;
    order?: boolean | 'asc' | 'desc';
};
declare function provideSort(options: {
    sortBy: Ref<readonly SortItem[]>;
    mustSort: Ref<boolean>;
    multiSort: Ref<boolean>;
    page?: Ref<number>;
}): {
    sortBy: Ref<readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader) => void;
    isSorted: (column: InternalDataTableHeader) => boolean;
};

interface GroupableItem<T = any> {
    type: 'item';
    raw: T;
}
interface Group<T = any> {
    type: 'group';
    depth: number;
    id: string;
    key: string;
    value: any;
    items: readonly (T | Group<T>)[];
}
declare function provideGroupBy(options: {
    groupBy: Ref<readonly SortItem[]>;
    sortBy: Ref<readonly SortItem[]>;
}): {
    sortByWithGroups: vue.ComputedRef<SortItem[]>;
    toggleGroup: (group: Group) => void;
    opened: Ref<Set<string>>;
    groupBy: Ref<readonly SortItem[]>;
    extractRows: <T extends GroupableItem<any>>(items: readonly (T | Group<T>)[]) => T[];
    isGroupOpen: (group: Group) => boolean;
};

/**
 * - match without highlight
 * - single match (index), length already known
 * - single match (start, end)
 * - multiple matches (start, end), probably shouldn't overlap
 */
type FilterMatch = boolean | number | [number, number] | [number, number][];
type FilterFunction = (value: string, query: string, item?: InternalItem) => FilterMatch;
type FilterKeyFunctions = Record<string, FilterFunction>;
type FilterKeys = string | string[];
type FilterMode = 'some' | 'every' | 'union' | 'intersection';
interface InternalItem<T = any> {
    value: any;
    raw: T;
}

type DataTableCompareFunction<T = any> = (a: T, b: T) => number;
type DataTableHeader = {
    key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | (string & {});
    value?: SelectItemKey;
    title: string;
    colspan?: number;
    rowspan?: number;
    fixed?: boolean;
    align?: 'start' | 'end' | 'center';
    width?: number | string;
    minWidth?: string;
    maxWidth?: string;
    sortable?: boolean;
    sort?: DataTableCompareFunction;
};
type InternalDataTableHeader = Omit<DataTableHeader, 'key' | 'value'> & {
    key: string | null;
    value: SelectItemKey | null;
    sortable: boolean;
    fixedOffset?: number;
    lastFixed?: boolean;
};
interface DataTableItem<T = any> extends InternalItem<T>, GroupableItem<T>, SelectableItem {
    key: any;
    index: number;
    columns: {
        [key: string]: any;
    };
}
type GroupHeaderSlot = {
    index: number;
    item: Group;
    columns: InternalDataTableHeader[];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
};
type ItemSlotBase<T = any> = {
    index: number;
    item: T;
    internalItem: DataTableItem<T>;
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
};
type ItemSlot<T = any> = ItemSlotBase<T> & {
    columns: InternalDataTableHeader[];
};
type ItemKeySlot<T = any> = ItemSlotBase<T> & {
    value: any;
    column: InternalDataTableHeader;
};

interface DataTableItemProps {
    items: any[];
    itemValue: SelectItemKey;
    itemSelectable: SelectItemKey;
    returnObject: boolean;
}

interface SelectableItem {
    value: any;
    selectable: boolean;
}
type SelectionProps = Pick<DataTableItemProps, 'itemValue'> & {
    modelValue: readonly any[];
    selectStrategy: 'single' | 'page' | 'all';
    valueComparator: typeof deepEqual;
    'onUpdate:modelValue': ((value: any[]) => void) | undefined;
};
declare function provideSelection(props: SelectionProps, { allItems, currentPage }: {
    allItems: Ref<SelectableItem[]>;
    currentPage: Ref<SelectableItem[]>;
}): {
    toggleSelect: (item: SelectableItem) => void;
    select: (items: SelectableItem[], value: boolean) => void;
    selectAll: (value: boolean) => void;
    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    isSomeSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    someSelected: vue.ComputedRef<boolean>;
    allSelected: vue.ComputedRef<boolean>;
    showSelectAll: boolean;
};

type HeadersSlotProps = {
    headers: InternalDataTableHeader[][];
    columns: InternalDataTableHeader[];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
    getFixedStyles: (column: InternalDataTableHeader, y: number) => CSSProperties | undefined;
    isSorted: ReturnType<typeof provideSort>['isSorted'];
};

type Density = null | 'default' | 'comfortable' | 'compact';

declare function providePagination(options: {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    itemsLength: Ref<number>;
}): {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    startIndex: vue.ComputedRef<number>;
    stopIndex: vue.ComputedRef<number>;
    pageCount: vue.ComputedRef<number>;
    itemsLength: Ref<number>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};

declare const VDataTableRow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            index?: number | undefined;
            key?: string | number | symbol | undefined;
            item?: DataTableItem<any> | undefined;
            style?: unknown;
            class?: unknown;
            onClick?: ((e: MouseEvent) => void) | undefined;
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            index?: number | undefined;
            item?: DataTableItem<any> | undefined;
            onClick?: ((e: MouseEvent) => void) | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, vue.SlotsType<Partial<{
            [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {} & {
        index?: number | undefined;
        item?: DataTableItem<any> | undefined;
        onClick?: ((e: MouseEvent) => void) | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    index?: number | undefined;
    item?: DataTableItem<any> | undefined;
    onClick?: ((e: MouseEvent) => void) | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    onClick: PropType<(e: MouseEvent) => void>;
}, vue.ExtractPropTypes<{
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    onClick: PropType<(e: MouseEvent) => void>;
}>>;
type VDataTableRow = InstanceType<typeof VDataTableRow>;

declare const VDataTableRows: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            noDataText?: string | undefined;
            loadingText?: string | undefined;
            items?: readonly (DataTableItem<any> | Group<any>)[] | undefined;
            hideNoData?: boolean | undefined;
            key?: string | number | symbol | undefined;
            loading?: string | boolean | undefined;
            style?: unknown;
            class?: unknown;
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem;
            }) => void) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loading?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            noDataText: string;
            loadingText: string;
            items: readonly (DataTableItem<any> | Group<any>)[];
            hideNoData: boolean;
        } & {
            loading?: string | boolean | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem;
            }) => void) | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            noDataText: string;
            loadingText: string;
            items: readonly (DataTableItem<any> | Group<any>)[];
            hideNoData: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-group': (arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-select': (arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        noDataText: string;
        loadingText: string;
        items: readonly (DataTableItem<any> | Group<any>)[];
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        rowHeight?: number | undefined;
        'onClick:row'?: ((e: Event, value: {
            item: any;
            internalItem: DataTableItem;
        }) => void) | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: (() => vue.VNodeChild) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: (() => vue.VNodeChild) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            'data-table-group'?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: false | (() => vue.VNodeChild) | undefined;
            'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: false | (() => vue.VNodeChild) | undefined;
            'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    noDataText: string;
    loadingText: string;
    items: readonly (DataTableItem<any> | Group<any>)[];
    hideNoData: boolean;
} & {
    loading?: string | boolean | undefined;
    rowHeight?: number | undefined;
    'onClick:row'?: ((e: Event, value: {
        item: any;
        internalItem: DataTableItem;
    }) => void) | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        'data-table-group'?: ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: (() => vue.VNodeChild) | undefined;
        'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: (() => vue.VNodeChild) | undefined;
        'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        'data-table-group'?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: false | (() => vue.VNodeChild) | undefined;
        'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: false | (() => vue.VNodeChild) | undefined;
        'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    noDataText: string;
    loadingText: string;
    items: readonly (DataTableItem<any> | Group<any>)[];
    hideNoData: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem<any> | Group<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem;
    }) => void>;
}, vue.ExtractPropTypes<{
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem<any> | Group<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem;
    }) => void>;
}>>;
type VDataTableRows = InstanceType<typeof VDataTableRows>;

type VDataTableSlotProps = {
    page: number;
    itemsPerPage: number;
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    someSelected: boolean;
    allSelected: boolean;
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly DataTableItem[];
    groupedItems: readonly (DataTableItem | Group<DataTableItem>)[];
    columns: InternalDataTableHeader[];
    headers: InternalDataTableHeader[][];
};
declare const VDataTable: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            style?: vue.StyleValue | undefined;
            expanded?: readonly string[] | undefined;
            tag?: string | undefined;
            page?: string | number | undefined;
            sticky?: boolean | undefined;
            headers?: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]> | undefined;
            noDataText?: string | undefined;
            loadingText?: string | undefined;
            itemsPerPageText?: string | undefined;
            sortBy?: readonly SortItem[] | undefined;
            pageText?: string | undefined;
            items?: any[] | undefined;
            density?: Density | undefined;
            modelValue?: readonly any[] | undefined;
            valueComparator?: typeof deepEqual | undefined;
            selectStrategy?: "all" | "page" | "single" | undefined;
            returnObject?: boolean | undefined;
            filterMode?: FilterMode | undefined;
            noFilter?: boolean | undefined;
            itemValue?: SelectItemKey;
            hideNoData?: boolean | undefined;
            hover?: boolean | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            firstIcon?: string | undefined;
            lastIcon?: string | undefined;
            fixedHeader?: boolean | undefined;
            fixedFooter?: boolean | undefined;
            expandOnClick?: boolean | undefined;
            showExpand?: boolean | undefined;
            itemSelectable?: SelectItemKey;
            showSelect?: boolean | undefined;
            groupBy?: readonly SortItem[] | undefined;
            multiSort?: boolean | undefined;
            mustSort?: boolean | undefined;
            itemsPerPage?: string | number | undefined;
            firstPageLabel?: string | undefined;
            prevPageLabel?: string | undefined;
            nextPageLabel?: string | undefined;
            lastPageLabel?: string | undefined;
            itemsPerPageOptions?: readonly (number | {
                title: string;
                value: number;
            })[] | undefined;
            showCurrentPage?: boolean | undefined;
            sortAscIcon?: IconValue | undefined;
            sortDescIcon?: IconValue | undefined;
            search?: string | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((value: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loading?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            colgroup?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            top?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            body?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            tbody?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            thead?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            tfoot?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            bottom?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'footer.prepend'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: any[]) => void) & ((event: "update:options", value: any) => void) & ((event: "update:groupBy", value: any) => void) & ((event: "update:page", value: number) => void) & ((event: "update:itemsPerPage", value: number) => void) & ((event: "update:sortBy", value: any) => void) & ((event: "update:expanded", value: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            itemsPerPageText: string;
            sortBy: readonly SortItem[];
            pageText: string;
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            hideNoData: boolean;
            hover: boolean;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: string | number;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        } & {
            search?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-select"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-expand"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((value: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any[]) => true;
            'update:page': (value: number) => true;
            'update:itemsPerPage': (value: number) => true;
            'update:sortBy': (value: any) => true;
            'update:options': (value: any) => true;
            'update:groupBy': (value: any) => true;
            'update:expanded': (value: any) => true;
        }, string, {
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            itemsPerPageText: string;
            sortBy: readonly SortItem[];
            pageText: string;
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            hideNoData: boolean;
            hover: boolean;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: string | number;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            [x: `column.${string}`]: (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-group': (arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-select': (arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-select': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-expand': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            colgroup: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            top: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            body: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            tbody: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            thead: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            tfoot: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            bottom: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        style: vue.StyleValue;
        expanded: readonly string[];
        tag: string;
        page: string | number;
        sticky: boolean;
        headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        items: any[];
        density: Density;
        modelValue: readonly any[];
        valueComparator: typeof deepEqual;
        selectStrategy: "all" | "page" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemValue: SelectItemKey;
        hideNoData: boolean;
        hover: boolean;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemSelectable: SelectItemKey;
        showSelect: boolean;
        groupBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        itemsPerPage: string | number;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        search?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        rowHeight?: number | undefined;
        'onClick:row'?: ((e: Event, value: {
            item: any;
            internalItem: DataTableItem<any>;
        }) => void) | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: (() => vue.VNodeChild) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: (() => vue.VNodeChild) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'footer.prepend'?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
        'v-slots'?: {
            [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: false | (() => vue.VNodeChild) | undefined;
            'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: false | (() => vue.VNodeChild) | undefined;
            'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-select"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-expand"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    hideNoData: boolean;
    hover: boolean;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: string | number;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
} & {
    search?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    filterKeys?: FilterKeys | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    rowHeight?: number | undefined;
    'onClick:row'?: ((e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void) | undefined;
} & {
    $children?: vue.VNodeChild | {
        [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: (() => vue.VNodeChild) | undefined;
        'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: (() => vue.VNodeChild) | undefined;
        'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        'footer.prepend'?: (() => vue.VNodeChild) | undefined;
    } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
    'v-slots'?: {
        [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: false | (() => vue.VNodeChild) | undefined;
        'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: false | (() => vue.VNodeChild) | undefined;
        'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:column.${string}`]: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-select"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-expand"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:page': (value: number) => true;
    'update:itemsPerPage': (value: number) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:groupBy': (value: any) => true;
    'update:expanded': (value: any) => true;
}, string, {
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    hideNoData: boolean;
    hover: boolean;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: string | number;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `column.${string}`]: (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-select': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-expand': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    body: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
type VDataTable = InstanceType<typeof VDataTable>;

declare const VDataTableFooter: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            itemsPerPageText?: string | undefined;
            pageText?: string | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            firstIcon?: string | undefined;
            lastIcon?: string | undefined;
            firstPageLabel?: string | undefined;
            prevPageLabel?: string | undefined;
            nextPageLabel?: string | undefined;
            lastPageLabel?: string | undefined;
            itemsPerPageOptions?: readonly (number | {
                title: string;
                value: number;
            })[] | undefined;
            showCurrentPage?: boolean | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            class?: unknown;
            $children?: {} | vue.VNodeChild | {
                prepend?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            itemsPerPageText: string;
            pageText: string;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
        } & {} & {
            $children?: {} | vue.VNodeChild | {
                prepend?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            itemsPerPageText: string;
            pageText: string;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | vue.VNodeChild | {
            prepend?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    itemsPerPageText: string;
    pageText: string;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
} & {} & {
    $children?: {} | vue.VNodeChild | {
        prepend?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    itemsPerPageText: string;
    pageText: string;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
}, {}, string, vue.SlotsType<Partial<{
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}>>;

type VDataTableVirtualSlotProps = Omit<VDataTableSlotProps, 'setItemsPerPage' | 'page' | 'pageCount' | 'itemsPerPage'>;
declare const VDataTableVirtual: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            style?: vue.StyleValue | undefined;
            expanded?: readonly string[] | undefined;
            tag?: string | undefined;
            sticky?: boolean | undefined;
            headers?: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]> | undefined;
            noDataText?: string | undefined;
            loadingText?: string | undefined;
            sortBy?: readonly SortItem[] | undefined;
            items?: any[] | undefined;
            density?: Density | undefined;
            modelValue?: readonly any[] | undefined;
            valueComparator?: typeof deepEqual | undefined;
            selectStrategy?: "all" | "page" | "single" | undefined;
            returnObject?: boolean | undefined;
            filterMode?: FilterMode | undefined;
            noFilter?: boolean | undefined;
            itemValue?: SelectItemKey;
            itemHeight?: string | number | undefined;
            hideNoData?: boolean | undefined;
            hover?: boolean | undefined;
            fixedHeader?: boolean | undefined;
            fixedFooter?: boolean | undefined;
            expandOnClick?: boolean | undefined;
            showExpand?: boolean | undefined;
            itemSelectable?: SelectItemKey;
            showSelect?: boolean | undefined;
            groupBy?: readonly SortItem[] | undefined;
            multiSort?: boolean | undefined;
            mustSort?: boolean | undefined;
            sortAscIcon?: IconValue | undefined;
            sortDescIcon?: IconValue | undefined;
            search?: string | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                } & {
                    itemRef: Ref<HTMLElement | undefined>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                } & {
                    itemRef: Ref<HTMLElement | undefined>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNodeChild) | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loading?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            top?: ((arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            bottom?: ((arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: any[]) => void) & ((event: "update:options", value: any) => void) & ((event: "update:groupBy", value: any) => void) & ((event: "update:sortBy", value: any) => void) & ((event: "update:expanded", value: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            sortBy: readonly SortItem[];
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            itemHeight: string | number;
            hideNoData: boolean;
            hover: boolean;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        } & {
            search?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                } & {
                    itemRef: Ref<HTMLElement | undefined>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                } & {
                    itemRef: Ref<HTMLElement | undefined>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-select"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-expand"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any[]) => true;
            'update:sortBy': (value: any) => true;
            'update:options': (value: any) => true;
            'update:groupBy': (value: any) => true;
            'update:expanded': (value: any) => true;
        }, string, {
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            sortBy: readonly SortItem[];
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            itemHeight: string | number;
            hideNoData: boolean;
            hover: boolean;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            [x: `column.${string}`]: (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-group': (arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-select': (arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-select': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-expand': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            top: (arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            bottom: (arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        style: vue.StyleValue;
        expanded: readonly string[];
        tag: string;
        sticky: boolean;
        headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        items: any[];
        density: Density;
        modelValue: readonly any[];
        valueComparator: typeof deepEqual;
        selectStrategy: "all" | "page" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemValue: SelectItemKey;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        fixedHeader: boolean;
        fixedFooter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemSelectable: SelectItemKey;
        showSelect: boolean;
        groupBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        search?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        rowHeight?: number | undefined;
        'onClick:row'?: ((e: Event, value: {
            item: any;
            internalItem: DataTableItem<any>;
        }) => void) | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNodeChild) | undefined;
            loading?: (() => vue.VNodeChild) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: (() => vue.VNodeChild) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            top?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            bottom?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            } & {
                itemRef: Ref<HTMLElement | undefined>;
            }) => vue.VNodeChild) | undefined;
            loading?: false | (() => vue.VNodeChild) | undefined;
            'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: false | (() => vue.VNodeChild) | undefined;
            'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            top?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
            bottom?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        } & {
            itemRef: Ref<HTMLElement | undefined>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-select"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-expand"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:top"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:bottom"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    sortBy: readonly SortItem[];
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    itemHeight: string | number;
    hideNoData: boolean;
    hover: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
} & {
    search?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    filterKeys?: FilterKeys | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    rowHeight?: number | undefined;
    'onClick:row'?: ((e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void) | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        } & {
            itemRef: Ref<HTMLElement | undefined>;
        }) => vue.VNodeChild) | undefined;
        loading?: (() => vue.VNodeChild) | undefined;
        'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: (() => vue.VNodeChild) | undefined;
        'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        top?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        bottom?: ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        } & {
            itemRef: Ref<HTMLElement | undefined>;
        }) => vue.VNodeChild) | undefined;
        loading?: false | (() => vue.VNodeChild) | undefined;
        'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: false | (() => vue.VNodeChild) | undefined;
        'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        top?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
        bottom?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:column.${string}`]: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    } & {
        itemRef: Ref<HTMLElement | undefined>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-select"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-expand"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:top"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:bottom"?: false | ((arg: VDataTableVirtualSlotProps) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:groupBy': (value: any) => true;
    'update:expanded': (value: any) => true;
}, string, {
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    sortBy: readonly SortItem[];
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    itemHeight: string | number;
    hideNoData: boolean;
    hover: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `column.${string}`]: (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    } & {
        itemRef: Ref<HTMLElement | undefined>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-select': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-expand': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableVirtualSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
}, vue.ExtractPropTypes<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
}>>;
type VDataTableVirtual = InstanceType<typeof VDataTableVirtual>;

declare const VDataTableServer: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            style?: vue.StyleValue | undefined;
            expanded?: readonly string[] | undefined;
            tag?: string | undefined;
            page?: string | number | undefined;
            sticky?: boolean | undefined;
            headers?: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]> | undefined;
            noDataText?: string | undefined;
            loadingText?: string | undefined;
            itemsPerPageText?: string | undefined;
            sortBy?: readonly SortItem[] | undefined;
            pageText?: string | undefined;
            items?: any[] | undefined;
            density?: Density | undefined;
            modelValue?: readonly any[] | undefined;
            valueComparator?: typeof deepEqual | undefined;
            selectStrategy?: "all" | "page" | "single" | undefined;
            returnObject?: boolean | undefined;
            itemValue?: SelectItemKey;
            hideNoData?: boolean | undefined;
            hover?: boolean | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            firstIcon?: string | undefined;
            lastIcon?: string | undefined;
            fixedHeader?: boolean | undefined;
            fixedFooter?: boolean | undefined;
            expandOnClick?: boolean | undefined;
            showExpand?: boolean | undefined;
            itemSelectable?: SelectItemKey;
            showSelect?: boolean | undefined;
            groupBy?: readonly SortItem[] | undefined;
            multiSort?: boolean | undefined;
            mustSort?: boolean | undefined;
            itemsPerPage?: string | number | undefined;
            firstPageLabel?: string | undefined;
            prevPageLabel?: string | undefined;
            nextPageLabel?: string | undefined;
            lastPageLabel?: string | undefined;
            itemsPerPageOptions?: readonly (number | {
                title: string;
                value: number;
            })[] | undefined;
            showCurrentPage?: boolean | undefined;
            sortAscIcon?: IconValue | undefined;
            sortDescIcon?: IconValue | undefined;
            search?: string | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "onUpdate:expanded"?: ((options: any) => any) | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((page: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
            itemsLength: string | number;
            "onUpdate:options"?: ((options: any) => any) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loading?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            colgroup?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            top?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            body?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            tbody?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            thead?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            tfoot?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            bottom?: ((arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'footer.prepend'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: any[]) => void) & ((event: "update:options", options: any) => void) & ((event: "update:groupBy", value: any) => void) & ((event: "update:page", page: number) => void) & ((event: "update:itemsPerPage", page: number) => void) & ((event: "update:sortBy", sortBy: any) => void) & ((event: "update:expanded", options: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            itemsPerPageText: string;
            sortBy: readonly SortItem[];
            pageText: string;
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            itemValue: SelectItemKey;
            hideNoData: boolean;
            hover: boolean;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: string | number;
            itemsLength: string | number;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        } & {
            search?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            rowHeight?: number | undefined;
            'onClick:row'?: ((e: Event, value: {
                item: any;
                internalItem: DataTableItem<any>;
            }) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | {
                [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: (() => vue.VNodeChild) | undefined;
                'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
                'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
            'v-slots'?: {
                [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
                [x: `column.${string}`]: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'data-table-group'?: false | ((arg: {
                    item: Group<any>;
                    count: number;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'data-table-select'?: false | ((arg: {
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    index: number;
                    item: any;
                    internalItem: DataTableItem<any>;
                    isExpanded: (item: DataTableItem<any>) => boolean;
                    toggleExpand: (item: DataTableItem<any>) => void;
                    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                    toggleSelect: (item: SelectableItem) => void;
                } & {
                    columns: InternalDataTableHeader[];
                } & {
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loading?: false | (() => vue.VNodeChild) | undefined;
                'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
                'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'column.data-table-select'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                'column.data-table-expand'?: false | ((arg: {
                    column: InternalDataTableHeader;
                    selectAll: (value: boolean) => void;
                    isSorted: (column: InternalDataTableHeader) => boolean;
                    toggleSort: (column: InternalDataTableHeader) => void;
                    sortBy: readonly SortItem[];
                    someSelected: boolean;
                    allSelected: boolean;
                    getSortIcon: (column: InternalDataTableHeader) => IconValue;
                }) => vue.VNodeChild) | undefined;
                default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
                'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `v-slot:column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-select"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:column.data-table-expand"?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "onUpdate:expanded"?: ((options: any) => any) | undefined;
            "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((page: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
            "onUpdate:options"?: ((options: any) => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any[]) => true;
            'update:page': (page: number) => true;
            'update:itemsPerPage': (page: number) => true;
            'update:sortBy': (sortBy: any) => true;
            'update:options': (options: any) => true;
            'update:expanded': (options: any) => true;
            'update:groupBy': (value: any) => true;
        }, string, {
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sticky: boolean;
            headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
            noDataText: string;
            loadingText: string;
            itemsPerPageText: string;
            sortBy: readonly SortItem[];
            pageText: string;
            items: any[];
            density: Density;
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            itemValue: SelectItemKey;
            hideNoData: boolean;
            hover: boolean;
            nextIcon: string;
            prevIcon: string;
            firstIcon: string;
            lastIcon: string;
            fixedHeader: boolean;
            fixedFooter: boolean;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: string | number;
            firstPageLabel: string;
            prevPageLabel: string;
            nextPageLabel: string;
            lastPageLabel: string;
            itemsPerPageOptions: readonly (number | {
                title: string;
                value: number;
            })[];
            showCurrentPage: boolean;
            sortAscIcon: IconValue;
            sortDescIcon: IconValue;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            [x: `column.${string}`]: (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-group': (arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'data-table-select': (arg: {
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-select': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'column.data-table-expand': (arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            colgroup: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            top: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            body: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            tbody: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            thead: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            tfoot: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            bottom: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        style: vue.StyleValue;
        expanded: readonly string[];
        tag: string;
        page: string | number;
        sticky: boolean;
        headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        items: any[];
        density: Density;
        modelValue: readonly any[];
        valueComparator: typeof deepEqual;
        selectStrategy: "all" | "page" | "single";
        returnObject: boolean;
        itemValue: SelectItemKey;
        hideNoData: boolean;
        hover: boolean;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemSelectable: SelectItemKey;
        showSelect: boolean;
        groupBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        itemsPerPage: string | number;
        itemsLength: string | number;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        search?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        rowHeight?: number | undefined;
        'onClick:row'?: ((e: Event, value: {
            item: any;
            internalItem: DataTableItem<any>;
        }) => void) | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: (() => vue.VNodeChild) | undefined;
            'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: (() => vue.VNodeChild) | undefined;
            'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'footer.prepend'?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
        'v-slots'?: {
            [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
            [x: `column.${string}`]: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'data-table-group'?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                index: number;
                item: any;
                internalItem: DataTableItem<any>;
                isExpanded: (item: DataTableItem<any>) => boolean;
                toggleExpand: (item: DataTableItem<any>) => void;
                isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
                toggleSelect: (item: SelectableItem) => void;
            } & {
                columns: InternalDataTableHeader[];
            } & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loading?: false | (() => vue.VNodeChild) | undefined;
            'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
            'no-data'?: false | (() => vue.VNodeChild) | undefined;
            'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'column.data-table-select'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            'column.data-table-expand'?: false | ((arg: {
                column: InternalDataTableHeader;
                selectAll: (value: boolean) => void;
                isSorted: (column: InternalDataTableHeader) => boolean;
                toggleSort: (column: InternalDataTableHeader) => void;
                sortBy: readonly SortItem[];
                someSelected: boolean;
                allSelected: boolean;
                getSortIcon: (column: InternalDataTableHeader) => IconValue;
            }) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
            'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-select"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:column.data-table-expand"?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    itemValue: SelectItemKey;
    hideNoData: boolean;
    hover: boolean;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: string | number;
    itemsLength: string | number;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
} & {
    search?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    rowHeight?: number | undefined;
    'onClick:row'?: ((e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void) | undefined;
} & {
    $children?: vue.VNodeChild | {
        [x: `item.${string}`]: ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: (() => vue.VNodeChild) | undefined;
        'group-header'?: ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: (() => vue.VNodeChild) | undefined;
        'expanded-row'?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        default?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        colgroup?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        top?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        body?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tbody?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        thead?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tfoot?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        bottom?: ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        'footer.prepend'?: (() => vue.VNodeChild) | undefined;
    } | ((arg: VDataTableSlotProps) => vue.VNodeChild);
    'v-slots'?: {
        [x: `item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
        [x: `column.${string}`]: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'data-table-group'?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'data-table-select'?: false | ((arg: {
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        'item.data-table-select'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        'item.data-table-expand'?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
        item?: false | ((arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loading?: false | (() => vue.VNodeChild) | undefined;
        'group-header'?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
        'no-data'?: false | (() => vue.VNodeChild) | undefined;
        'expanded-row'?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'column.data-table-select'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        'column.data-table-expand'?: false | ((arg: {
            column: InternalDataTableHeader;
            selectAll: (value: boolean) => void;
            isSorted: (column: InternalDataTableHeader) => boolean;
            toggleSort: (column: InternalDataTableHeader) => void;
            sortBy: readonly SortItem[];
            someSelected: boolean;
            allSelected: boolean;
            getSortIcon: (column: InternalDataTableHeader) => IconValue;
        }) => vue.VNodeChild) | undefined;
        default?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        colgroup?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        top?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        body?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tbody?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        thead?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        tfoot?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        bottom?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
        'footer.prepend'?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:item.${string}`]: false | ((arg: ItemKeySlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:column.${string}`]: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-select"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item.data-table-expand"?: false | ((arg: Omit<ItemKeySlot, "value">) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:loading"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:group-header"?: false | ((arg: GroupHeaderSlot) => vue.VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:expanded-row"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-select"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:column.data-table-expand"?: false | ((arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:colgroup"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:top"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:body"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:tbody"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:thead"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:tfoot"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:bottom"?: false | ((arg: VDataTableSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:footer.prepend"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((options: any) => any) | undefined;
    "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
    "onUpdate:options"?: ((options: any) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:page': (page: number) => true;
    'update:itemsPerPage': (page: number) => true;
    'update:sortBy': (sortBy: any) => true;
    'update:options': (options: any) => true;
    'update:expanded': (options: any) => true;
    'update:groupBy': (value: any) => true;
}, string, {
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sticky: boolean;
    headers: vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    items: any[];
    density: Density;
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    itemValue: SelectItemKey;
    hideNoData: boolean;
    hover: boolean;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: string | number;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `column.${string}`]: (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-select': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'column.data-table-expand': (arg: {
        column: InternalDataTableHeader;
        selectAll: (value: boolean) => void;
        isSorted: (column: InternalDataTableHeader) => boolean;
        toggleSort: (column: InternalDataTableHeader) => void;
        sortBy: readonly SortItem[];
        someSelected: boolean;
        allSelected: boolean;
        getSortIcon: (column: InternalDataTableHeader) => IconValue;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    body: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsLength: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    color: StringConstructor;
    sticky: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<vue.DeepReadonly<DataTableHeader[] | DataTableHeader[][]>>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
    'onClick:row': vue.PropType<(e: Event, value: {
        item: any;
        internalItem: DataTableItem<any>;
    }) => void>;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsLength: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>>;
type VDataTableServer = InstanceType<typeof VDataTableServer>;

export { VDataTable, VDataTableFooter, VDataTableRow, VDataTableRows, VDataTableServer, VDataTableVirtual };
