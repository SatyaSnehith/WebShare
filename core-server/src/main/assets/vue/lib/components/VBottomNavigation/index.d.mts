import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type Density = null | 'default' | 'comfortable' | 'compact';

declare const VBottomNavigation: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            absolute?: boolean | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            name?: string | undefined;
            order?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            grow?: boolean | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            mode?: string | undefined;
            mandatory?: boolean | "force" | undefined;
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
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
            bgColor?: string | undefined;
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
        $emit: (event: "update:modelValue", value: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            height: string | number;
            active: boolean;
            name: string;
            order: string | number;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            density: Density;
            selectedClass: string;
            grow: boolean;
        } & {
            max?: number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            mode?: string | undefined;
            mandatory?: boolean | "force" | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            bgColor?: string | undefined;
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
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
        }, string, {
            absolute: boolean;
            height: string | number;
            active: boolean;
            name: string;
            order: string | number;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            modelValue: any;
            selectedClass: string;
            grow: boolean;
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
        absolute: boolean;
        height: string | number;
        active: boolean;
        name: string;
        order: string | number;
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        density: Density;
        selectedClass: string;
        grow: boolean;
    } & {
        max?: number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        class?: any;
        mode?: string | undefined;
        mandatory?: boolean | "force" | undefined;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
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
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    absolute: boolean;
    height: string | number;
    active: boolean;
    name: string;
    order: string | number;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    density: Density;
    selectedClass: string;
    grow: boolean;
} & {
    max?: number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    class?: any;
    mode?: string | undefined;
    mandatory?: boolean | "force" | undefined;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
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
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
}, string, {
    absolute: boolean;
    height: string | number;
    active: boolean;
    name: string;
    order: string | number;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    modelValue: any;
    selectedClass: string;
    grow: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    modelValue: Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: vue.PropType<any>;
        default: any;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    name: Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    modelValue: Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: vue.PropType<any>;
        default: any;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    name: Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    bgColor: StringConstructor;
    color: StringConstructor;
    grow: BooleanConstructor;
    mode: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>;
type VBottomNavigation = InstanceType<typeof VBottomNavigation>;

export { VBottomNavigation };
