import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare const VDateRangeCard: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | undefined;
            inputMode?: "calendar" | "keyboard" | undefined;
            disabled?: string | boolean | string[] | undefined;
            multiple?: boolean | undefined;
            variant?: string | undefined;
            modelValue?: any[] | undefined;
            nextIcon?: string | undefined;
            prevIcon?: string | undefined;
            modeIcon?: string | undefined;
            viewMode?: "month" | "year" | undefined;
            showAdjacentMonths?: boolean | undefined;
            hideWeekdays?: boolean | undefined;
            showWeek?: boolean | undefined;
            readonly max?: string | number | Date | undefined;
            key?: string | number | symbol | undefined;
            readonly height?: string | number | undefined;
            readonly color?: string | undefined;
            style?: unknown;
            class?: unknown;
            readonly min?: string | number | Date | undefined;
            readonly format?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            readonly side?: string | undefined;
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
            readonly displayDate?: any;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
            readonly allowedDates?: Function | unknown[] | undefined;
            readonly hoverDate?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot<any> | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", date: readonly any[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:inputMode", inputMode: "calendar" | "keyboard") => void) & ((event: "update:viewMode", viewMode: "month" | "year") => void) & ((event: "update:displayDate", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component | undefined;
                })>>;
                default: NonNullable<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component | undefined;
                })>;
            };
            color: StringConstructor;
            height: (StringConstructor | NumberConstructor)[];
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
        }>> & {
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: readonly any[]) => boolean;
            'update:displayDate': (date: any) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
            'update:viewMode': (viewMode: "month" | "year") => boolean;
        }, string, {
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            inputMode: "calendar" | "keyboard";
            disabled: string | boolean | string[];
            multiple: boolean;
            variant: string;
            modelValue: any[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
        }, {}, string, {}> & {
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
    } & Readonly<vue.ExtractPropTypes<{
        transition: Omit<{
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>>;
            default: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
        };
        color: StringConstructor;
        height: (StringConstructor | NumberConstructor)[];
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
    }>> & {
        "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
        "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
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
}>> & {
    "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
    "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: readonly any[]) => boolean;
    'update:displayDate': (date: any) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
    'update:viewMode': (viewMode: "month" | "year") => boolean;
}, string, {
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    inputMode: "calendar" | "keyboard";
    disabled: string | boolean | string[];
    multiple: boolean;
    variant: string;
    modelValue: any[];
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
}, {}, string, {}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
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
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
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
}>>;
type VDateRangeCard = InstanceType<typeof VDateRangeCard>;

