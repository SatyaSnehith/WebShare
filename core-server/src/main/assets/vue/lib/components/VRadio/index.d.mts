import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, WritableComputedRef, Ref, CSSProperties, VNode } from "/js/vue.js";

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

declare const VRadio: {
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
            falseIcon?: NonNullable<IconValue> | undefined;
            trueIcon?: NonNullable<IconValue> | undefined;
            valueComparator?: typeof deepEqual | undefined;
            type?: string | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            } | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: false | ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
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
            defaultsTarget?: string | undefined;
            trueValue?: any;
            falseValue?: any;
            "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            input?: ((arg: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
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
            modelValue?: any;
            defaultsTarget?: string | undefined;
            trueValue?: any;
            falseValue?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            } | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: false | ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            inline: boolean;
            error: boolean;
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            density: Density;
            ripple: boolean;
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
            valueComparator: typeof deepEqual;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            input: (arg: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        inline: boolean;
        error: boolean;
        style: vue.StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean;
        density: Density;
        ripple: boolean;
        falseIcon: NonNullable<IconValue>;
        trueIcon: NonNullable<IconValue>;
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
        modelValue?: any;
        defaultsTarget?: string | undefined;
        trueValue?: any;
        falseValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
        } | ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            label?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
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
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
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
    modelValue?: any;
    defaultsTarget?: string | undefined;
    trueValue?: any;
    falseValue?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | undefined;
        label?: ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
    } | ((arg: {
        backgroundColorClasses: vue.Ref<string[]>;
        backgroundColorStyles: vue.Ref<vue.CSSProperties>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | undefined;
        label?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        backgroundColorClasses: vue.Ref<string[]>;
        backgroundColorStyles: vue.Ref<vue.CSSProperties>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    error: boolean;
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
    valueComparator: typeof deepEqual;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        backgroundColorClasses: vue.Ref<string[]>;
        backgroundColorStyles: vue.Ref<vue.CSSProperties>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    input: (arg: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
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
    falseIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
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
}, vue.ExtractPropTypes<{
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
    falseIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
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
type VRadio = InstanceType<typeof VRadio>;

export { VRadio };
