import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, Ref, EffectScope, JSXComponent, UnwrapRef, CSSProperties, nextTick, VNode } from "/js/vue.js";

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;
type SelectItemKey = boolean | null | undefined | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps$1 {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps, scope: EffectScope): void;

declare const VBottomSheet: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            absolute?: boolean | undefined;
            location?: Anchor | undefined;
            origin?: NonNullable<"auto" | Anchor | "overlap"> | undefined;
            inset?: boolean | undefined;
            transition?: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }> | undefined;
            zIndex?: NonNullable<string | number> | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: string | boolean | undefined;
            fullscreen?: boolean | undefined;
            retainFocus?: boolean | undefined;
            scrollable?: boolean | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: any;
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
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: NonNullable<"auto" | Anchor | "overlap">;
            inset: boolean;
            transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }>;
            zIndex: NonNullable<string | number>;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            retainFocus: boolean;
            scrollable: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: NonNullable<"auto" | Anchor | "overlap">;
            inset: boolean;
            transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }>;
            zIndex: NonNullable<string | number>;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            retainFocus: boolean;
            scrollable: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
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
        absolute: boolean;
        location: Anchor;
        origin: NonNullable<"auto" | Anchor | "overlap">;
        inset: boolean;
        transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        zIndex: NonNullable<string | number>;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        fullscreen: boolean;
        retainFocus: boolean;
        scrollable: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: string | Element | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    absolute: boolean;
    location: Anchor;
    origin: NonNullable<"auto" | Anchor | "overlap">;
    inset: boolean;
    transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: vue.Component;
    }>;
    zIndex: NonNullable<string | number>;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    fullscreen: boolean;
    retainFocus: boolean;
    scrollable: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
    theme?: string | undefined;
    contentClass?: any;
    activator?: string | Element | vue.ComponentPublicInstance | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    absolute: boolean;
    location: Anchor;
    origin: NonNullable<"auto" | Anchor | "overlap">;
    inset: boolean;
    transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: vue.Component;
    }>;
    zIndex: NonNullable<string | number>;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    fullscreen: boolean;
    retainFocus: boolean;
    scrollable: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>>;
        default: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
    };
    theme: StringConstructor;
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: Omit<{
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"auto" | Anchor | "overlap">>;
        default: NonNullable<"auto" | Anchor | "overlap">;
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
    inset: BooleanConstructor;
}, vue.ExtractPropTypes<{
    transition: Omit<Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>>;
        default: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
    };
    theme: StringConstructor;
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: Omit<{
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"auto" | Anchor | "overlap">>;
        default: NonNullable<"auto" | Anchor | "overlap">;
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
    inset: BooleanConstructor;
}>>;
type VBottomSheet = InstanceType<typeof VBottomSheet>;

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

interface DataIteratorItem<T = any> extends GroupableItem<T>, SelectableItem {
    value: unknown;
}

