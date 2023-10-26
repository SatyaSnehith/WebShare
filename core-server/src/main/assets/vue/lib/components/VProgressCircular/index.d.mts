import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VProgressCircular: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            width?: string | number | undefined;
            rotate?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            size?: string | number | undefined;
            tag?: string | undefined;
            modelValue?: string | number | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    value: number;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                value: number;
            }) => vue.VNodeChild);
            indeterminate?: boolean | "disable-shrink" | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                value: number;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    value: number;
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
            bgColor?: string | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                value: number;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            width: string | number;
            rotate: string | number;
            style: vue.StyleValue;
            size: string | number;
            tag: string;
            modelValue: string | number;
        } & {
            color?: string | undefined;
            class?: any;
            indeterminate?: boolean | "disable-shrink" | undefined;
            theme?: string | undefined;
            bgColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    value: number;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                value: number;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    value: number;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                value: number;
            }) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            width: string | number;
            rotate: string | number;
            style: vue.StyleValue;
            size: string | number;
            tag: string;
            modelValue: string | number;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                value: number;
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
        width: string | number;
        rotate: string | number;
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        modelValue: string | number;
    } & {
        color?: string | undefined;
        class?: any;
        indeterminate?: boolean | "disable-shrink" | undefined;
        theme?: string | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                value: number;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            value: number;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
        }) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    width: string | number;
    rotate: string | number;
    style: vue.StyleValue;
    size: string | number;
    tag: string;
    modelValue: string | number;
} & {
    color?: string | undefined;
    class?: any;
    indeterminate?: boolean | "disable-shrink" | undefined;
    theme?: string | undefined;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            value: number;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        value: number;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            value: number;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
    }) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    width: string | number;
    rotate: string | number;
    style: vue.StyleValue;
    size: string | number;
    tag: string;
    modelValue: string | number;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        value: number;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
type VProgressCircular = InstanceType<typeof VProgressCircular>;

export { VProgressCircular };
