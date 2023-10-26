import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VItemGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
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
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            selectedClass: string;
        } & {
            max?: number | undefined;
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
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
        }, string, {
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            modelValue: any;
            selectedClass: string;
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
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        selectedClass: string;
    } & {
        max?: number | undefined;
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
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    selectedClass: string;
} & {
    max?: number | undefined;
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
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
}, string, {
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    modelValue: any;
    selectedClass: string;
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
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}, vue.ExtractPropTypes<{
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
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}>>;
type VItemGroup = InstanceType<typeof VItemGroup>;

declare const VItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean | undefined;
            key?: string | number | symbol | undefined;
            value?: any;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean | undefined;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean | undefined;
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
            selectedClass?: string | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: boolean;
        } & {
            value?: any;
            selectedClass?: string | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean | undefined;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean | undefined;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => true;
        }, string, {
            disabled: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
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
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean | undefined;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean | undefined;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean | undefined;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
} & {
    value?: any;
    selectedClass?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean | undefined;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean | undefined;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean | undefined;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean | undefined;
    }) => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    disabled: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean | undefined;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}>>;
type VItem = InstanceType<typeof VItem>;

export { VItem, VItemGroup };
