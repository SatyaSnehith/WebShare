import * as vue from "/js/vue.js";
import { Ref, EffectScope, ComponentPropsOptions, ExtractPropTypes, Component, nextTick } from "/js/vue.js";

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps$1 {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope): void;

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

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps {
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
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

declare const VMenu: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            location?: Anchor | undefined;
            origin?: "auto" | Anchor | "overlap" | undefined;
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            } | undefined;
            zIndex?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)> | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            closeDelay?: NonNullable<string | number> | undefined;
            openDelay?: NonNullable<string | number> | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: NonNullable<string | boolean> | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
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
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
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
        }, {
            id: vue.ComputedRef<string>;
            ΨopenChildren: vue.ShallowRef<number>;
        } & Omit<Omit<{
            $: vue.ComponentInternalInstance;
            $data: {};
            $props: {
                absolute?: boolean | undefined;
                location?: Anchor | undefined;
                origin?: "auto" | Anchor | "overlap" | undefined;
                transition?: string | boolean | (vue.TransitionProps & {
                    component?: Component | undefined;
                }) | undefined;
                zIndex?: string | number | undefined;
                style?: vue.StyleValue | undefined;
                eager?: boolean | undefined;
                disabled?: boolean | undefined;
                modelValue?: boolean | undefined;
                locationStrategy?: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined) | undefined;
                scrollStrategy?: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition" | undefined;
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
                _disableGlobalStack?: boolean | undefined;
                offset?: string | number | number[] | undefined;
                key?: string | number | symbol | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                class?: any;
                onAfterLeave?: (() => any) | undefined;
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
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
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
            $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
            $el: any;
            $options: vue.ComponentOptionsBase<{
                absolute: boolean;
                location: Anchor;
                origin: "auto" | Anchor | "overlap";
                transition: string | boolean | (vue.TransitionProps & {
                    component?: Component | undefined;
                });
                zIndex: string | number;
                style: vue.StyleValue;
                eager: boolean;
                disabled: boolean;
                modelValue: boolean;
                locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined);
                scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                closeOnBack: boolean;
                contained: boolean;
                noClickAnimation: boolean;
                persistent: boolean;
                scrim: string | boolean;
                _disableGlobalStack: boolean;
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
                onAfterLeave?: (() => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            }, {
                activatorEl: vue.Ref<HTMLElement | undefined>;
                animateClick: () => void;
                contentEl: vue.Ref<HTMLElement | undefined>;
                globalTop: Readonly<vue.Ref<boolean>>;
                localTop: vue.ComputedRef<boolean>;
                updateLocation: vue.Ref<((e: Event) => void) | undefined>;
            }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
                'click:outside': (e: MouseEvent) => true;
                'update:modelValue': (value: boolean) => true;
                afterLeave: () => true;
            }, string, {
                absolute: boolean;
                location: Anchor;
                origin: "auto" | Anchor | "overlap";
                transition: string | boolean | (vue.TransitionProps & {
                    component?: Component | undefined;
                });
                zIndex: string | number;
                style: vue.StyleValue;
                eager: boolean;
                disabled: boolean;
                modelValue: boolean;
                locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined);
                scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
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
                _disableGlobalStack: boolean;
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
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
        } & {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
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
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.ShallowUnwrapRef<{
            activatorEl: vue.Ref<HTMLElement | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "class" | "onAfterLeave" | "$children" | "ref" | "ref_for" | "ref_key" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        closeDelay: NonNullable<string | number>;
        openDelay: NonNullable<string | number>;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: NonNullable<string | boolean>;
    } & {
        offset?: string | number | number[] | undefined;
        id?: string | undefined;
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
    } & vue.ShallowUnwrapRef<{
        id: vue.ComputedRef<string>;
        ΨopenChildren: vue.ShallowRef<number>;
    } & Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            absolute?: boolean | undefined;
            location?: Anchor | undefined;
            origin?: "auto" | Anchor | "overlap" | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            }) | undefined;
            zIndex?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | undefined;
            scrollStrategy?: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition" | undefined;
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
            _disableGlobalStack?: boolean | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            onAfterLeave?: (() => any) | undefined;
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
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
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
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
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
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: vue.Ref<HTMLElement | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            afterLeave: () => true;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
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
            _disableGlobalStack: boolean;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
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
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        activatorEl: vue.Ref<HTMLElement | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "class" | "onAfterLeave" | "$children" | "ref" | "ref_for" | "ref_key" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })> | {
        component: Component;
    };
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined)>;
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
    closeDelay: NonNullable<string | number>;
    openDelay: NonNullable<string | number>;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: NonNullable<string | boolean>;
} & {
    offset?: string | number | number[] | undefined;
    id?: string | undefined;
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
}, {
    id: vue.ComputedRef<string>;
    ΨopenChildren: vue.ShallowRef<number>;
} & Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: {
        absolute?: boolean | undefined;
        location?: Anchor | undefined;
        origin?: "auto" | Anchor | "overlap" | undefined;
        transition?: string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        }) | undefined;
        zIndex?: string | number | undefined;
        style?: vue.StyleValue | undefined;
        eager?: boolean | undefined;
        disabled?: boolean | undefined;
        modelValue?: boolean | undefined;
        locationStrategy?: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | undefined;
        scrollStrategy?: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition" | undefined;
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
        _disableGlobalStack?: boolean | undefined;
        offset?: string | number | number[] | undefined;
        key?: string | number | symbol | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        onAfterLeave?: (() => any) | undefined;
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
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
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
    $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
    $el: any;
    $options: vue.ComponentOptionsBase<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
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
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, {
        activatorEl: vue.Ref<HTMLElement | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:outside': (e: MouseEvent) => true;
        'update:modelValue': (value: boolean) => true;
        afterLeave: () => true;
    }, string, {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
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
        _disableGlobalStack: boolean;
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
    $nextTick: typeof nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & {
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    });
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    _disableGlobalStack: boolean;
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
    onAfterLeave?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    activatorEl: vue.Ref<HTMLElement | undefined>;
    animateClick: () => void;
    contentEl: vue.Ref<HTMLElement | undefined>;
    globalTop: Readonly<vue.Ref<boolean>>;
    localTop: vue.ComputedRef<boolean>;
    updateLocation: vue.Ref<((e: Event) => void) | undefined>;
}> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "class" | "onAfterLeave" | "$children" | "ref" | "ref_for" | "ref_key" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })> | {
        component: Component;
    };
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined)>;
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
    closeDelay: NonNullable<string | number>;
    openDelay: NonNullable<string | number>;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: NonNullable<string | boolean>;
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
    offset: vue.PropType<string | number | number[] | undefined>;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    theme: StringConstructor;
    contentClass: null;
    modelValue: BooleanConstructor;
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    locationStrategy: Omit<{
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>>;
        default: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
    };
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
    };
    closeDelay: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    openDelay: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
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
    closeOnContentClick: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    noClickAnimation: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
    };
    attach: vue.PropType<string | boolean | Element>;
    id: StringConstructor;
}, vue.ExtractPropTypes<{
    offset: vue.PropType<string | number | number[] | undefined>;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    theme: StringConstructor;
    contentClass: null;
    modelValue: BooleanConstructor;
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    locationStrategy: Omit<{
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>>;
        default: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
    };
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
    };
    closeDelay: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    openDelay: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
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
    closeOnContentClick: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    noClickAnimation: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
    };
    attach: vue.PropType<string | boolean | Element>;
    id: StringConstructor;
}>>;
type VMenu = InstanceType<typeof VMenu>;

export { VMenu };
