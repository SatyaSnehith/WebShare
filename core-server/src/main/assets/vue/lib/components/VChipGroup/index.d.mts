import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;

declare const VChipGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            filter?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            column?: boolean | undefined;
            variant?: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            valueComparator?: typeof deepEqual | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
            mandatory?: boolean | "force" | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: (id: number) => boolean;
                    select: (id: number, value: boolean) => void;
                    next: () => void;
                    prev: () => void;
                    selected: readonly number[];
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: (id: number) => boolean;
                    select: (id: number, value: boolean) => void;
                    next: () => void;
                    prev: () => void;
                    selected: readonly number[];
                }) => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            filter: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            column: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            selectedClass: string;
            valueComparator: typeof deepEqual;
        } & {
            max?: number | undefined;
            color?: string | undefined;
            class?: any;
            mandatory?: boolean | "force" | undefined;
            theme?: string | undefined;
            modelValue?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: (id: number) => boolean;
                    select: (id: number, value: boolean) => void;
                    next: () => void;
                    prev: () => void;
                    selected: readonly number[];
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: (id: number) => boolean;
                    select: (id: number, value: boolean) => void;
                    next: () => void;
                    prev: () => void;
                    selected: readonly number[];
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
        }, string, {
            filter: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            column: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            modelValue: any;
            selectedClass: string;
            valueComparator: typeof deepEqual;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        filter: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        column: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        selectedClass: string;
        valueComparator: typeof deepEqual;
    } & {
        max?: number | undefined;
        color?: string | undefined;
        class?: any;
        mandatory?: boolean | "force" | undefined;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: (id: number) => boolean;
            select: (id: number, value: boolean) => void;
            next: () => void;
            prev: () => void;
            selected: readonly number[];
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: (id: number) => boolean;
                select: (id: number, value: boolean) => void;
                next: () => void;
                prev: () => void;
                selected: readonly number[];
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: (id: number) => boolean;
            select: (id: number, value: boolean) => void;
            next: () => void;
            prev: () => void;
            selected: readonly number[];
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    filter: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    column: boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    selectedClass: string;
    valueComparator: typeof deepEqual;
} & {
    max?: number | undefined;
    color?: string | undefined;
    class?: any;
    mandatory?: boolean | "force" | undefined;
    theme?: string | undefined;
    modelValue?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isSelected: (id: number) => boolean;
            select: (id: number, value: boolean) => void;
            next: () => void;
            prev: () => void;
            selected: readonly number[];
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isSelected: (id: number) => boolean;
        select: (id: number, value: boolean) => void;
        next: () => void;
        prev: () => void;
        selected: readonly number[];
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: (id: number) => boolean;
            select: (id: number, value: boolean) => void;
            next: () => void;
            prev: () => void;
            selected: readonly number[];
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: (id: number) => boolean;
        select: (id: number, value: boolean) => void;
        next: () => void;
        prev: () => void;
        selected: readonly number[];
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
}, string, {
    filter: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    column: boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    modelValue: any;
    selectedClass: string;
    valueComparator: typeof deepEqual;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isSelected: (id: number) => boolean;
        select: (id: number, value: boolean) => void;
        next: () => void;
        prev: () => void;
        selected: readonly number[];
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}>>;
type VChipGroup = InstanceType<typeof VChipGroup>;

export { VChipGroup };
