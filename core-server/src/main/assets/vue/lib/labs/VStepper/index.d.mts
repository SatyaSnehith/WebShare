import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent } from "/js/vue.js";

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type StepperItemSlot = {
    canEdit: boolean;
    hasError: boolean;
    hasCompleted: boolean;
    title?: string;
    subtitle?: string;
    step: any;
};
type ValidationRule = () => string | boolean;
declare const VStepperItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            error?: boolean | undefined;
            complete?: boolean | undefined;
            disabled?: boolean | undefined;
            ripple?: boolean | {
                class: string;
            } | undefined;
            rules?: readonly ValidationRule[] | undefined;
            completeIcon?: string | undefined;
            editable?: boolean | undefined;
            editIcon?: string | undefined;
            errorIcon?: string | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            value?: any;
            style?: unknown;
            title?: string | undefined;
            class?: unknown;
            icon?: string | undefined;
            $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
                default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            selectedClass?: string | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
            subtitle?: string | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            error: boolean;
            complete: boolean;
            disabled: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            rules: readonly ValidationRule[];
            completeIcon: string;
            editable: boolean;
            editIcon: string;
            errorIcon: string;
        } & {
            color?: string | undefined;
            value?: any;
            title?: string | undefined;
            icon?: string | undefined;
            selectedClass?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
                default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => boolean;
        }, string, {
            error: boolean;
            complete: boolean;
            disabled: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            rules: readonly ValidationRule[];
            completeIcon: string;
            editable: boolean;
            editIcon: string;
            errorIcon: string;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        error: boolean;
        complete: boolean;
        disabled: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        rules: readonly ValidationRule[];
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        icon?: string | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    complete: boolean;
    disabled: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    rules: readonly ValidationRule[];
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    icon?: string | undefined;
    selectedClass?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
        default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => boolean;
}, string, {
    error: boolean;
    complete: boolean;
    disabled: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    rules: readonly ValidationRule[];
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}, vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}>>;
type VStepperItem = InstanceType<typeof VStepperItem>;

type StepperItem = string | Record<string, any>;
type VStepperSlot = {
    prev: () => void;
    next: () => void;
};
declare const VStepper: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            flat?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            items?: readonly StepperItem[] | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            selectedClass?: string | undefined;
            itemTitle?: string | undefined;
            itemValue?: string | undefined;
            mobile?: boolean | undefined;
            hideActions?: boolean | undefined;
            prevText?: string | undefined;
            nextText?: string | undefined;
            editable?: boolean | undefined;
            altLabels?: boolean | undefined;
            nonLinear?: boolean | undefined;
            max?: number | undefined;
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
            class?: any;
            $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
                [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: (() => vue.VNodeChild) | undefined;
                next?: (() => vue.VNodeChild) | undefined;
            };
            elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: false | (() => vue.VNodeChild) | undefined;
                next?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
            bgColor?: string | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prev?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", v: unknown) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly StepperItem[];
            selectedClass: string;
            itemTitle: string;
            itemValue: string;
            mobile: boolean;
            hideActions: boolean;
            prevText: string;
            nextText: string;
            editable: boolean;
            altLabels: boolean;
            nonLinear: boolean;
        } & {
            max?: number | undefined;
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
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            bgColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
                [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: (() => vue.VNodeChild) | undefined;
                next?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
                item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
                prev?: false | (() => vue.VNodeChild) | undefined;
                next?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
        }, {
            prev: () => void;
            next: () => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: unknown) => boolean;
        }, string, {
            flat: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            items: readonly StepperItem[];
            rounded: string | number | boolean;
            modelValue: any;
            selectedClass: string;
            itemTitle: string;
            itemValue: string;
            mobile: boolean;
            hideActions: boolean;
            prevText: string;
            nextText: string;
            editable: boolean;
            altLabels: boolean;
            nonLinear: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        items: readonly StepperItem[];
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        mobile: boolean;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
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
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: (() => vue.VNodeChild) | undefined;
            next?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | (() => vue.VNodeChild) | undefined;
            next?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        prev: () => void;
        next: () => void;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly StepperItem[];
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    mobile: boolean;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    max?: number | undefined;
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
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItem) => vue.VNodeChild) | {
        [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: (() => vue.VNodeChild) | undefined;
        next?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: false | (() => vue.VNodeChild) | undefined;
        next?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    items: readonly StepperItem[];
    rounded: string | number | boolean;
    modelValue: any;
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    mobile: boolean;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
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
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
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
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
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
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    editable: BooleanConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}, vue.ExtractPropTypes<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
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
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
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
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
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
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    editable: BooleanConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}>>;
type VStepper = InstanceType<typeof VStepper>;

declare const VStepperActions: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean | "next" | "prev" | undefined;
            prevText?: string | undefined;
            nextText?: string | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: {} | vue.VNodeChild | {
                prev?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            'v-slots'?: {
                prev?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
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
            "v-slot:next"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click:prev") => void) & ((event: "click:next") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: boolean | "next" | "prev";
            prevText: string;
            nextText: string;
        } & {
            color?: string | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                prev?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prev?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prev"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:prev': () => true;
            'click:next': () => true;
        }, string, {
            disabled: boolean | "next" | "prev";
            prevText: string;
            nextText: string;
        }, {}, string, vue.SlotsType<Partial<{
            prev: (arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: {
                props: {
                    onClick: () => void;
                };
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
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
} & {
    color?: string | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        prev?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prev?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prev"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:prev': () => true;
    'click:next': () => true;
}, string, {
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
}, {}, string, vue.SlotsType<Partial<{
    prev: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperActions = InstanceType<typeof VStepperActions>;

declare const VStepperHeader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            tag?: string | undefined;
            key?: string | number | symbol | undefined;
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
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
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
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperHeader = InstanceType<typeof VStepperHeader>;

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VStepperWindow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            touch?: boolean | TouchHandlers | undefined;
            selectedClass?: string | undefined;
            continuous?: boolean | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
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
            modelValue?: any;
            "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
            showArrows?: string | boolean | undefined;
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
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
        } & {
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            modelValue?: any;
            showArrows?: string | boolean | undefined;
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
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
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
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        selectedClass: string;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        touch?: boolean | TouchHandlers | undefined;
        theme?: string | undefined;
        modelValue?: any;
        showArrows?: string | boolean | undefined;
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
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
} & {
    class?: any;
    touch?: boolean | TouchHandlers | undefined;
    theme?: string | undefined;
    modelValue?: any;
    showArrows?: string | boolean | undefined;
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
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: vue.PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: vue.PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: vue.PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: vue.PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
}>>;
type VStepperWindow = InstanceType<typeof VStepperWindow>;

declare const VStepperWindowItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: string | boolean | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            reverseTransition?: string | boolean | undefined;
            key?: string | number | symbol | undefined;
            value?: any;
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
            selectedClass?: string | undefined;
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
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
        } & {
            transition?: string | boolean | undefined;
            value?: any;
            class?: any;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
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
            transition: string | boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            reverseTransition: string | boolean;
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
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
    } & {
        transition?: string | boolean | undefined;
        value?: any;
        class?: any;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
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
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
} & {
    transition?: string | boolean | undefined;
    value?: any;
    class?: any;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
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
    transition: string | boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>>;
type VStepperWindowItem = InstanceType<typeof VStepperWindowItem>;

export { VStepper, VStepperActions, VStepperHeader, VStepperItem, VStepperWindow, VStepperWindowItem };
