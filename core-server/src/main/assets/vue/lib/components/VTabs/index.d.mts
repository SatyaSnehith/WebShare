import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, ComponentInternalInstance, Ref, ComputedRef } from "/js/vue.js";
// @ts-ignore
import * as vue_router from 'vue-router';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

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

type Density = null | 'default' | 'comfortable' | 'compact';

type TabItem = string | number | Record<string, any>;
declare const VTabs: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            symbol?: any;
            height?: string | number | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            items?: readonly TabItem[] | undefined;
            density?: Density | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            stacked?: boolean | undefined;
            grow?: boolean | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            centerActive?: boolean | undefined;
            hideSlider?: boolean | undefined;
            alignTabs?: "center" | "end" | "start" | "title" | undefined;
            fixedTabs?: boolean | undefined;
            max?: number | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
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
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
            bgColor?: string | undefined;
            showArrows?: string | boolean | undefined;
            sliderColor?: string | undefined;
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
        $emit: (event: "update:modelValue", v: unknown) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            symbol: any;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly TabItem[];
            density: Density;
            selectedClass: string;
            stacked: boolean;
            grow: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            centerActive: boolean;
            hideSlider: boolean;
            alignTabs: "center" | "end" | "start" | "title";
            fixedTabs: boolean;
        } & {
            max?: number | undefined;
            height?: string | number | undefined;
            color?: string | undefined;
            class?: any;
            modelValue?: any;
            bgColor?: string | undefined;
            showArrows?: string | boolean | undefined;
            sliderColor?: string | undefined;
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
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: unknown) => boolean;
        }, string, {
            symbol: any;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly TabItem[];
            density: Density;
            modelValue: any;
            selectedClass: string;
            stacked: boolean;
            grow: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            centerActive: boolean;
            hideSlider: boolean;
            alignTabs: "center" | "end" | "start" | "title";
            fixedTabs: boolean;
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
        symbol: any;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        items: readonly TabItem[];
        density: Density;
        selectedClass: string;
        stacked: boolean;
        grow: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        centerActive: boolean;
        hideSlider: boolean;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
    } & {
        max?: number | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        class?: any;
        modelValue?: any;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
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
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    symbol: any;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly TabItem[];
    density: Density;
    selectedClass: string;
    stacked: boolean;
    grow: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    centerActive: boolean;
    hideSlider: boolean;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
} & {
    max?: number | undefined;
    height?: string | number | undefined;
    color?: string | undefined;
    class?: any;
    modelValue?: any;
    bgColor?: string | undefined;
    showArrows?: string | boolean | undefined;
    sliderColor?: string | undefined;
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
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    symbol: any;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly TabItem[];
    density: Density;
    modelValue: any;
    selectedClass: string;
    stacked: boolean;
    grow: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    centerActive: boolean;
    hideSlider: boolean;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: vue.InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: vue.InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}>>;
type VTabs = InstanceType<typeof VTabs>;

declare const VTab: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            replace?: boolean | undefined;
            fixed?: boolean | undefined;
            exact?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            size?: string | number | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">> | undefined;
            selectedClass?: string | undefined;
            stacked?: boolean | undefined;
            ripple?: boolean | {
                class: string;
            } | undefined;
            hideSlider?: boolean | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            loading?: string | boolean | undefined;
            text?: string | undefined;
            class?: any;
            icon?: boolean | IconValue | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
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
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            sliderColor?: string | undefined;
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
            replace: boolean;
            fixed: boolean;
            exact: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            size: string | number;
            tag: string;
            density: Density;
            variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
            selectedClass: string;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            hideSlider: boolean;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            loading?: string | boolean | undefined;
            text?: string | undefined;
            class?: any;
            icon?: boolean | IconValue | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            sliderColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            replace: boolean;
            fixed: boolean;
            exact: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            size: string | number;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
            selectedClass: string;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            hideSlider: boolean;
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
        replace: boolean;
        fixed: boolean;
        exact: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        size: string | number;
        tag: string;
        density: Density;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        selectedClass: string;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        loading?: string | boolean | undefined;
        text?: string | undefined;
        class?: any;
        icon?: boolean | IconValue | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    fixed: boolean;
    exact: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    size: string | number;
    tag: string;
    density: Density;
    variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    selectedClass: string;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    hideSlider: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    loading?: string | boolean | undefined;
    text?: string | undefined;
    class?: any;
    icon?: boolean | IconValue | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    sliderColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    fixed: boolean;
    exact: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    selectedClass: string;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    hideSlider: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    replace: BooleanConstructor;
    exact: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    value: null;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    text: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<any>;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    icon: PropType<boolean | IconValue>;
    href: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    to: PropType<vue_router.RouteLocationRaw>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    variant: Omit<Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>>;
        default: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    };
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    fixed: BooleanConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    replace: BooleanConstructor;
    exact: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    value: null;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    text: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<any>;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    icon: PropType<boolean | IconValue>;
    href: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    to: PropType<vue_router.RouteLocationRaw>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    variant: Omit<Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>>;
        default: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    };
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    fixed: BooleanConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}>>;
type VTab = InstanceType<typeof VTab>;

export { VTab, VTabs };
