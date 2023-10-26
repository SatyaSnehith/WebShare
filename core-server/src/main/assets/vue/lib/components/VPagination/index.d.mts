import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, ComponentPublicInstance, nextTick } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type ItemSlot = {
    isActive: boolean;
    key: string | number;
    page: string;
    props: Record<string, any>;
};
type ControlSlot = {
    icon: IconValue;
    onClick: (e: Event) => void;
    disabled: boolean;
    ariaLabel: string;
    ariaDisabled: boolean;
};
declare const VPagination: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            length?: string | number | undefined;
            start?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            ariaLabel?: string | undefined;
            disabled?: boolean | undefined;
            size?: string | number | undefined;
            tag?: string | undefined;
            ellipsis?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined;
            modelValue?: number | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            firstIcon?: IconValue | undefined;
            lastIcon?: IconValue | undefined;
            pageAriaLabel?: string | undefined;
            currentPageAriaLabel?: string | undefined;
            firstAriaLabel?: string | undefined;
            previousAriaLabel?: string | undefined;
            nextAriaLabel?: string | undefined;
            lastAriaLabel?: string | undefined;
            showFirstLastPage?: boolean | undefined;
            key?: string | number | symbol | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            $children?: {} | vue.VNodeChild | {
                item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            };
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            'v-slots'?: {
                item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
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
            activeColor?: string | undefined;
            "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            totalVisible?: string | number | undefined;
            onNext?: ((value: number) => any) | undefined;
            onPrev?: ((value: number) => any) | undefined;
            onFirst?: ((value: number) => any) | undefined;
            onLast?: ((value: number) => any) | undefined;
            "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            item?: ((arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            first?: ((arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prev?: ((arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            last?: ((arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "next", value: number) => void) & ((event: "prev", value: number) => void) & ((event: "first", value: number) => void) & ((event: "last", value: number) => void) & ((event: "update:modelValue", value: number) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            length: string | number;
            start: string | number;
            style: vue.StyleValue;
            ariaLabel: string;
            disabled: boolean;
            size: string | number;
            tag: string;
            ellipsis: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            modelValue: number;
            nextIcon: IconValue;
            prevIcon: IconValue;
            firstIcon: IconValue;
            lastIcon: IconValue;
            pageAriaLabel: string;
            currentPageAriaLabel: string;
            firstAriaLabel: string;
            previousAriaLabel: string;
            nextAriaLabel: string;
            lastAriaLabel: string;
            showFirstLastPage: boolean;
        } & {
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            activeColor?: string | undefined;
            totalVisible?: string | number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
                first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
                last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: number) => any) | undefined;
            onNext?: ((value: number) => any) | undefined;
            onPrev?: ((value: number) => any) | undefined;
            onFirst?: ((value: number) => any) | undefined;
            onLast?: ((value: number) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: number) => true;
            first: (value: number) => true;
            prev: (value: number) => true;
            next: (value: number) => true;
            last: (value: number) => true;
        }, string, {
            length: string | number;
            start: string | number;
            style: vue.StyleValue;
            ariaLabel: string;
            disabled: boolean;
            size: string | number;
            tag: string;
            ellipsis: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            modelValue: number;
            nextIcon: IconValue;
            prevIcon: IconValue;
            firstIcon: IconValue;
            lastIcon: IconValue;
            pageAriaLabel: string;
            currentPageAriaLabel: string;
            firstAriaLabel: string;
            previousAriaLabel: string;
            nextAriaLabel: string;
            lastAriaLabel: string;
            showFirstLastPage: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            item: (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            first: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prev: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            last: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        length: string | number;
        start: string | number;
        style: vue.StyleValue;
        ariaLabel: string;
        disabled: boolean;
        size: string | number;
        tag: string;
        ellipsis: string;
        density: Density;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        modelValue: number;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    length: string | number;
    start: string | number;
    style: vue.StyleValue;
    ariaLabel: string;
    disabled: boolean;
    size: string | number;
    tag: string;
    ellipsis: string;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    modelValue: number;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
} & {
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    activeColor?: string | undefined;
    totalVisible?: string | number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onNext?: ((value: number) => any) | undefined;
    onPrev?: ((value: number) => any) | undefined;
    onFirst?: ((value: number) => any) | undefined;
    onLast?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    first: (value: number) => true;
    prev: (value: number) => true;
    next: (value: number) => true;
    last: (value: number) => true;
}, string, {
    length: string | number;
    start: string | number;
    style: vue.StyleValue;
    ariaLabel: string;
    disabled: boolean;
    size: string | number;
    tag: string;
    ellipsis: string;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    modelValue: number;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
}, {}, string, vue.SlotsType<Partial<{
    item: (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    first: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    last: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
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
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}>>;
type VPagination = InstanceType<typeof VPagination>;

export { VPagination };
