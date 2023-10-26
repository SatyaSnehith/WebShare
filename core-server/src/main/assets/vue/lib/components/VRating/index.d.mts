import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, Prop } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type VRatingItemSlot = {
    value: number;
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    icon: IconValue;
    color?: string;
    props: Record<string, unknown>;
    rating: number;
};
type VRatingItemLabelSlot = {
    value: number;
    index: number;
    label?: string;
};
declare const VRating: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            length?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            size?: string | number | undefined;
            readonly?: boolean | undefined;
            tag?: string | undefined;
            density?: Density | undefined;
            modelValue?: string | number | undefined;
            ripple?: boolean | undefined;
            clearable?: boolean | undefined;
            hover?: boolean | undefined;
            itemAriaLabel?: string | undefined;
            emptyIcon?: IconValue | undefined;
            fullIcon?: IconValue | undefined;
            halfIncrements?: boolean | undefined;
            itemLabelPosition?: string | undefined;
            key?: string | number | symbol | undefined;
            name?: string | undefined;
            color?: string | undefined;
            class?: any;
            $children?: {} | vue.VNodeChild | {
                item?: ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
                'item-label'?: ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            'v-slots'?: {
                item?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
                'item-label'?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
            activeColor?: string | undefined;
            "v-slot:item"?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
            itemLabels?: string[] | undefined;
            "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            item?: ((arg: VRatingItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'item-label'?: ((arg: VRatingItemLabelSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: string | number) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            length: string | number;
            style: vue.StyleValue;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: Density;
            modelValue: string | number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            itemAriaLabel: string;
            emptyIcon: IconValue;
            fullIcon: IconValue;
            halfIncrements: boolean;
            itemLabelPosition: string;
        } & {
            name?: string | undefined;
            color?: string | undefined;
            class?: any;
            theme?: string | undefined;
            activeColor?: string | undefined;
            itemLabels?: string[] | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                item?: ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
                'item-label'?: ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                item?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
                'item-label'?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:item"?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: number | string) => boolean;
        }, string, {
            length: string | number;
            style: vue.StyleValue;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: Density;
            modelValue: string | number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            itemAriaLabel: string;
            emptyIcon: IconValue;
            fullIcon: IconValue;
            halfIncrements: boolean;
            itemLabelPosition: string;
        }, {}, string, vue.SlotsType<Partial<{
            item: (arg: VRatingItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'item-label': (arg: VRatingItemLabelSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        style: vue.StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string;
        density: Density;
        modelValue: string | number;
        ripple: boolean;
        clearable: boolean;
        hover: boolean;
        itemAriaLabel: string;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        itemLabelPosition: string;
    } & {
        name?: string | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        activeColor?: string | undefined;
        itemLabels?: string[] | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            item?: ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
            'item-label'?: ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
            'item-label'?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    length: string | number;
    style: vue.StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string;
    density: Density;
    modelValue: string | number;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    itemAriaLabel: string;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    itemLabelPosition: string;
} & {
    name?: string | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    activeColor?: string | undefined;
    itemLabels?: string[] | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        item?: ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
        'item-label'?: ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        item?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
        'item-label'?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: VRatingItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number | string) => boolean;
}, string, {
    length: string | number;
    style: vue.StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string;
    density: Density;
    modelValue: string | number;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    itemAriaLabel: string;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    itemLabelPosition: string;
}, {}, string, vue.SlotsType<Partial<{
    item: (arg: VRatingItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item-label': (arg: VRatingItemLabelSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}>>;
type VRating = InstanceType<typeof VRating>;

export { VRating };
