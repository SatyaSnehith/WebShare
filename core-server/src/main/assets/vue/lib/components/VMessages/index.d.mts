import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, Component, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type VMessageSlot = {
    message: string;
};
declare const VMessages: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            active?: boolean | undefined;
            transition?: {
                component: Component;
                leaveAbsolute: boolean;
                group: boolean;
            } | NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | undefined;
            style?: vue.StyleValue | undefined;
            messages?: string | readonly string[] | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
            $children?: {} | vue.VNodeChild | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            active: boolean;
            transition: {
                component: Component;
                leaveAbsolute: boolean;
                group: boolean;
            } | NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })>;
            style: vue.StyleValue;
            messages: string | readonly string[];
        } & {
            color?: string | undefined;
            class?: any;
        } & {
            $children?: {} | vue.VNodeChild | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            active: boolean;
            transition: {
                component: Component;
                leaveAbsolute: boolean;
                group: boolean;
            } | NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })>;
            style: vue.StyleValue;
            messages: string | readonly string[];
        }, {}, string, vue.SlotsType<Partial<{
            message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        active: boolean;
        transition: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        style: vue.StyleValue;
        messages: string | readonly string[];
    } & {
        color?: string | undefined;
        class?: any;
    } & {
        $children?: {} | vue.VNodeChild | {
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    active: boolean;
    transition: {
        component: Component;
        leaveAbsolute: boolean;
        group: boolean;
    } | NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })>;
    style: vue.StyleValue;
    messages: string | readonly string[];
} & {
    color?: string | undefined;
    class?: any;
} & {
    $children?: {} | vue.VNodeChild | {
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    transition: {
        component: Component;
        leaveAbsolute: boolean;
        group: boolean;
    } | NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })>;
    style: vue.StyleValue;
    messages: string | readonly string[];
}, {}, string, vue.SlotsType<Partial<{
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<{
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<{
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}>>;
type VMessages = InstanceType<typeof VMessages>;

export { VMessages };
