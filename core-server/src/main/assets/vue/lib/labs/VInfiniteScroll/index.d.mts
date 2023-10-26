import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, nextTick, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type InfiniteScrollSide = 'start' | 'end' | 'both';
type InfiniteScrollStatus = 'ok' | 'empty' | 'loading' | 'error';
type InfiniteScrollSlot = {
    side: InfiniteScrollSide;
    props: Record<string, any>;
};
declare const VInfiniteScroll: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            direction?: "horizontal" | "vertical" | undefined;
            tag?: string | undefined;
            mode?: "manual" | "intersect" | undefined;
            side?: InfiniteScrollSide | undefined;
            loadMoreText?: string | undefined;
            emptyText?: string | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            margin?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            style?: unknown;
            class?: unknown;
            onLoad?: ((options: {
                side: InfiniteScrollSide;
                done: (status: InfiniteScrollStatus) => void;
            }) => any) | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                loading?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                error?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                empty?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                'load-more'?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                loading?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                error?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                empty?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                'load-more'?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
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
            loading?: ((arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            error?: ((arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'load-more'?: ((arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "load", options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            direction: "horizontal" | "vertical";
            tag: string;
            mode: "manual" | "intersect";
            side: InfiniteScrollSide;
            loadMoreText: string;
            emptyText: string;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            margin?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                loading?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                error?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                empty?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                'load-more'?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                loading?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                error?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                empty?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
                'load-more'?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        } & {
            onLoad?: ((options: {
                side: InfiniteScrollSide;
                done: (status: InfiniteScrollStatus) => void;
            }) => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            load: (options: {
                side: InfiniteScrollSide;
                done: (status: InfiniteScrollStatus) => void;
            }) => true;
        }, string, {
            direction: "horizontal" | "vertical";
            tag: string;
            mode: "manual" | "intersect";
            side: InfiniteScrollSide;
            loadMoreText: string;
            emptyText: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loading: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            error: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            empty: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'load-more': (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        direction: "horizontal" | "vertical";
        tag: string;
        mode: "manual" | "intersect";
        side: InfiniteScrollSide;
        loadMoreText: string;
        emptyText: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        margin?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            loading?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            error?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            'load-more'?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            loading?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            error?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            empty?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
            'load-more'?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    direction: "horizontal" | "vertical";
    tag: string;
    mode: "manual" | "intersect";
    side: InfiniteScrollSide;
    loadMoreText: string;
    emptyText: string;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    margin?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        loading?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        error?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        empty?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        'load-more'?: ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        loading?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        error?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        empty?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
        'load-more'?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
    "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => vue.VNodeChild) | undefined;
} & {
    onLoad?: ((options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    load: (options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => true;
}, string, {
    direction: "horizontal" | "vertical";
    tag: string;
    mode: "manual" | "intersect";
    side: InfiniteScrollSide;
    loadMoreText: string;
    emptyText: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    error: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    empty: (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'load-more': (arg: InfiniteScrollSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"manual" | "intersect">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (StringConstructor | NumberConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"manual" | "intersect">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (StringConstructor | NumberConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VInfiniteScroll = InstanceType<typeof VInfiniteScroll>;

export { VInfiniteScroll };
