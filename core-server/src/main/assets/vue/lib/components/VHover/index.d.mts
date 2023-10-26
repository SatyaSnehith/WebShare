import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VHover: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isHovering: boolean | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isHovering: boolean | undefined;
                    props: Record<string, unknown>;
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
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: boolean;
        } & {
            modelValue?: boolean | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isHovering: boolean | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isHovering: boolean | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => true;
        }, string, {
            disabled: boolean;
            modelValue: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
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
        modelValue?: boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isHovering: boolean | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isHovering: boolean | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isHovering: boolean | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
} & {
    modelValue?: boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isHovering: boolean | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isHovering: boolean | undefined;
        props: Record<string, unknown>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isHovering: boolean | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isHovering: boolean | undefined;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, {
    disabled: boolean;
    modelValue: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isHovering: boolean | undefined;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>;
type VHover = InstanceType<typeof VHover>;

export { VHover };
