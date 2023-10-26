import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, ComponentInternalInstance, Ref, ComputedRef } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type Density = null | 'default' | 'comfortable' | 'compact';

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<Readonly<number[]>>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}

type BtnToggleSlotProps = 'isSelected' | 'select' | 'selected' | 'next' | 'prev';
interface DefaultBtnToggleSlot extends Pick<GroupProvide, BtnToggleSlotProps> {
}
declare const VBtnToggle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | undefined;
            modelValue?: any;
            divided?: boolean | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            mandatory?: boolean | "force" | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
            } | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild);
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
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
            selectedClass?: string | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: DefaultBtnToggleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            divided: boolean;
        } & {
            max?: number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            mandatory?: boolean | "force" | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
            } | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            next: () => void;
            prev: () => void;
            select: (id: number, value: boolean) => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
        }, string, {
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            modelValue: any;
            divided: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: DefaultBtnToggleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        disabled: boolean;
        multiple: boolean;
        tag: string;
        density: Density;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        divided: boolean;
    } & {
        max?: number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        class?: any;
        mandatory?: boolean | "force" | undefined;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
        } | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        next: () => void;
        prev: () => void;
        select: (id: number, value: boolean) => void;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    density: Density;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    divided: boolean;
} & {
    max?: number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    class?: any;
    mandatory?: boolean | "force" | undefined;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    selectedClass?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
    } | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: DefaultBtnToggleSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    next: () => void;
    prev: () => void;
    select: (id: number, value: boolean) => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
}, string, {
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    modelValue: any;
    divided: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: DefaultBtnToggleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
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
    divided: BooleanConstructor;
}, vue.ExtractPropTypes<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
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
    divided: BooleanConstructor;
}>>;
type VBtnToggle = InstanceType<typeof VBtnToggle>;

export { VBtnToggle };