type VDataIteratorSlotProps = {
    page: number;
    itemsPerPage: number;
    sortBy: readonly SortItem[];
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    prevPage: ReturnType<typeof providePagination>['prevPage'];
    nextPage: ReturnType<typeof providePagination>['nextPage'];
    setPage: ReturnType<typeof providePagination>['setPage'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly DataIteratorItem[];
    groupedItems: readonly (DataIteratorItem | Group<DataIteratorItem>)[];
};
declare const VDataIterator: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            loading?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            expanded?: readonly string[] | undefined;
            tag?: string | undefined;
            page?: string | number | undefined;
            sortBy?: readonly SortItem[] | undefined;
            items?: any[] | undefined;
            modelValue?: readonly any[] | undefined;
            valueComparator?: typeof deepEqual | undefined;
            selectStrategy?: "all" | "page" | "single" | undefined;
            returnObject?: boolean | undefined;
            filterMode?: FilterMode | undefined;
            noFilter?: boolean | undefined;
            itemValue?: SelectItemKey;
            expandOnClick?: boolean | undefined;
            showExpand?: boolean | undefined;
            itemSelectable?: SelectItemKey;
            showSelect?: boolean | undefined;
            groupBy?: readonly SortItem[] | undefined;
            multiSort?: boolean | undefined;
            mustSort?: boolean | undefined;
            itemsPerPage?: NonNullable<string | number> | undefined;
            search?: string | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                header?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                footer?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataIteratorSlotProps) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                header?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                footer?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:header"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((value: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
            "v-slot:footer"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            footer?: ((arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: any[]) => void) & ((event: "update:options", value: any) => void) & ((event: "update:groupBy", value: any) => void) & ((event: "update:page", value: number) => void) & ((event: "update:itemsPerPage", value: number) => void) & ((event: "update:sortBy", value: any) => void) & ((event: "update:expanded", value: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            loading: boolean;
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sortBy: readonly SortItem[];
            items: any[];
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: NonNullable<string | number>;
        } & {
            search?: string | undefined;
            class?: any;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            filterKeys?: FilterKeys | undefined;
            customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                header?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                footer?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                'no-data'?: (() => vue.VNodeChild) | undefined;
            } | ((arg: VDataIteratorSlotProps) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                header?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                footer?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
                'no-data'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:footer"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
            "onUpdate:expanded"?: ((value: any) => any) | undefined;
            "onUpdate:sortBy"?: ((value: any) => any) | undefined;
            "onUpdate:groupBy"?: ((value: any) => any) | undefined;
            "onUpdate:page"?: ((value: number) => any) | undefined;
            "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
            "onUpdate:options"?: ((value: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any[]) => boolean;
            'update:groupBy': (value: any) => boolean;
            'update:page': (value: number) => boolean;
            'update:itemsPerPage': (value: number) => boolean;
            'update:sortBy': (value: any) => boolean;
            'update:options': (value: any) => boolean;
            'update:expanded': (value: any) => boolean;
        }, string, {
            loading: boolean;
            style: vue.StyleValue;
            expanded: readonly string[];
            tag: string;
            page: string | number;
            sortBy: readonly SortItem[];
            items: any[];
            modelValue: readonly any[];
            valueComparator: typeof deepEqual;
            selectStrategy: "all" | "page" | "single";
            returnObject: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            itemValue: SelectItemKey;
            expandOnClick: boolean;
            showExpand: boolean;
            itemSelectable: SelectItemKey;
            showSelect: boolean;
            groupBy: readonly SortItem[];
            multiSort: boolean;
            mustSort: boolean;
            itemsPerPage: NonNullable<string | number>;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            footer: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        loading: boolean;
        style: vue.StyleValue;
        expanded: readonly string[];
        tag: string;
        page: string | number;
        sortBy: readonly SortItem[];
        items: any[];
        modelValue: readonly any[];
        valueComparator: typeof deepEqual;
        selectStrategy: "all" | "page" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemValue: SelectItemKey;
        expandOnClick: boolean;
        showExpand: boolean;
        itemSelectable: SelectItemKey;
        showSelect: boolean;
        groupBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        itemsPerPage: NonNullable<string | number>;
    } & {
        search?: string | undefined;
        class?: any;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            header?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            footer?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            'no-data'?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VDataIteratorSlotProps) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            header?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            footer?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
            'no-data'?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:footer"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
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
    loading: boolean;
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sortBy: readonly SortItem[];
    items: any[];
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: NonNullable<string | number>;
} & {
    search?: string | undefined;
    class?: any;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    filterKeys?: FilterKeys | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        header?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        footer?: ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        'no-data'?: (() => vue.VNodeChild) | undefined;
    } | ((arg: VDataIteratorSlotProps) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        header?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        footer?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
        'no-data'?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:footer"?: false | ((arg: VDataIteratorSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => boolean;
    'update:groupBy': (value: any) => boolean;
    'update:page': (value: number) => boolean;
    'update:itemsPerPage': (value: number) => boolean;
    'update:sortBy': (value: any) => boolean;
    'update:options': (value: any) => boolean;
    'update:expanded': (value: any) => boolean;
}, string, {
    loading: boolean;
    style: vue.StyleValue;
    expanded: readonly string[];
    tag: string;
    page: string | number;
    sortBy: readonly SortItem[];
    items: any[];
    modelValue: readonly any[];
    valueComparator: typeof deepEqual;
    selectStrategy: "all" | "page" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemValue: SelectItemKey;
    expandOnClick: boolean;
    showExpand: boolean;
    itemSelectable: SelectItemKey;
    showSelect: boolean;
    groupBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    itemsPerPage: NonNullable<string | number>;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    footer: (arg: VDataIteratorSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
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
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
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
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    search: StringConstructor;
    loading: BooleanConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
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
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
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
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    search: StringConstructor;
    loading: BooleanConstructor;
}>>;
type VDataIterator = InstanceType<typeof VDataIterator>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

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

declare const VDateCard: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: {
                    new (...args: any[]): {
                        $: vue.ComponentInternalInstance;
                        $data: {};
                        $props: {
                            origin?: string | undefined;
                            disabled?: boolean | undefined;
                            group?: boolean | undefined;
                            mode?: string | undefined;
                            hideOnLeave?: boolean | undefined;
                            leaveAbsolute?: boolean | undefined;
                            key?: string | number | symbol | undefined;
                            style?: unknown;
                            class?: unknown;
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
                        } & {} & {
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                }, {}, string, vue.SlotsType<Partial<{
                    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }, vue.ExtractPropTypes<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }>>;
                leaveAbsolute: boolean;
            } | undefined;
            inputMode?: "calendar" | "keyboard" | undefined;
            disabled?: string | boolean | string[] | undefined;
            multiple?: boolean | undefined;
            variant?: string | undefined;
            modelValue?: any[] | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            hideActions?: boolean | undefined;
            modeIcon?: string | undefined;
            viewMode?: "month" | "year" | undefined;
            showAdjacentMonths?: boolean | undefined;
            hideWeekdays?: boolean | undefined;
            showWeek?: boolean | undefined;
            cancelText?: string | undefined;
            okText?: string | undefined;
            max?: string | number | Date | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            color?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                text?: (() => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: (() => vue.VNodeChild) | undefined;
                item?: (() => vue.VNodeChild) | undefined;
            };
            min?: string | number | Date | undefined;
            format?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            side?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                text?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: false | (() => vue.VNodeChild) | undefined;
                item?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            displayDate?: any;
            "onUpdate:displayDate"?: ((value: any) => any) | undefined;
            "onUpdate:inputMode"?: ((value: any) => any) | undefined;
            "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
            onCancel?: (() => any) | undefined;
            onSave?: (() => any) | undefined;
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
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            text?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            image?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "cancel") => void) & ((event: "update:modelValue", value: any) => void) & ((event: "update:inputMode", value: any) => void) & ((event: "update:viewMode", mode: "month" | "year") => void) & ((event: "update:displayDate", value: any) => void) & ((event: "save") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: {
                    new (...args: any[]): {
                        $: vue.ComponentInternalInstance;
                        $data: {};
                        $props: {
                            origin?: string | undefined;
                            disabled?: boolean | undefined;
                            group?: boolean | undefined;
                            mode?: string | undefined;
                            hideOnLeave?: boolean | undefined;
                            leaveAbsolute?: boolean | undefined;
                            key?: string | number | symbol | undefined;
                            style?: unknown;
                            class?: unknown;
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
                        } & {} & {
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                }, {}, string, vue.SlotsType<Partial<{
                    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }, vue.ExtractPropTypes<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }>>;
                leaveAbsolute: boolean;
            };
            inputMode: "calendar" | "keyboard";
            disabled: string | boolean | string[];
            multiple: boolean;
            variant: string;
            modelValue: any[];
            nextIcon: string;
            prevIcon: string;
            hideActions: boolean;
            modeIcon: string;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            cancelText: string;
            okText: string;
        } & {
            max?: string | number | Date | undefined;
            height?: string | number | undefined;
            color?: string | undefined;
            min?: string | number | Date | undefined;
            format?: string | undefined;
            side?: string | undefined;
            displayDate?: any;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                text?: (() => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: (() => vue.VNodeChild) | undefined;
                item?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                text?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: false | (() => vue.VNodeChild) | undefined;
                item?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
            "onUpdate:displayDate"?: ((value: any) => any) | undefined;
            "onUpdate:inputMode"?: ((value: any) => any) | undefined;
            "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
            onCancel?: (() => any) | undefined;
            onSave?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            save: () => true;
            cancel: () => true;
            'update:displayDate': (value: any) => true;
            'update:inputMode': (value: any) => true;
            'update:modelValue': (value: any) => true;
            'update:viewMode': (mode: 'month' | 'year') => true;
        }, string, {
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: {
                    new (...args: any[]): {
                        $: vue.ComponentInternalInstance;
                        $data: {};
                        $props: {
                            origin?: string | undefined;
                            disabled?: boolean | undefined;
                            group?: boolean | undefined;
                            mode?: string | undefined;
                            hideOnLeave?: boolean | undefined;
                            leaveAbsolute?: boolean | undefined;
                            key?: string | number | symbol | undefined;
                            style?: unknown;
                            class?: unknown;
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
                        } & {} & {
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
                            origin: string | undefined;
                            disabled: boolean;
                            group: boolean;
                            mode: string | undefined;
                            hideOnLeave: boolean;
                            leaveAbsolute: boolean;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                }, {}, string, vue.SlotsType<Partial<{
                    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }, vue.ExtractPropTypes<{
                    disabled: BooleanConstructor;
                    group: BooleanConstructor;
                    hideOnLeave: BooleanConstructor;
                    leaveAbsolute: BooleanConstructor;
                    mode: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                    origin: {
                        type: PropType<string | undefined>;
                        default: string | undefined;
                    };
                }>>;
                leaveAbsolute: boolean;
            };
            inputMode: "calendar" | "keyboard";
            disabled: string | boolean | string[];
            multiple: boolean;
            variant: string;
            modelValue: any[];
            nextIcon: string;
            prevIcon: string;
            hideActions: boolean;
            modeIcon: string;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            cancelText: string;
            okText: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            image: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: {
                new (...args: any[]): {
                    $: vue.ComponentInternalInstance;
                    $data: {};
                    $props: {
                        origin?: string | undefined;
                        disabled?: boolean | undefined;
                        group?: boolean | undefined;
                        mode?: string | undefined;
                        hideOnLeave?: boolean | undefined;
                        leaveAbsolute?: boolean | undefined;
                        key?: string | number | symbol | undefined;
                        style?: unknown;
                        class?: unknown;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }, {}, string, vue.SlotsType<Partial<{
                default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                    [key: string]: any;
                }>[];
            }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }, vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }>>;
            leaveAbsolute: boolean;
        };
        inputMode: "calendar" | "keyboard";
        disabled: string | boolean | string[];
        multiple: boolean;
        variant: string;
        modelValue: any[];
        nextIcon: string;
        prevIcon: string;
        hideActions: boolean;
        modeIcon: string;
        viewMode: "month" | "year";
        showAdjacentMonths: boolean;
        hideWeekdays: boolean;
        showWeek: boolean;
        cancelText: string;
        okText: string;
    } & {
        max?: string | number | Date | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        min?: string | number | Date | undefined;
        format?: string | undefined;
        side?: string | undefined;
        displayDate?: any;
        allowedDates?: Function | unknown[] | undefined;
        hoverDate?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            subtitle?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            image?: (() => vue.VNodeChild) | undefined;
            item?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            subtitle?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            image?: false | (() => vue.VNodeChild) | undefined;
            item?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        "onUpdate:displayDate"?: ((value: any) => any) | undefined;
        "onUpdate:inputMode"?: ((value: any) => any) | undefined;
        "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
        onCancel?: (() => any) | undefined;
        onSave?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: {
            new (...args: any[]): {
                $: vue.ComponentInternalInstance;
                $data: {};
                $props: {
                    origin?: string | undefined;
                    disabled?: boolean | undefined;
                    group?: boolean | undefined;
                    mode?: string | undefined;
                    hideOnLeave?: boolean | undefined;
                    leaveAbsolute?: boolean | undefined;
                    key?: string | number | symbol | undefined;
                    style?: unknown;
                    class?: unknown;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
            origin: string | undefined;
            disabled: boolean;
            group: boolean;
            mode: string | undefined;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        } & {} & {
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
            origin: string | undefined;
            disabled: boolean;
            group: boolean;
            mode: string | undefined;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
            disabled: BooleanConstructor;
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
            origin: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
        }, vue.ExtractPropTypes<{
            disabled: BooleanConstructor;
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
            origin: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
        }>>;
        leaveAbsolute: boolean;
    };
    inputMode: "calendar" | "keyboard";
    disabled: string | boolean | string[];
    multiple: boolean;
    variant: string;
    modelValue: any[];
    nextIcon: string;
    prevIcon: string;
    hideActions: boolean;
    modeIcon: string;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    cancelText: string;
    okText: string;
} & {
    max?: string | number | Date | undefined;
    height?: string | number | undefined;
    color?: string | undefined;
    min?: string | number | Date | undefined;
    format?: string | undefined;
    side?: string | undefined;
    displayDate?: any;
    allowedDates?: Function | unknown[] | undefined;
    hoverDate?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
        subtitle?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        text?: (() => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        image?: (() => vue.VNodeChild) | undefined;
        item?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
        subtitle?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        text?: false | (() => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        image?: false | (() => vue.VNodeChild) | undefined;
        item?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onUpdate:displayDate"?: ((value: any) => any) | undefined;
    "onUpdate:inputMode"?: ((value: any) => any) | undefined;
    "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
    onCancel?: (() => any) | undefined;
    onSave?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    save: () => true;
    cancel: () => true;
    'update:displayDate': (value: any) => true;
    'update:inputMode': (value: any) => true;
    'update:modelValue': (value: any) => true;
    'update:viewMode': (mode: 'month' | 'year') => true;
}, string, {
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: {
            new (...args: any[]): {
                $: vue.ComponentInternalInstance;
                $data: {};
                $props: {
                    origin?: string | undefined;
                    disabled?: boolean | undefined;
                    group?: boolean | undefined;
                    mode?: string | undefined;
                    hideOnLeave?: boolean | undefined;
                    leaveAbsolute?: boolean | undefined;
                    key?: string | number | symbol | undefined;
                    style?: unknown;
                    class?: unknown;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
            origin: string | undefined;
            disabled: boolean;
            group: boolean;
            mode: string | undefined;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        } & {} & {
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
            origin: string | undefined;
            disabled: boolean;
            group: boolean;
            mode: string | undefined;
            hideOnLeave: boolean;
            leaveAbsolute: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
            disabled: BooleanConstructor;
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
            origin: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
        }, vue.ExtractPropTypes<{
            disabled: BooleanConstructor;
            group: BooleanConstructor;
            hideOnLeave: BooleanConstructor;
            leaveAbsolute: BooleanConstructor;
            mode: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
            origin: {
                type: PropType<string | undefined>;
                default: string | undefined;
            };
        }>>;
        leaveAbsolute: boolean;
    };
    inputMode: "calendar" | "keyboard";
    disabled: string | boolean | string[];
    multiple: boolean;
    variant: string;
    modelValue: any[];
    nextIcon: string;
    prevIcon: string;
    hideActions: boolean;
    modeIcon: string;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    cancelText: string;
    okText: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    image: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: {
                new (...args: any[]): {
                    $: vue.ComponentInternalInstance;
                    $data: {};
                    $props: {
                        origin?: string | undefined;
                        disabled?: boolean | undefined;
                        group?: boolean | undefined;
                        mode?: string | undefined;
                        hideOnLeave?: boolean | undefined;
                        leaveAbsolute?: boolean | undefined;
                        key?: string | number | symbol | undefined;
                        style?: unknown;
                        class?: unknown;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }, {}, string, vue.SlotsType<Partial<{
                default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                    [key: string]: any;
                }>[];
            }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }, vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }>>;
            leaveAbsolute: boolean;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: {
                new (...args: any[]): {
                    $: vue.ComponentInternalInstance;
                    $data: {};
                    $props: {
                        origin?: string | undefined;
                        disabled?: boolean | undefined;
                        group?: boolean | undefined;
                        mode?: string | undefined;
                        hideOnLeave?: boolean | undefined;
                        leaveAbsolute?: boolean | undefined;
                        key?: string | number | symbol | undefined;
                        style?: unknown;
                        class?: unknown;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }, {}, string, vue.SlotsType<Partial<{
                default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                    [key: string]: any;
                }>[];
            }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }, vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }>>;
            leaveAbsolute: boolean;
        };
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    format: StringConstructor;
    modelValue: {
        type: PropType<any[]>;
        default: () => never[];
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    inputMode: {
        type: PropType<"calendar" | "keyboard">;
        default: string;
    };
    hideActions: BooleanConstructor;
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: {
                new (...args: any[]): {
                    $: vue.ComponentInternalInstance;
                    $data: {};
                    $props: {
                        origin?: string | undefined;
                        disabled?: boolean | undefined;
                        group?: boolean | undefined;
                        mode?: string | undefined;
                        hideOnLeave?: boolean | undefined;
                        leaveAbsolute?: boolean | undefined;
                        key?: string | number | symbol | undefined;
                        style?: unknown;
                        class?: unknown;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }, {}, string, vue.SlotsType<Partial<{
                default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                    [key: string]: any;
                }>[];
            }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }, vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }>>;
            leaveAbsolute: boolean;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: {
                new (...args: any[]): {
                    $: vue.ComponentInternalInstance;
                    $data: {};
                    $props: {
                        origin?: string | undefined;
                        disabled?: boolean | undefined;
                        group?: boolean | undefined;
                        mode?: string | undefined;
                        hideOnLeave?: boolean | undefined;
                        leaveAbsolute?: boolean | undefined;
                        key?: string | number | symbol | undefined;
                        style?: unknown;
                        class?: unknown;
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
                    } & {} & {
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
                        origin: string | undefined;
                        disabled: boolean;
                        group: boolean;
                        mode: string | undefined;
                        hideOnLeave: boolean;
                        leaveAbsolute: boolean;
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
                    origin: string | undefined;
                    disabled: boolean;
                    group: boolean;
                    mode: string | undefined;
                    hideOnLeave: boolean;
                    leaveAbsolute: boolean;
                } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            } & {} & {
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
                origin: string | undefined;
                disabled: boolean;
                group: boolean;
                mode: string | undefined;
                hideOnLeave: boolean;
                leaveAbsolute: boolean;
            }, {}, string, vue.SlotsType<Partial<{
                default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                    [key: string]: any;
                }>[];
            }>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }, vue.ExtractPropTypes<{
                disabled: BooleanConstructor;
                group: BooleanConstructor;
                hideOnLeave: BooleanConstructor;
                leaveAbsolute: BooleanConstructor;
                mode: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
                origin: {
                    type: PropType<string | undefined>;
                    default: string | undefined;
                };
            }>>;
            leaveAbsolute: boolean;
        };
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    format: StringConstructor;
    modelValue: {
        type: PropType<any[]>;
        default: () => never[];
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    inputMode: {
        type: PropType<"calendar" | "keyboard">;
        default: string;
    };
    hideActions: BooleanConstructor;
}>>;
type VDateCard = InstanceType<typeof VDateCard>;

