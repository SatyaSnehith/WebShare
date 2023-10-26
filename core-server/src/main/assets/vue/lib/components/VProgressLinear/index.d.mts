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

declare const VProgressLinear: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            max?: string | number | undefined;
            absolute?: boolean | undefined;
            location?: NonNullable<Anchor> | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            indeterminate?: boolean | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: string | number | undefined;
            bufferValue?: string | number | undefined;
            clickable?: boolean | undefined;
            stream?: boolean | undefined;
            striped?: boolean | undefined;
            roundedBar?: boolean | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    value: number;
                    buffer: number;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    value: number;
                    buffer: number;
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
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
            bgColor?: string | undefined;
            bgOpacity?: string | number | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: number) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            max: string | number;
            absolute: boolean;
            location: NonNullable<Anchor>;
            height: string | number;
            active: boolean;
            style: vue.StyleValue;
            tag: string;
            indeterminate: boolean;
            modelValue: string | number;
            bufferValue: string | number;
            clickable: boolean;
            stream: boolean;
            striped: boolean;
            roundedBar: boolean;
        } & {
            color?: string | undefined;
            class?: any;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            bgOpacity?: string | number | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    value: number;
                    buffer: number;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    value: number;
                    buffer: number;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: number) => boolean;
        }, string, {
            reverse: boolean;
            max: string | number;
            absolute: boolean;
            location: NonNullable<Anchor>;
            height: string | number;
            active: boolean;
            style: vue.StyleValue;
            tag: string;
            indeterminate: boolean;
            rounded: string | number | boolean;
            modelValue: string | number;
            bufferValue: string | number;
            clickable: boolean;
            stream: boolean;
            striped: boolean;
            roundedBar: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                value: number;
                buffer: number;
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
        reverse: boolean;
        max: string | number;
        absolute: boolean;
        location: NonNullable<Anchor>;
        height: string | number;
        active: boolean;
        style: vue.StyleValue;
        tag: string;
        indeterminate: boolean;
        modelValue: string | number;
        bufferValue: string | number;
        clickable: boolean;
        stream: boolean;
        striped: boolean;
        roundedBar: boolean;
    } & {
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            value: number;
            buffer: number;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
                buffer: number;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
            buffer: number;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    max: string | number;
    absolute: boolean;
    location: NonNullable<Anchor>;
    height: string | number;
    active: boolean;
    style: vue.StyleValue;
    tag: string;
    indeterminate: boolean;
    modelValue: string | number;
    bufferValue: string | number;
    clickable: boolean;
    stream: boolean;
    striped: boolean;
    roundedBar: boolean;
} & {
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    bgOpacity?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            value: number;
            buffer: number;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        value: number;
        buffer: number;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            value: number;
            buffer: number;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
        buffer: number;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => boolean;
}, string, {
    reverse: boolean;
    max: string | number;
    absolute: boolean;
    location: NonNullable<Anchor>;
    height: string | number;
    active: boolean;
    style: vue.StyleValue;
    tag: string;
    indeterminate: boolean;
    rounded: string | number | boolean;
    modelValue: string | number;
    bufferValue: string | number;
    clickable: boolean;
    stream: boolean;
    striped: boolean;
    roundedBar: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        value: number;
        buffer: number;
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
    location: {
        type: vue.PropType<NonNullable<Anchor>>;
        default: NonNullable<Anchor>;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
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
    location: {
        type: vue.PropType<NonNullable<Anchor>>;
        default: NonNullable<Anchor>;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}>>;
type VProgressLinear = InstanceType<typeof VProgressLinear>;

export { VProgressLinear };
