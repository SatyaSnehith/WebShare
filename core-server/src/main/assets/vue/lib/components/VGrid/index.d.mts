import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, Prop } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VContainer: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            fluid?: boolean | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
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
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
            fluid: boolean;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
            fluid: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        tag: string;
        fluid: boolean;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    fluid: boolean;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
    fluid: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>;
type VContainer = InstanceType<typeof VContainer>;

declare const VCol: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            offset?: string | number | undefined;
            alignSelf?: "auto" | "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            order?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            cols?: string | number | boolean | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
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
            sm?: string | number | boolean | undefined;
            md?: string | number | boolean | undefined;
            lg?: string | number | boolean | undefined;
            xl?: string | number | boolean | undefined;
            xxl?: string | number | boolean | undefined;
            offsetSm?: string | number | undefined;
            offsetMd?: string | number | undefined;
            offsetLg?: string | number | undefined;
            offsetXl?: string | number | undefined;
            offsetXxl?: string | number | undefined;
            orderSm?: string | number | undefined;
            orderMd?: string | number | undefined;
            orderLg?: string | number | undefined;
            orderXl?: string | number | undefined;
            orderXxl?: string | number | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            offset: string | number;
            alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
            order: string | number;
            style: vue.StyleValue;
            tag: string;
            cols: string | number | boolean;
        } & {
            class?: any;
            sm?: string | number | boolean | undefined;
            md?: string | number | boolean | undefined;
            lg?: string | number | boolean | undefined;
            xl?: string | number | boolean | undefined;
            xxl?: string | number | boolean | undefined;
            offsetSm?: string | number | undefined;
            offsetMd?: string | number | undefined;
            offsetLg?: string | number | undefined;
            offsetXl?: string | number | undefined;
            offsetXxl?: string | number | undefined;
            orderSm?: string | number | undefined;
            orderMd?: string | number | undefined;
            orderLg?: string | number | undefined;
            orderXl?: string | number | undefined;
            orderXxl?: string | number | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            offset: string | number;
            alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
            order: string | number;
            style: vue.StyleValue;
            tag: string;
            cols: string | number | boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        offset: string | number;
        alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
        order: string | number;
        style: vue.StyleValue;
        tag: string;
        cols: string | number | boolean;
    } & {
        class?: any;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
        offsetSm?: string | number | undefined;
        offsetMd?: string | number | undefined;
        offsetLg?: string | number | undefined;
        offsetXl?: string | number | undefined;
        offsetXxl?: string | number | undefined;
        orderSm?: string | number | undefined;
        orderMd?: string | number | undefined;
        orderLg?: string | number | undefined;
        orderXl?: string | number | undefined;
        orderXxl?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    offset: string | number;
    alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
    order: string | number;
    style: vue.StyleValue;
    tag: string;
    cols: string | number | boolean;
} & {
    class?: any;
    sm?: string | number | boolean | undefined;
    md?: string | number | boolean | undefined;
    lg?: string | number | boolean | undefined;
    xl?: string | number | boolean | undefined;
    xxl?: string | number | boolean | undefined;
    offsetSm?: string | number | undefined;
    offsetMd?: string | number | undefined;
    offsetLg?: string | number | undefined;
    offsetXl?: string | number | undefined;
    offsetXxl?: string | number | undefined;
    orderSm?: string | number | undefined;
    orderMd?: string | number | undefined;
    orderLg?: string | number | undefined;
    orderXl?: string | number | undefined;
    orderXxl?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    offset: string | number;
    alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
    order: string | number;
    style: vue.StyleValue;
    tag: string;
    cols: string | number | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    alignSelf: {
        type: PropType<"auto" | "center" | "end" | "start" | "stretch" | "baseline">;
        default: null;
        validator: (str: any) => boolean;
    };
    orderSm: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offsetSm: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetLg: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    sm: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    lg: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    alignSelf: {
        type: PropType<"auto" | "center" | "end" | "start" | "stretch" | "baseline">;
        default: null;
        validator: (str: any) => boolean;
    };
    orderSm: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offsetSm: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetLg: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    sm: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    lg: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}>>;
type VCol = InstanceType<typeof VCol>;

declare const VRow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            alignContent?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            dense?: boolean | undefined;
            justify?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            align?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            noGutters?: boolean | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
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
            alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
            style: vue.StyleValue;
            tag: string;
            dense: boolean;
            justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
            align: "center" | "end" | "start" | "stretch" | "baseline";
            noGutters: boolean;
        } & {
            class?: any;
            alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
            justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
            alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
            alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
            style: vue.StyleValue;
            tag: string;
            dense: boolean;
            justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
            align: "center" | "end" | "start" | "stretch" | "baseline";
            noGutters: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        style: vue.StyleValue;
        tag: string;
        dense: boolean;
        justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        align: "center" | "end" | "start" | "stretch" | "baseline";
        noGutters: boolean;
    } & {
        class?: any;
        alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    style: vue.StyleValue;
    tag: string;
    dense: boolean;
    justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    align: "center" | "end" | "start" | "stretch" | "baseline";
    noGutters: boolean;
} & {
    class?: any;
    alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    style: vue.StyleValue;
    tag: string;
    dense: boolean;
    justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    align: "center" | "end" | "start" | "stretch" | "baseline";
    noGutters: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    alignContentSm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContent: {
        type: PropType<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    justifySm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justify: {
        type: PropType<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignSm: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignMd: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignLg: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXxl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<"center" | "end" | "start" | "stretch" | "baseline">;
        default: null;
        validator: (str: any) => boolean;
    };
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    alignContentSm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContent: {
        type: PropType<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    justifySm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justify: {
        type: PropType<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignSm: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignMd: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignLg: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXxl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<"center" | "end" | "start" | "stretch" | "baseline">;
        default: null;
        validator: (str: any) => boolean;
    };
}>>;
type VRow = InstanceType<typeof VRow>;

declare const VSpacer: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
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
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VSpacer = InstanceType<typeof VSpacer>;

export { VCol, VContainer, VRow, VSpacer };