declare const VDateRangePicker: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | undefined;
            style?: vue.StyleValue | undefined;
            inputMode?: "calendar" | "keyboard" | undefined;
            multiple?: boolean | undefined;
            landscape?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any[] | undefined;
            closeIcon?: string | undefined;
            displayDate?: any;
            viewMode?: "month" | "year" | undefined;
            showAdjacentMonths?: boolean | undefined;
            hideWeekdays?: boolean | undefined;
            showWeek?: boolean | undefined;
            calendarIcon?: string | undefined;
            keyboardIcon?: string | undefined;
            showInputSwitch?: boolean | undefined;
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
            header?: string | undefined;
            title?: string | undefined;
            class?: any;
            range?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
            bgColor?: string | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((input: string) => any) | undefined;
            "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
            allowedDates?: Function | unknown[] | undefined;
            hoverDate?: any;
            onCancel?: (() => any) | undefined;
            onSave?: ((date: any) => any) | undefined;
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
        $emit: ((event: "cancel") => void) & ((event: "update:modelValue", date: any) => void) & ((event: "update:inputMode", input: string) => void) & ((event: "update:viewMode", mode: "month" | "year") => void) & ((event: "update:displayDate", date: any) => void) & ((event: "save", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            style: vue.StyleValue;
            inputMode: "calendar" | "keyboard";
            multiple: boolean;
            landscape: boolean;
            tag: string;
            modelValue: any[];
            closeIcon: string;
            displayDate: any;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            calendarIcon: string;
            keyboardIcon: string;
            showInputSwitch: boolean;
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
            header?: string | undefined;
            title?: string | undefined;
            class?: any;
            range?: any;
            min?: string | number | Date | undefined;
            elevation?: string | number | undefined;
            format?: string | undefined;
            side?: string | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
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
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((input: string) => any) | undefined;
            "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
            onCancel?: (() => any) | undefined;
            onSave?: ((date: any) => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: any) => true;
            'update:viewMode': (mode: 'month' | 'year') => true;
            'update:inputMode': (input: string) => true;
            'update:displayDate': (date: any) => true;
            save: (date: any) => true;
            cancel: () => true;
        }, string, {
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            style: vue.StyleValue;
            inputMode: "calendar" | "keyboard";
            multiple: boolean;
            landscape: boolean;
            tag: string;
            rounded: string | number | boolean;
            modelValue: any[];
            closeIcon: string;
            displayDate: any;
            viewMode: "month" | "year";
            showAdjacentMonths: boolean;
            hideWeekdays: boolean;
            showWeek: boolean;
            calendarIcon: string;
            keyboardIcon: string;
            showInputSwitch: boolean;
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
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        style: vue.StyleValue;
        inputMode: "calendar" | "keyboard";
        multiple: boolean;
        landscape: boolean;
        tag: string;
        modelValue: any[];
        closeIcon: string;
        displayDate: any;
        viewMode: "month" | "year";
        showAdjacentMonths: boolean;
        hideWeekdays: boolean;
        showWeek: boolean;
        calendarIcon: string;
        keyboardIcon: string;
        showInputSwitch: boolean;
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
        header?: string | undefined;
        title?: string | undefined;
        class?: any;
        range?: any;
        min?: string | number | Date | undefined;
        elevation?: string | number | undefined;
        format?: string | undefined;
        side?: string | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
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
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((input: string) => any) | undefined;
        "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
        onCancel?: (() => any) | undefined;
        onSave?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    style: vue.StyleValue;
    inputMode: "calendar" | "keyboard";
    multiple: boolean;
    landscape: boolean;
    tag: string;
    modelValue: any[];
    closeIcon: string;
    displayDate: any;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    calendarIcon: string;
    keyboardIcon: string;
    showInputSwitch: boolean;
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
    header?: string | undefined;
    title?: string | undefined;
    class?: any;
    range?: any;
    min?: string | number | Date | undefined;
    elevation?: string | number | undefined;
    format?: string | undefined;
    side?: string | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
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
    "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:inputMode"?: ((input: string) => any) | undefined;
    "onUpdate:viewMode"?: ((mode: "month" | "year") => any) | undefined;
    onCancel?: (() => any) | undefined;
    onSave?: ((date: any) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: any) => true;
    'update:viewMode': (mode: 'month' | 'year') => true;
    'update:inputMode': (input: string) => true;
    'update:displayDate': (date: any) => true;
    save: (date: any) => true;
    cancel: () => true;
}, string, {
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    style: vue.StyleValue;
    inputMode: "calendar" | "keyboard";
    multiple: boolean;
    landscape: boolean;
    tag: string;
    rounded: string | number | boolean;
    modelValue: any[];
    closeIcon: string;
    displayDate: any;
    viewMode: "month" | "year";
    showAdjacentMonths: boolean;
    hideWeekdays: boolean;
    showWeek: boolean;
    calendarIcon: string;
    keyboardIcon: string;
    showInputSwitch: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
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
    color: StringConstructor;
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    side: {
        type: StringConstructor;
    };
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    title: StringConstructor;
    header: StringConstructor;
    keyboardIcon: {
        type: StringConstructor;
        default: string;
    };
    calendarIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    showInputSwitch: BooleanConstructor;
    range: null;
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
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
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
    color: StringConstructor;
    showAdjacentMonths: BooleanConstructor;
    hideWeekdays: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    showWeek: BooleanConstructor;
    hoverDate: null;
    multiple: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    side: {
        type: StringConstructor;
    };
    min: (StringConstructor | NumberConstructor | DateConstructor)[];
    max: (StringConstructor | NumberConstructor | DateConstructor)[];
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    title: StringConstructor;
    header: StringConstructor;
    keyboardIcon: {
        type: StringConstructor;
        default: string;
    };
    calendarIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    showInputSwitch: BooleanConstructor;
    range: null;
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
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
}>>;
type VDateRangePicker = InstanceType<typeof VDateRangePicker>;

export { VDateRangeCard, VDateRangePicker };
