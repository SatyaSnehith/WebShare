import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

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

export { VOtpInput };
