import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, WritableComputedRef, Ref, CSSProperties, VNode, ComputedRef } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;
type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

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

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

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

declare const VCheckbox: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            error?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | null | undefined;
            multiple?: boolean | null | undefined;
            readonly?: boolean | undefined;
            indeterminate?: boolean | undefined;
            messages?: string | readonly string[] | undefined;
            density?: Density | undefined;
            ripple?: boolean | undefined;
            falseIcon?: NonNullable<IconValue> | undefined;
            trueIcon?: NonNullable<IconValue> | undefined;
            valueComparator?: typeof deepEqual | undefined;
            indeterminateIcon?: IconValue | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            centerAffix?: boolean | undefined;
            persistentHint?: boolean | undefined;
            type?: string | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            modelValue?: any;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            defaultsTarget?: string | undefined;
            trueValue?: any;
            falseValue?: any;
            "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((focused: boolean) => any)) | undefined;
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
            message?: ((arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
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
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "update:focused", focused: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
            valueComparator: typeof deepEqual;
            indeterminateIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
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
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            defaultsTarget?: string | undefined;
            trueValue?: any;
            falseValue?: any;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: {
                    backgroundColorClasses: vue.Ref<string[]>;
                    backgroundColorStyles: vue.Ref<vue.CSSProperties>;
                }) => vue.VNodeChild) | undefined;
                label?: ((arg: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
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
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
            'update:focused': (focused: boolean) => boolean;
        }, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
            valueComparator: typeof deepEqual;
            indeterminateIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
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
        error: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean;
        indeterminate: boolean;
        messages: string | readonly string[];
        density: Density;
        ripple: boolean;
        falseIcon: NonNullable<IconValue>;
        trueIcon: NonNullable<IconValue>;
        valueComparator: typeof deepEqual;
        indeterminateIcon: IconValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        centerAffix: boolean;
        persistentHint: boolean;
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
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        defaultsTarget?: string | undefined;
        trueValue?: any;
        falseValue?: any;
        'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | {
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: {
                backgroundColorClasses: vue.Ref<string[]>;
                backgroundColorStyles: vue.Ref<vue.CSSProperties>;
            }) => vue.VNodeChild) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
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
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
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
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    defaultsTarget?: string | undefined;
    trueValue?: any;
    falseValue?: any;
    'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: {
        backgroundColorClasses: vue.Ref<string[]>;
        backgroundColorStyles: vue.Ref<vue.CSSProperties>;
    }) => vue.VNodeChild) | {
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: {
            backgroundColorClasses: vue.Ref<string[]>;
            backgroundColorStyles: vue.Ref<vue.CSSProperties>;
        }) => vue.VNodeChild) | undefined;
        label?: ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
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
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        backgroundColorClasses: vue.Ref<string[]>;
        backgroundColorStyles: vue.Ref<vue.CSSProperties>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
    'update:focused': (focused: boolean) => boolean;
}, string, {
    error: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
}, {}, string, vue.SlotsType<Partial<{
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
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
    type: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    value: null;
    label: StringConstructor;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    readonly: BooleanConstructor;
    class: vue.PropType<any>;
    indeterminate: BooleanConstructor;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    falseIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    trueValue: null;
    falseValue: null;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}, vue.ExtractPropTypes<{
    type: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    value: null;
    label: StringConstructor;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    readonly: BooleanConstructor;
    class: vue.PropType<any>;
    indeterminate: BooleanConstructor;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    falseIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    trueValue: null;
    falseValue: null;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}>>;
type VCheckbox = InstanceType<typeof VCheckbox>;

declare const VCheckboxBtn: {
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
            indeterminate?: boolean | undefined;
            density?: Density | undefined;
            ripple?: boolean | undefined;
            falseIcon?: NonNullable<IconValue> | undefined;
            trueIcon?: NonNullable<IconValue> | undefined;
            valueComparator?: typeof deepEqual | undefined;
            indeterminateIcon?: IconValue | undefined;
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
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
            defaultsTarget?: string | undefined;
            trueValue?: any;
            falseValue?: any;
            "v-slot:input"?: false | ((arg: SelectionControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
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
        $emit: ((event: "update:modelValue", value: any) => void) & ((event: "update:indeterminate", val: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inline: boolean;
            error: boolean;
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            density: Density;
            ripple: boolean;
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
            valueComparator: typeof deepEqual;
            indeterminateIcon: IconValue;
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
        } & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
            "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: any) => boolean;
            'update:indeterminate': (val: boolean) => boolean;
        }, string, {
            inline: boolean;
            error: boolean;
            style: vue.StyleValue;
            disabled: boolean | null;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            density: Density;
            ripple: boolean;
            falseIcon: NonNullable<IconValue>;
            trueIcon: NonNullable<IconValue>;
            valueComparator: typeof deepEqual;
            indeterminateIcon: IconValue;
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
        indeterminate: boolean;
        density: Density;
        ripple: boolean;
        falseIcon: NonNullable<IconValue>;
        trueIcon: NonNullable<IconValue>;
        valueComparator: typeof deepEqual;
        indeterminateIcon: IconValue;
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
    } & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
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
    indeterminate: boolean;
    density: Density;
    ripple: boolean;
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
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
} & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => boolean;
    'update:indeterminate': (val: boolean) => boolean;
}, string, {
    inline: boolean;
    error: boolean;
    style: vue.StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    density: Density;
    ripple: boolean;
    falseIcon: NonNullable<IconValue>;
    trueIcon: NonNullable<IconValue>;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
}>>;
type VCheckboxBtn = InstanceType<typeof VCheckboxBtn>;

export { VCheckbox, VCheckboxBtn };
