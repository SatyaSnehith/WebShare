import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VLocaleProvider: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            rtl?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            locale?: string | undefined;
            messages?: Record<string, any> | undefined;
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
            fallbackLocale?: string | undefined;
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
        } & {
            rtl?: boolean | undefined;
            class?: any;
            locale?: string | undefined;
            messages?: Record<string, any> | undefined;
            fallbackLocale?: string | undefined;
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
            rtl: boolean;
            style: vue.StyleValue;
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
    } & {
        rtl?: boolean | undefined;
        class?: any;
        locale?: string | undefined;
        messages?: Record<string, any> | undefined;
        fallbackLocale?: string | undefined;
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
} & {
    rtl?: boolean | undefined;
    class?: any;
    locale?: string | undefined;
    messages?: Record<string, any> | undefined;
    fallbackLocale?: string | undefined;
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
    rtl: boolean;
    style: vue.StyleValue;
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
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>;
type VLocaleProvider = InstanceType<typeof VLocaleProvider>;

export { VLocaleProvider };
