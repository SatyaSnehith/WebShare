import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

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

export { VDateCard, VDatePicker, VDatePickerControls, VDatePickerHeader, VDatePickerMonth, VDatePickerYears };
