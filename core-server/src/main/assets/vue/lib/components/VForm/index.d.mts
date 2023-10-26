import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}

declare const VForm: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            readonly?: boolean | undefined;
            modelValue?: boolean | null | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            fastFail?: boolean | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    errors: vue.Ref<{
                        id: string | number;
                        errorMessages: string[];
                    }[]>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isValidating: vue.ShallowRef<boolean>;
                    isValid: vue.Ref<boolean | null> & {
                        readonly externalValue: boolean | null;
                    };
                    items: vue.Ref<{
                        id: string | number;
                        validate: () => Promise<string[]>;
                        reset: () => void;
                        resetValidation: () => void;
                        isValid: boolean | null;
                        errorMessages: string[];
                    }[]>;
                    validate: () => Promise<{
                        valid: boolean;
                        errors: {
                            id: string | number;
                            errorMessages: string[];
                        }[];
                    }>;
                    reset: () => void;
                    resetValidation: () => void;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    errors: vue.Ref<{
                        id: string | number;
                        errorMessages: string[];
                    }[]>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isValidating: vue.ShallowRef<boolean>;
                    isValid: vue.Ref<boolean | null> & {
                        readonly externalValue: boolean | null;
                    };
                    items: vue.Ref<{
                        id: string | number;
                        validate: () => Promise<string[]>;
                        reset: () => void;
                        resetValidation: () => void;
                        isValid: boolean | null;
                        errorMessages: string[];
                    }[]>;
                    validate: () => Promise<{
                        valid: boolean;
                        errors: {
                            id: string | number;
                            errorMessages: string[];
                        }[];
                    }>;
                    reset: () => void;
                    resetValidation: () => void;
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
            "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "submit", e: SubmitEventPromise) => void) & ((event: "update:modelValue", val: boolean | null) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            disabled: boolean;
            readonly: boolean;
            modelValue: boolean | null;
            validateOn: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            fastFail: boolean;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    errors: vue.Ref<{
                        id: string | number;
                        errorMessages: string[];
                    }[]>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isValidating: vue.ShallowRef<boolean>;
                    isValid: vue.Ref<boolean | null> & {
                        readonly externalValue: boolean | null;
                    };
                    items: vue.Ref<{
                        id: string | number;
                        validate: () => Promise<string[]>;
                        reset: () => void;
                        resetValidation: () => void;
                        isValid: boolean | null;
                        errorMessages: string[];
                    }[]>;
                    validate: () => Promise<{
                        valid: boolean;
                        errors: {
                            id: string | number;
                            errorMessages: string[];
                        }[];
                    }>;
                    reset: () => void;
                    resetValidation: () => void;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    errors: vue.Ref<{
                        id: string | number;
                        errorMessages: string[];
                    }[]>;
                    isDisabled: vue.ComputedRef<boolean>;
                    isReadonly: vue.ComputedRef<boolean>;
                    isValidating: vue.ShallowRef<boolean>;
                    isValid: vue.Ref<boolean | null> & {
                        readonly externalValue: boolean | null;
                    };
                    items: vue.Ref<{
                        id: string | number;
                        validate: () => Promise<string[]>;
                        reset: () => void;
                        resetValidation: () => void;
                        isValid: boolean | null;
                        errorMessages: string[];
                    }[]>;
                    validate: () => Promise<{
                        valid: boolean;
                        errors: {
                            id: string | number;
                            errorMessages: string[];
                        }[];
                    }>;
                    reset: () => void;
                    resetValidation: () => void;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } & {
            onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
            "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
        }, {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => void;
                resetValidation: () => void;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        } & HTMLFormElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: boolean | null) => true;
            submit: (e: SubmitEventPromise) => true;
        }, string, {
            style: vue.StyleValue;
            disabled: boolean;
            readonly: boolean;
            modelValue: boolean | null;
            validateOn: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            fastFail: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
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
        style: vue.StyleValue;
        disabled: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        fastFail: boolean;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => void;
                resetValidation: () => void;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => void;
                    resetValidation: () => void;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => void;
                resetValidation: () => void;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => void;
            resetValidation: () => void;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    } & HTMLFormElement> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    fastFail: boolean;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => void;
                resetValidation: () => void;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => void;
            resetValidation: () => void;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => void;
                resetValidation: () => void;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => void;
            resetValidation: () => void;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNodeChild) | undefined;
} & {
    onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
    "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
}, {
    errors: vue.Ref<{
        id: string | number;
        errorMessages: string[];
    }[]>;
    isDisabled: vue.ComputedRef<boolean>;
    isReadonly: vue.ComputedRef<boolean>;
    isValidating: vue.ShallowRef<boolean>;
    isValid: vue.Ref<boolean | null> & {
        readonly externalValue: boolean | null;
    };
    items: vue.Ref<{
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => void;
        resetValidation: () => void;
        isValid: boolean | null;
        errorMessages: string[];
    }[]>;
    validate: () => Promise<{
        valid: boolean;
        errors: {
            id: string | number;
            errorMessages: string[];
        }[];
    }>;
    reset: () => void;
    resetValidation: () => void;
} & HTMLFormElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: boolean | null) => true;
    submit: (e: SubmitEventPromise) => true;
}, string, {
    style: vue.StyleValue;
    disabled: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    fastFail: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => void;
            resetValidation: () => void;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}, vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}>>;
type VForm = InstanceType<typeof VForm>;

export { VForm };