declare const VPicker: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            landscape?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            key?: string | number | symbol | undefined;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            title?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                header?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
            };
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                header?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            bgColor?: string | undefined;
            "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            header?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            landscape: boolean;
            tag: string;
        } & {
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            title?: string | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                header?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                header?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            landscape: boolean;
            tag: string;
            rounded: string | number | boolean;
        }, {}, string, vue.SlotsType<Partial<{
            header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        landscape: boolean;
        tag: string;
    } & {
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        title?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    landscape: boolean;
    tag: string;
} & {
    location?: Anchor | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
    title?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        header?: (() => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | (() => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    landscape: boolean;
    tag: string;
    rounded: string | number | boolean;
}, {}, string, vue.SlotsType<Partial<{
    header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
}>>;
type VPicker = InstanceType<typeof VPicker>;

declare const VDatePicker: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            header?: string | undefined;
            style?: vue.StyleValue | undefined;
            title?: string | undefined;
            inputMode?: "calendar" | "keyboard" | undefined;
            disabled?: string | boolean | string[] | undefined;
            multiple?: boolean | undefined;
            landscape?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            variant?: string | undefined;
            modelValue?: any[] | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            hideActions?: boolean | undefined;
            modeIcon?: string | undefined;
            viewMode?: "month" | "year" | undefined;
            showAdjacentMonths?: boolean | undefined;
            hideWeekdays?: boolean | undefined;
            showWeek?: boolean | undefined;
            calendarIcon?: string | undefined;
            keyboardIcon?: string | undefined;
            cancelText?: string | undefined;
            okText?: string | undefined;
            inputText?: string | undefined;
            inputPlaceholder?: string | undefined;
            max?: string | number | Date | undefined;
            key?: string | number | symbol | undefined;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    header: string;
                    appendIcon: string;
                    'onClick:append': () => void;
                }) => vue.VNodeChild) | undefined;
            };
            min?: string | number | Date | undefined;
            elevation?: string | number | undefined;
            format?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            side?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    header: string;
                    appendIcon: string;
                    'onClick:append': () => void;
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
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            bgColor?: string | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "v-slot:header"?: false | ((arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
            }) => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            displayDate?: any;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
            "onClick:cancel"?: (() => any) | undefined;
            "onClick:save"?: (() => any) | undefined;
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
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", date: readonly any[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:inputMode", inputMode: "calendar" | "keyboard") => void) & ((event: "update:viewMode", viewMode: "month" | "year") => void) & ((event: "update:displayDate", date: any) => void) & ((event: "click:cancel") => void) & ((event: "click:save") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            header: string;
            style: vue.StyleValue;
            title: string;
            inputMode: "calendar" | "keyboard";
            disabled: string | boolean | string[];
            multiple: boolean;
            landscape: boolean;
            tag: string;
            variant: string;
            modelValue: any[];
            nextIcon: string;
            prevIcon: string;
            hideActions: boolean;
            modeIcon: string;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            calendarIcon: string;
            keyboardIcon: string;
            cancelText: string;
            okText: string;
            inputText: string;
            inputPlaceholder: string;
        } & {
            max?: string | number | Date | undefined;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            class?: any;
            min?: string | number | Date | undefined;
            elevation?: string | number | undefined;
            format?: string | undefined;
            side?: string | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            displayDate?: any;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    header: string;
                    appendIcon: string;
                    'onClick:append': () => void;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    header: string;
                    appendIcon: string;
                    'onClick:append': () => void;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
            "onClick:cancel"?: (() => any) | undefined;
            "onClick:save"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: readonly any[]) => boolean;
            'update:displayDate': (date: any) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
            'update:viewMode': (viewMode: "month" | "year") => boolean;
            'click:cancel': () => true;
            'click:save': () => true;
        }, string, {
            header: string;
            style: vue.StyleValue;
            title: string;
            inputMode: "calendar" | "keyboard";
            disabled: string | boolean | string[];
            multiple: boolean;
            landscape: boolean;
            tag: string;
            rounded: string | number | boolean;
            variant: string;
            modelValue: any[];
            nextIcon: string;
            prevIcon: string;
            hideActions: boolean;
            modeIcon: string;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            calendarIcon: string;
            keyboardIcon: string;
            cancelText: string;
            okText: string;
            inputText: string;
            inputPlaceholder: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
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
        header: string;
        style: vue.StyleValue;
        title: string;
        inputMode: "calendar" | "keyboard";
        disabled: string | boolean | string[];
        multiple: boolean;
        landscape: boolean;
        tag: string;
        variant: string;
        modelValue: any[];
        nextIcon: string;
        prevIcon: string;
        hideActions: boolean;
        modeIcon: string;
        viewMode: "month" | "year";
        showAdjacentMonths: boolean;
        hideWeekdays: boolean;
        showWeek: boolean;
        calendarIcon: string;
        keyboardIcon: string;
        cancelText: string;
        okText: string;
        inputText: string;
        inputPlaceholder: string;
    } & {
        max?: string | number | Date | undefined;
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        class?: any;
        min?: string | number | Date | undefined;
        elevation?: string | number | undefined;
        format?: string | undefined;
        side?: string | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        displayDate?: any;
        allowedDates?: Function | unknown[] | undefined;
        hoverDate?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            header?: ((arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            header?: false | ((arg: {
                header: string;
                appendIcon: string;
                'onClick:append': () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            header: string;
            appendIcon: string;
            'onClick:append': () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
        "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
        "onClick:cancel"?: (() => any) | undefined;
        "onClick:save"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    header: string;
    style: vue.StyleValue;
    title: string;
    inputMode: "calendar" | "keyboard";
    disabled: string | boolean | string[];
    multiple: boolean;
    landscape: boolean;
    tag: string;
    variant: string;
    modelValue: any[];
    nextIcon: string;
    prevIcon: string;
    hideActions: boolean;
    modeIcon: string;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    calendarIcon: string;
    keyboardIcon: string;
    cancelText: string;
    okText: string;
    inputText: string;
    inputPlaceholder: string;
} & {
    max?: string | number | Date | undefined;
    location?: Anchor | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
    class?: any;
    min?: string | number | Date | undefined;
    elevation?: string | number | undefined;
    format?: string | undefined;
    side?: string | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    displayDate?: any;
    allowedDates?: Function | unknown[] | undefined;
    hoverDate?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        header?: ((arg: {
            header: string;
            appendIcon: string;
            'onClick:append': () => void;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        header?: false | ((arg: {
            header: string;
            appendIcon: string;
            'onClick:append': () => void;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: {
        header: string;
        appendIcon: string;
        'onClick:append': () => void;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
    "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
    "onClick:cancel"?: (() => any) | undefined;
    "onClick:save"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: readonly any[]) => boolean;
    'update:displayDate': (date: any) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
    'update:viewMode': (viewMode: "month" | "year") => boolean;
    'click:cancel': () => true;
    'click:save': () => true;
}, string, {
    header: string;
    style: vue.StyleValue;
    title: string;
    inputMode: "calendar" | "keyboard";
    disabled: string | boolean | string[];
    multiple: boolean;
    landscape: boolean;
    tag: string;
    rounded: string | number | boolean;
    variant: string;
    modelValue: any[];
    nextIcon: string;
    prevIcon: string;
    hideActions: boolean;
    modeIcon: string;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    calendarIcon: string;
    keyboardIcon: string;
    cancelText: string;
    okText: string;
    inputText: string;
    inputPlaceholder: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        header: string;
        appendIcon: string;
        'onClick:append': () => void;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    format: StringConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    disabled: {
        type: vue.PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    calendarIcon: {
        type: StringConstructor;
        default: string;
    };
    keyboardIcon: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    inputText: {
        type: StringConstructor;
        default: string;
    };
    inputPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    format: StringConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    disabled: {
        type: vue.PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    calendarIcon: {
        type: StringConstructor;
        default: string;
    };
    keyboardIcon: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    inputText: {
        type: StringConstructor;
        default: string;
    };
    inputPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
}>>;
type VDatePicker = InstanceType<typeof VDatePicker>;

declare const VDatePickerControls: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: string | boolean | string[] | undefined;
            variant?: string | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            modeIcon?: string | undefined;
            viewMode?: "month" | "year" | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            class?: unknown;
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
            displayDate?: string | undefined;
            "onClick:mode"?: (() => any) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
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
        $emit: ((event: "click:mode") => void) & ((event: "click:prev") => void) & ((event: "click:next") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: string | boolean | string[];
            variant: string;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year";
        } & {
            displayDate?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onClick:mode"?: (() => any) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:mode': () => true;
            'click:prev': () => true;
            'click:next': () => true;
        }, string, {
            disabled: string | boolean | string[];
            variant: string;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year";
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
        disabled: string | boolean | string[];
        variant: string;
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year";
    } & {
        displayDate?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:mode"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: string | boolean | string[];
    variant: string;
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year";
} & {
    displayDate?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onClick:mode"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:mode': () => true;
    'click:prev': () => true;
    'click:next': () => true;
}, string, {
    disabled: string | boolean | string[];
    variant: string;
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year";
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    displayDate: StringConstructor;
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    displayDate: StringConstructor;
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    variant: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
}>>;
type VDatePickerControls = InstanceType<typeof VDatePickerControls>;

declare const VDatePickerHeader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            transition?: string | undefined;
            header?: string | undefined;
            style?: unknown;
            class?: unknown;
            onClick?: (EventProp<[MouseEvent], (args_0: MouseEvent) => any> & (() => any)) | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                prepend?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            appendIcon?: string | undefined;
            "onClick:append"?: (() => any) | undefined;
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
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click") => void) & ((event: "click:append") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            color?: string | undefined;
            transition?: string | undefined;
            header?: string | undefined;
            onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            appendIcon?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                prepend?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            onClick?: (() => any) | undefined;
            "onClick:append"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            click: () => true;
            'click:append': () => true;
        }, string, {}, {}, string, vue.SlotsType<Partial<{
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        color?: string | undefined;
        transition?: string | undefined;
        header?: string | undefined;
        onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        appendIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            prepend?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        onClick?: (() => any) | undefined;
        "onClick:append"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    color?: string | undefined;
    transition?: string | undefined;
    header?: string | undefined;
    onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    appendIcon?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        prepend?: (() => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
} & {
    onClick?: (() => any) | undefined;
    "onClick:append"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    click: () => true;
    'click:append': () => true;
}, string, {}, {}, string, vue.SlotsType<Partial<{
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    appendIcon: StringConstructor;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}, vue.ExtractPropTypes<{
    appendIcon: StringConstructor;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}>>;
type VDatePickerHeader = InstanceType<typeof VDatePickerHeader>;

declare const VDatePickerMonth: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            color?: string | undefined;
            multiple?: boolean | undefined;
            modelValue?: any[] | undefined;
            displayDate?: any;
            showAdjacentMonths?: boolean | undefined;
            hideWeekdays?: boolean | undefined;
            showWeek?: boolean | undefined;
            max?: string | number | Date | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            min?: string | number | Date | undefined;
            format?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            side?: string | undefined;
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
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
            "onUpdate:hoverDate"?: ((date: any) => any) | undefined;
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
        $emit: ((event: "update:modelValue", date: readonly any[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:displayDate", date: any) => void) & ((event: "update:hoverDate", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            color: string;
            multiple: boolean;
            modelValue: any[];
            displayDate: any;
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
        } & {
            max?: string | number | Date | undefined;
            min?: string | number | Date | undefined;
            format?: string | undefined;
            side?: string | undefined;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:hoverDate"?: ((date: any) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:hoverDate': (date: any) => true;
            'update:modelValue': (date: readonly any[]) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:displayDate': (date: any) => boolean;
        }, string, {
            color: string;
            multiple: boolean;
            modelValue: any[];
            displayDate: any;
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
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
        color: string;
        multiple: boolean;
        modelValue: any[];
        displayDate: any;
        showAdjacentMonths: boolean;
        hideWeekdays: boolean;
        showWeek: boolean;
    } & {
        max?: string | number | Date | undefined;
        min?: string | number | Date | undefined;
        format?: string | undefined;
        side?: string | undefined;
        allowedDates?: Function | unknown[] | undefined;
        hoverDate?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:hoverDate"?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    color: string;
    multiple: boolean;
    modelValue: any[];
    displayDate: any;
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
} & {
    max?: string | number | Date | undefined;
    min?: string | number | Date | undefined;
    format?: string | undefined;
    side?: string | undefined;
    allowedDates?: Function | unknown[] | undefined;
    hoverDate?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:hoverDate"?: ((date: any) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:hoverDate': (date: any) => true;
    'update:modelValue': (date: readonly any[]) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:displayDate': (date: any) => boolean;
}, string, {
    color: string;
    multiple: boolean;
    modelValue: any[];
    displayDate: any;
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    format: StringConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    displayDate: {
        type: vue.PropType<any>;
        default: null;
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    color: {
        type: vue.PropType<string>;
        default: string;
    };
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
}, vue.ExtractPropTypes<{
    format: StringConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    displayDate: {
        type: vue.PropType<any>;
        default: null;
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    color: {
        type: vue.PropType<string>;
        default: string;
    };
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: BooleanConstructor;
    side: {
        type: StringConstructor;
    };
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
}>>;
type VDatePickerMonth = InstanceType<typeof VDatePickerMonth>;

declare const VDatePickerYears: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            max?: string | number | Date | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            color?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            min?: string | number | Date | undefined;
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
            displayDate?: any;
            "onClick:mode"?: (() => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
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
        $emit: ((event: "click:mode") => void) & ((event: "update:displayDate", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            max?: string | number | Date | undefined;
            height?: string | number | undefined;
            color?: string | undefined;
            min?: string | number | Date | undefined;
            displayDate?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onClick:mode"?: (() => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:displayDate': (date: any) => true;
            'click:mode': () => true;
        }, string, {}, {}, string, vue.SlotsType<Partial<{
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
    } & {} & {
        max?: string | number | Date | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        min?: string | number | Date | undefined;
        displayDate?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:mode"?: (() => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    max?: string | number | Date | undefined;
    height?: string | number | undefined;
    color?: string | undefined;
    min?: string | number | Date | undefined;
    displayDate?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onClick:mode"?: (() => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:displayDate': (date: any) => true;
    'click:mode': () => true;
}, string, {}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    displayDate: null;
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
}>>;
type VDatePickerYears = InstanceType<typeof VDatePickerYears>;

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

declare const VOtpInput: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            length?: string | number | undefined;
            type?: "number" | "text" | "password" | undefined;
            error?: boolean | undefined;
            label?: string | undefined;
            style?: vue.StyleValue | undefined;
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            rounded?: string | number | boolean | undefined;
            variant?: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled"> | undefined;
            modelValue?: string | number | undefined;
            focused?: boolean | undefined;
            focusAll?: boolean | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            placeholder?: string | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            divider?: string | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            bgColor?: string | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((val: boolean) => any)) | undefined;
            baseColor?: string | undefined;
            onFinish?: ((val: string) => any) | undefined;
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
            loader?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "finish", val: string) => void) & ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", val: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            length: string | number;
            type: "number" | "text" | "password";
            error: boolean;
            label: string;
            style: vue.StyleValue;
            autofocus: boolean;
            disabled: boolean;
            variant: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            focused: boolean;
            focusAll: boolean;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            class?: any;
            placeholder?: string | undefined;
            theme?: string | undefined;
            divider?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: string | number | undefined;
            bgColor?: string | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            baseColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onUpdate:focused"?: ((val: boolean) => any) | undefined;
            onFinish?: ((val: string) => any) | undefined;
        }, {
            blur: () => void;
            focus: () => void;
            reset: () => void;
            isFocused: vue.Ref<boolean> & {
                readonly externalValue: boolean;
            };
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            finish: (val: string) => true;
            'update:focused': (val: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            length: string | number;
            type: "number" | "text" | "password";
            error: boolean;
            label: string;
            style: vue.StyleValue;
            autofocus: boolean;
            disabled: boolean;
            rounded: string | number | boolean;
            variant: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
            modelValue: string | number;
            focused: boolean;
            focusAll: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        length: string | number;
        type: "number" | "text" | "password";
        error: boolean;
        label: string;
        style: vue.StyleValue;
        autofocus: boolean;
        disabled: boolean;
        variant: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        focused: boolean;
        focusAll: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        placeholder?: string | undefined;
        theme?: string | undefined;
        divider?: string | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: string | number | undefined;
        bgColor?: string | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        baseColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:focused"?: ((val: boolean) => any) | undefined;
        onFinish?: ((val: string) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        blur: () => void;
        focus: () => void;
        reset: () => void;
        isFocused: vue.Ref<boolean> & {
            readonly externalValue: boolean;
        };
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    length: string | number;
    type: "number" | "text" | "password";
    error: boolean;
    label: string;
    style: vue.StyleValue;
    autofocus: boolean;
    disabled: boolean;
    variant: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    focused: boolean;
    focusAll: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    placeholder?: string | undefined;
    theme?: string | undefined;
    divider?: string | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: string | number | undefined;
    bgColor?: string | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    baseColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        loader?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        loader?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:focused"?: ((val: boolean) => any) | undefined;
    onFinish?: ((val: string) => any) | undefined;
}, {
    blur: () => void;
    focus: () => void;
    reset: () => void;
    isFocused: vue.Ref<boolean> & {
        readonly externalValue: boolean;
    };
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    finish: (val: string) => true;
    'update:focused': (val: boolean) => true;
    'update:modelValue': (val: string) => true;
}, string, {
    length: string | number;
    type: "number" | "text" | "password";
    error: boolean;
    label: string;
    style: vue.StyleValue;
    autofocus: boolean;
    disabled: boolean;
    rounded: string | number | boolean;
    variant: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    modelValue: string | number;
    focused: boolean;
    focusAll: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    error: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    class: PropType<any>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">>;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    };
    bgColor: StringConstructor;
    baseColor: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"number" | "text" | "password">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    error: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    class: PropType<any>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">>;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    };
    bgColor: StringConstructor;
    baseColor: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"number" | "text" | "password">;
        default: string;
    };
}>>;
type VOtpInput = InstanceType<typeof VOtpInput>;

declare const VPickerTitle: {
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
type VPickerTitle = InstanceType<typeof VPickerTitle>;

declare const VSkeletonLoader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            type?: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[] | undefined;
            loading?: boolean | undefined;
            loadingText?: string | undefined;
            boilerplate?: boolean | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<vue.RendererNode, vue.RendererElement, {
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
            default?: (() => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
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
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
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
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        theme?: string | undefined;
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
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    theme?: string | undefined;
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
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[]>;
        default: string;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[]>;
        default: string;
    };
}>>;
type VSkeletonLoader = InstanceType<typeof VSkeletonLoader>;

type StepperItemSlot = {
    canEdit: boolean;
    hasError: boolean;
    hasCompleted: boolean;
    title?: string;
    subtitle?: string;
    step: any;
};
type ValidationRule = () => string | boolean;
declare const VStepperItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            error?: boolean | undefined;
            complete?: boolean | undefined;
            disabled?: boolean | undefined;
            ripple?: boolean | {
                class: string;
            } | undefined;
            rules?: readonly ValidationRule[] | undefined;
            completeIcon?: string | undefined;
            editable?: boolean | undefined;
            editIcon?: string | undefined;
            errorIcon?: string | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            value?: any;
            style?: unknown;
            title?: string | undefined;
            class?: unknown;
            icon?: string | undefined;
            $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
                default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            selectedClass?: string | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
            subtitle?: string | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            error: boolean;
            complete: boolean;
            disabled: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            rules: readonly ValidationRule[];
            completeIcon: string;
            editable: boolean;
            editIcon: string;
            errorIcon: string;
        } & {
            color?: string | undefined;
            value?: any;
            title?: string | undefined;
            icon?: string | undefined;
            selectedClass?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
                default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => boolean;
        }, string, {
            error: boolean;
            complete: boolean;
            disabled: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            rules: readonly ValidationRule[];
            completeIcon: string;
            editable: boolean;
            editIcon: string;
            errorIcon: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        error: boolean;
        complete: boolean;
        disabled: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        rules: readonly ValidationRule[];
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        icon?: string | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    complete: boolean;
    disabled: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    rules: readonly ValidationRule[];
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    icon?: string | undefined;
    selectedClass?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
        default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => boolean;
}, string, {
    error: boolean;
    complete: boolean;
    disabled: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    rules: readonly ValidationRule[];
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}, vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}>>;
type VStepperItem = InstanceType<typeof VStepperItem>;

type StepperItem = string | Record<string, any>;
type VStepperSlot = {
    prev: () => void;
    next: () => void;
};
declare const VStepper: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            flat?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            items?: readonly StepperItem[] | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            itemTitle?: string | undefined;
            itemValue?: string | undefined;
            mobile?: boolean | undefined;
            hideActions?: boolean | undefined;
            prevText?: string | undefined;
            nextText?: string | undefined;
            editable?: boolean | undefined;
            altLabels?: boolean | undefined;
            nonLinear?: boolean | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            class?: any;
            $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
                [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: (() => vue.VNodeChild) | undefined;
                next?: (() => vue.VNodeChild) | undefined;
            };
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: false | (() => vue.VNodeChild) | undefined;
                next?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
            bgColor?: string | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prev?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", v: unknown) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly StepperItem[];
            selectedClass: string;
            itemTitle: string;
            itemValue: string;
            mobile: boolean;
            hideActions: boolean;
            prevText: string;
            nextText: string;
            editable: boolean;
            altLabels: boolean;
            nonLinear: boolean;
        } & {
            max?: number | undefined;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            bgColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
                [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: (() => vue.VNodeChild) | undefined;
                next?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: false | (() => vue.VNodeChild) | undefined;
                next?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
        }, {
            prev: () => void;
            next: () => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: unknown) => boolean;
        }, string, {
            flat: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly StepperItem[];
            rounded: string | number | boolean;
            modelValue: any;
            selectedClass: string;
            itemTitle: string;
            itemValue: string;
            mobile: boolean;
            hideActions: boolean;
            prevText: string;
            nextText: string;
            editable: boolean;
            altLabels: boolean;
            nonLinear: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        items: readonly StepperItem[];
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        mobile: boolean;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: (() => vue.VNodeChild) | undefined;
            next?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | (() => vue.VNodeChild) | undefined;
            next?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        prev: () => void;
        next: () => void;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly StepperItem[];
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    mobile: boolean;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    max?: number | undefined;
    location?: Anchor | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
        [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: (() => vue.VNodeChild) | undefined;
        next?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: false | (() => vue.VNodeChild) | undefined;
        next?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly StepperItem[];
    rounded: string | number | boolean;
    modelValue: any;
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    mobile: boolean;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    editable: BooleanConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}, vue.ExtractPropTypes<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    editable: BooleanConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}>>;
type VStepper = InstanceType<typeof VStepper>;

declare const VStepperActions: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean | "next" | "prev" | undefined;
            prevText?: string | undefined;
            nextText?: string | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: {} | vue.VNodeChild | {
                prev?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                prev?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
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
            "v-slot:next"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click:prev") => void) & ((event: "click:next") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: boolean | "next" | "prev";
            prevText: string;
            nextText: string;
        } & {
            color?: string | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                prev?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prev?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prev"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:prev': () => true;
            'click:next': () => true;
        }, string, {
            disabled: boolean | "next" | "prev";
            prevText: string;
            nextText: string;
        }, {}, string, vue.SlotsType<Partial<{
            prev: (arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: {
                props: {
                    onClick: () => void;
                };
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
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
} & {
    color?: string | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        prev?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prev?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prev"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:prev': () => true;
    'click:next': () => true;
}, string, {
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
}, {}, string, vue.SlotsType<Partial<{
    prev: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperActions = InstanceType<typeof VStepperActions>;

declare const VStepperHeader: {
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
type VStepperHeader = InstanceType<typeof VStepperHeader>;

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

declare const VStepperWindow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            touch?: boolean | TouchHandlers | undefined;
            selectedClass?: string | undefined;
            continuous?: boolean | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
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
            modelValue?: any;
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
            showArrows?: string | boolean | undefined;
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
        $emit: (event: "update:modelValue", v: unknown) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
        } & {
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            modelValue?: any;
            showArrows?: string | boolean | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: unknown) => boolean;
        }, string, {
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
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
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        selectedClass: string;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        touch?: boolean | TouchHandlers | undefined;
        theme?: string | undefined;
        modelValue?: any;
        showArrows?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
} & {
    class?: any;
    touch?: boolean | TouchHandlers | undefined;
    theme?: string | undefined;
    modelValue?: any;
    showArrows?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: vue.PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: vue.PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: vue.PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: vue.PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
}>>;
type VStepperWindow = InstanceType<typeof VStepperWindow>;

declare const VStepperWindowItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: string | boolean | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            reverseTransition?: string | boolean | undefined;
            key?: string | number | symbol | undefined;
            value?: any;
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
            selectedClass?: string | undefined;
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
            eager: boolean;
            disabled: boolean;
        } & {
            transition?: string | boolean | undefined;
            value?: any;
            class?: any;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
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
            transition: string | boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            reverseTransition: string | boolean;
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
        eager: boolean;
        disabled: boolean;
    } & {
        transition?: string | boolean | undefined;
        value?: any;
        class?: any;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
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
    eager: boolean;
    disabled: boolean;
} & {
    transition?: string | boolean | undefined;
    value?: any;
    class?: any;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
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
    transition: string | boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>>;
type VStepperWindowItem = InstanceType<typeof VStepperWindowItem>;

export { VBottomSheet, VDataIterator, VDataTable, VDataTableFooter, VDataTableRow, VDataTableRows, VDataTableServer, VDataTableVirtual, VDateCard, VDatePicker, VDatePickerControls, VDatePickerHeader, VDatePickerMonth, VDatePickerYears, VInfiniteScroll, VOtpInput, VPicker, VPickerTitle, VSkeletonLoader, VStepper, VStepperActions, VStepperHeader, VStepperItem, VStepperWindow, VStepperWindowItem };
