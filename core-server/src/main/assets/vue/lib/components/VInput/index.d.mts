import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, ComputedRef, Ref } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type VMessageSlot = {
    message: string;
};

interface VInputSlot {
    id: ComputedRef<string>;
    messagesId: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}
declare const VInput: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            error?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | null | undefined;
            readonly?: boolean | null | undefined;
            messages?: string | readonly string[] | undefined;
            density?: Density | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            centerAffix?: boolean | undefined;
            persistentHint?: boolean | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            } | ((arg: VInputSlot) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            modelValue?: any;
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", val: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            label?: string | undefined;
            class?: any;
            modelValue?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            } | ((arg: VInputSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, {
            reset: () => void;
            resetValidation: () => void;
            validate: (silent?: boolean) => Promise<string[]>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: any) => true;
        }, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        density: Density;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        centerAffix: boolean;
        persistentHint: boolean;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        label?: string | undefined;
        class?: any;
        modelValue?: any;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        } | ((arg: VInputSlot) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        reset: () => void;
        resetValidation: () => void;
        validate: (silent?: boolean) => Promise<string[]>;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: Density;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
} & {
    id?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    class?: any;
    modelValue?: any;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    } | ((arg: VInputSlot) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    reset: () => void;
    resetValidation: () => void;
    validate: (silent?: boolean) => Promise<string[]>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, {
    error: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: Density;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}, vue.ExtractPropTypes<{
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}>>;
type VInput = InstanceType<typeof VInput>;

export { VInput };
