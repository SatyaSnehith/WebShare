import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, nextTick, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}
declare const VImg: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            inline?: boolean | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            }) | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            options?: IntersectionObserverInit | undefined;
            cover?: boolean | undefined;
            src?: string | srcObject | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            onError?: ((value: string | undefined) => any) | undefined;
            onLoad?: ((value: string | undefined) => any) | undefined;
            onLoadstart?: ((value: string | undefined) => any) | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            alt?: string | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
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
            placeholder?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            error?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            sources?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "error", value: string | undefined) => void) & ((event: "load", value: string | undefined) => void) & ((event: "loadstart", value: string | undefined) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inline: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            style: vue.StyleValue;
            eager: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            alt?: string | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            onError?: ((value: string | undefined) => any) | undefined;
            onLoad?: ((value: string | undefined) => any) | undefined;
            onLoadstart?: ((value: string | undefined) => any) | undefined;
        }, {
            currentSrc: vue.ShallowRef<string>;
            image: vue.Ref<HTMLImageElement | undefined>;
            state: vue.ShallowRef<"error" | "loaded" | "idle" | "loading">;
            naturalWidth: vue.ShallowRef<number | undefined>;
            naturalHeight: vue.ShallowRef<number | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            loadstart: (value: string | undefined) => true;
            load: (value: string | undefined) => true;
            error: (value: string | undefined) => true;
        }, string, {
            inline: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            style: vue.StyleValue;
            eager: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        inline: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        style: vue.StyleValue;
        eager: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        aspectRatio?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        alt?: string | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        contentClass?: string | undefined;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            placeholder?: (() => vue.VNodeChild) | undefined;
            error?: (() => vue.VNodeChild) | undefined;
            sources?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            placeholder?: false | (() => vue.VNodeChild) | undefined;
            error?: false | (() => vue.VNodeChild) | undefined;
            sources?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        onError?: ((value: string | undefined) => any) | undefined;
        onLoad?: ((value: string | undefined) => any) | undefined;
        onLoadstart?: ((value: string | undefined) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        currentSrc: vue.ShallowRef<string>;
        image: vue.Ref<HTMLImageElement | undefined>;
        state: vue.ShallowRef<"error" | "loaded" | "idle" | "loading">;
        naturalWidth: vue.ShallowRef<number | undefined>;
        naturalHeight: vue.ShallowRef<number | undefined>;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inline: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    });
    style: vue.StyleValue;
    eager: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    aspectRatio?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
    alt?: string | undefined;
    sizes?: string | undefined;
    srcset?: string | undefined;
    contentClass?: string | undefined;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        placeholder?: (() => vue.VNodeChild) | undefined;
        error?: (() => vue.VNodeChild) | undefined;
        sources?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        placeholder?: false | (() => vue.VNodeChild) | undefined;
        error?: false | (() => vue.VNodeChild) | undefined;
        sources?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
} & {
    onError?: ((value: string | undefined) => any) | undefined;
    onLoad?: ((value: string | undefined) => any) | undefined;
    onLoadstart?: ((value: string | undefined) => any) | undefined;
}, {
    currentSrc: vue.ShallowRef<string>;
    image: vue.Ref<HTMLImageElement | undefined>;
    state: vue.ShallowRef<"error" | "loaded" | "idle" | "loading">;
    naturalWidth: vue.ShallowRef<number | undefined>;
    naturalHeight: vue.ShallowRef<number | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    loadstart: (value: string | undefined) => true;
    load: (value: string | undefined) => true;
    error: (value: string | undefined) => true;
}, string, {
    inline: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    });
    style: vue.StyleValue;
    eager: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
}, vue.ExtractPropTypes<{
    transition: {
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
}>>;
type VImg = InstanceType<typeof VImg>;

export { VImg };
