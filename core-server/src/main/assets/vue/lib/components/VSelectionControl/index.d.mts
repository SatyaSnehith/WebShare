import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType, Ref, CSSProperties, nextTick, WritableComputedRef } from "/js/vue.js";

type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type SelectionControlSlot = {
    model: WritableComputedRef<any>;
    textColorClasses: Ref<string[]>;
    textColorStyles: Ref<CSSProperties>;
    backgroundColorClasses: Ref<string[]>;
    backgroundColorStyles: Ref<CSSProperties>;
    inputNode: VNode;
    icon: IconValue | undefined;
    props: {
        onBlur: (e: Event) => void;
        onFocus: (e: FocusEvent) => void;
        id: string;
    };
};
type VSelectionControlSlots = {
    default: {
        backgroundColorClasses: Ref<string[]>;
        backgroundColorStyles: Ref<CSSProperties>;
    };
    label: {
        label: string | undefined;
        props: Record<string, unknown>;
    };
    input: SelectionControlSlot;
};
declare const VSelectionControl: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            inline?: boolean | undefined;
            error?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | null | undefined;
            multiple?: boolean | null | undefined;
            readonly?: boolean | undefined;
            density?: Density | undefined;
            ripple?: boolean | undefined;
            valueComparator?: typeof deepEqual | undefined;
            type?: string | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
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
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            defaultsTarget?: string | undefined;
            falseIcon?: IconValue | undefined;
            trueIcon?: IconValue | undefined;
            trueValue?: any;
            falseValue?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                backgroundColorClasses: Ref<string[]>;
                backgroundColorStyles: Ref<CSSProperties>;
            }) => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            input?: ((arg: SelectionControlSlot) => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inline: boolean;
            error: boolean;
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            density: Density;
            ripple: boolean;
            valueComparator: typeof deepEqual;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            defaultsTarget?: string | undefined;
            falseIcon?: IconValue | undefined;
            trueIcon?: IconValue | undefined;
            trueValue?: any;
            falseValue?: any;
        } & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, {
            isFocused: vue.ShallowRef<boolean>;
            input: Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (val: any) => boolean;
        }, "$children" | "v-slot:default" | "v-slots" | "modelValue" | "update:modelValue" | "v-slot:input" | "v-slot:label">, string, {
            inline: boolean;
            error: boolean;
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            density: Density;
            ripple: boolean;
            valueComparator: typeof deepEqual;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                backgroundColorClasses: Ref<string[]>;
                backgroundColorStyles: Ref<CSSProperties>;
            }) => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            input: (arg: SelectionControlSlot) => VNode<vue.RendererNode, vue.RendererElement, {
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
        error: boolean;
        style: vue.StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean;
        density: Density;
        ripple: boolean;
        valueComparator: typeof deepEqual;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        value?: any;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        defaultsTarget?: string | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        trueValue?: any;
        falseValue?: any;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        isFocused: vue.ShallowRef<boolean>;
        input: Ref<HTMLInputElement | undefined>;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inline: boolean;
    error: boolean;
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    valueComparator: typeof deepEqual;
} & {
    type?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    value?: any;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    defaultsTarget?: string | undefined;
    falseIcon?: IconValue | undefined;
    trueIcon?: IconValue | undefined;
    trueValue?: any;
    falseValue?: any;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    isFocused: vue.ShallowRef<boolean>;
    input: Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: any) => boolean;
}, "$children" | "v-slot:default" | "v-slots" | "modelValue" | "update:modelValue" | "v-slot:input" | "v-slot:label">, string, {
    inline: boolean;
    error: boolean;
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    valueComparator: typeof deepEqual;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        backgroundColorClasses: Ref<string[]>;
        backgroundColorStyles: Ref<CSSProperties>;
    }) => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    input: (arg: SelectionControlSlot) => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1>(props: {
    modelValue?: T_1 | undefined;
    'onUpdate:modelValue'?: ((val: T_1) => any) | undefined;
}, slots: VSelectionControlSlots) => GenericProps<{
    modelValue?: T_1 | undefined;
    'onUpdate:modelValue'?: ((val: T_1) => any) | undefined;
}, VSelectionControlSlots>) & FilterPropsOptions<{
    theme: StringConstructor;
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
    color: StringConstructor;
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: vue.PropType<IconValue>;
    trueIcon: vue.PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    label: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
}, ExtractPropTypes<{
    theme: StringConstructor;
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
    color: StringConstructor;
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: vue.PropType<IconValue>;
    trueIcon: vue.PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    label: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
}>>;
type VSelectionControl = InstanceType<typeof VSelectionControl>;

export { VSelectionControl };
