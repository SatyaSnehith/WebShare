import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare const VValidation: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            error?: boolean | undefined;
            disabled?: boolean | null | undefined;
            readonly?: boolean | null | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            key?: string | number | symbol | undefined;
            name?: string | undefined;
            label?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    errorMessages: vue.ComputedRef<string[]>;
                    isDirty: vue.ComputedRef<boolean>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isPristine: vue.ShallowRef<boolean>;
                    isValid: vue.ComputedRef<boolean | null>;
                    isValidating: vue.ShallowRef<boolean>;
                    reset: () => void;
                    resetValidation: () => void;
                    validate: (silent?: boolean) => Promise<string[]>;
                    validationClasses: vue.ComputedRef<{
                        [x: string]: boolean;
                    }>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    errorMessages: vue.ComputedRef<string[]>;
                    isDirty: vue.ComputedRef<boolean>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isPristine: vue.ShallowRef<boolean>;
                    isValid: vue.ComputedRef<boolean | null>;
                    isValidating: vue.ShallowRef<boolean>;
                    reset: () => void;
                    resetValidation: () => void;
                    validate: (silent?: boolean) => Promise<string[]>;
                    validationClasses: vue.ComputedRef<{
                        [x: string]: boolean;
                    }>;
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
            modelValue?: any;
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", val: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            error: boolean;
            disabled: boolean | null;
            readonly: boolean | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
        } & {
            name?: string | undefined;
            label?: string | undefined;
            modelValue?: any;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    errorMessages: vue.ComputedRef<string[]>;
                    isDirty: vue.ComputedRef<boolean>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isPristine: vue.ShallowRef<boolean>;
                    isValid: vue.ComputedRef<boolean | null>;
                    isValidating: vue.ShallowRef<boolean>;
                    reset: () => void;
                    resetValidation: () => void;
                    validate: (silent?: boolean) => Promise<string[]>;
                    validationClasses: vue.ComputedRef<{
                        [x: string]: boolean;
                    }>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    errorMessages: vue.ComputedRef<string[]>;
                    isDirty: vue.ComputedRef<boolean>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isPristine: vue.ShallowRef<boolean>;
                    isValid: vue.ComputedRef<boolean | null>;
                    isValidating: vue.ShallowRef<boolean>;
                    reset: () => void;
                    resetValidation: () => void;
                    validate: (silent?: boolean) => Promise<string[]>;
                    validationClasses: vue.ComputedRef<{
                        [x: string]: boolean;
                    }>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: any) => boolean;
        }, string, {
            error: boolean;
            disabled: boolean | null;
            readonly: boolean | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
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
        error: boolean;
        disabled: boolean | null;
        readonly: boolean | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
    } & {
        name?: string | undefined;
        label?: string | undefined;
        modelValue?: any;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            errorMessages: vue.ComputedRef<string[]>;
            isDirty: vue.ComputedRef<boolean>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isPristine: vue.ShallowRef<boolean>;
            isValid: vue.ComputedRef<boolean | null>;
            isValidating: vue.ShallowRef<boolean>;
            reset: () => void;
            resetValidation: () => void;
            validate: (silent?: boolean) => Promise<string[]>;
            validationClasses: vue.ComputedRef<{
                [x: string]: boolean;
            }>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                errorMessages: vue.ComputedRef<string[]>;
                isDirty: vue.ComputedRef<boolean>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isPristine: vue.ShallowRef<boolean>;
                isValid: vue.ComputedRef<boolean | null>;
                isValidating: vue.ShallowRef<boolean>;
                reset: () => void;
                resetValidation: () => void;
                validate: (silent?: boolean) => Promise<string[]>;
                validationClasses: vue.ComputedRef<{
                    [x: string]: boolean;
                }>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errorMessages: vue.ComputedRef<string[]>;
            isDirty: vue.ComputedRef<boolean>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isPristine: vue.ShallowRef<boolean>;
            isValid: vue.ComputedRef<boolean | null>;
            isValidating: vue.ShallowRef<boolean>;
            reset: () => void;
            resetValidation: () => void;
            validate: (silent?: boolean) => Promise<string[]>;
            validationClasses: vue.ComputedRef<{
                [x: string]: boolean;
            }>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    disabled: boolean | null;
    readonly: boolean | null;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
} & {
    name?: string | undefined;
    label?: string | undefined;
    modelValue?: any;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            errorMessages: vue.ComputedRef<string[]>;
            isDirty: vue.ComputedRef<boolean>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isPristine: vue.ShallowRef<boolean>;
            isValid: vue.ComputedRef<boolean | null>;
            isValidating: vue.ShallowRef<boolean>;
            reset: () => void;
            resetValidation: () => void;
            validate: (silent?: boolean) => Promise<string[]>;
            validationClasses: vue.ComputedRef<{
                [x: string]: boolean;
            }>;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        errorMessages: vue.ComputedRef<string[]>;
        isDirty: vue.ComputedRef<boolean>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isPristine: vue.ShallowRef<boolean>;
        isValid: vue.ComputedRef<boolean | null>;
        isValidating: vue.ShallowRef<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: (silent?: boolean) => Promise<string[]>;
        validationClasses: vue.ComputedRef<{
            [x: string]: boolean;
        }>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            errorMessages: vue.ComputedRef<string[]>;
            isDirty: vue.ComputedRef<boolean>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isPristine: vue.ShallowRef<boolean>;
            isValid: vue.ComputedRef<boolean | null>;
            isValidating: vue.ShallowRef<boolean>;
            reset: () => void;
            resetValidation: () => void;
            validate: (silent?: boolean) => Promise<string[]>;
            validationClasses: vue.ComputedRef<{
                [x: string]: boolean;
            }>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        errorMessages: vue.ComputedRef<string[]>;
        isDirty: vue.ComputedRef<boolean>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isPristine: vue.ShallowRef<boolean>;
        isValid: vue.ComputedRef<boolean | null>;
        isValidating: vue.ShallowRef<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: (silent?: boolean) => Promise<string[]>;
        validationClasses: vue.ComputedRef<{
            [x: string]: boolean;
        }>;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => boolean;
}, string, {
    error: boolean;
    disabled: boolean | null;
    readonly: boolean | null;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        errorMessages: vue.ComputedRef<string[]>;
        isDirty: vue.ComputedRef<boolean>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isPristine: vue.ShallowRef<boolean>;
        isValid: vue.ComputedRef<boolean | null>;
        isValidating: vue.ShallowRef<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: (silent?: boolean) => Promise<string[]>;
        validationClasses: vue.ComputedRef<{
            [x: string]: boolean;
        }>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
}, vue.ExtractPropTypes<{
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
}>>;
type VValidation = InstanceType<typeof VValidation>;

export { VValidation };
