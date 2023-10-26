import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, Ref, ComputedRef, nextTick } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}

type Density = null | 'default' | 'comfortable' | 'compact';

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

type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};

declare const VTextarea: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            flat?: boolean | undefined;
            reverse?: boolean | undefined;
            error?: boolean | undefined;
            active?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            readonly?: boolean | null | undefined;
            messages?: string | readonly string[] | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
            clearIcon?: IconValue | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            centerAffix?: boolean | undefined;
            persistentHint?: boolean | undefined;
            clearable?: boolean | undefined;
            dirty?: boolean | undefined;
            persistentClear?: boolean | undefined;
            singleLine?: boolean | undefined;
            persistentPlaceholder?: boolean | undefined;
            persistentCounter?: boolean | undefined;
            autoGrow?: boolean | undefined;
            noResize?: boolean | undefined;
            rows?: string | number | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            class?: any;
            placeholder?: string | undefined;
            $children?: {} | vue.VNodeChild | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: (() => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                label?: ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            counter?: string | number | true | undefined;
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: false | (() => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                label?: false | ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            bgColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            appendInnerIcon?: IconValue | undefined;
            prependInnerIcon?: IconValue | undefined;
            'onClick:clear'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:appendInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prependInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((focused: boolean) => any)) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            baseColor?: string | undefined;
            "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            suffix?: string | undefined;
            counterValue?: ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            maxRows?: string | number | undefined;
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
            clear?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            clearIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            autoGrow: boolean;
            noResize: boolean;
            rows: string | number;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            class?: any;
            placeholder?: string | undefined;
            theme?: string | undefined;
            counter?: string | number | true | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            bgColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            appendInnerIcon?: IconValue | undefined;
            prependInnerIcon?: IconValue | undefined;
            'onClick:clear'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:appendInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prependInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            baseColor?: string | undefined;
            suffix?: string | undefined;
            counterValue?: ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            maxRows?: string | number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: (() => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                label?: ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: false | (() => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                label?: false | ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
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
            $nextTick: typeof nextTick;
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
        }> & {} & vue.ComponentCustomProperties & {}, "key" | "id" | "name" | "label" | "class" | "$children" | "ref" | "ref_for" | "ref_key" | "v-slot:default" | "v-slots" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "onUpdate:focused" | "validateOn" | "validationValue" | "hint" | "hideDetails" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules" | "centerAffix" | "persistentHint") | "v-slot:details">, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:control': (e: MouseEvent) => true;
            'mousedown:control': (e: MouseEvent) => true;
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rounded: string | number | boolean;
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            clearIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            autoGrow: boolean;
            noResize: boolean;
            rows: string | number;
        }, {}, string, vue.SlotsType<Partial<{
            message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            clear: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            counter: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        flat: boolean;
        reverse: boolean;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        density: Density;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        clearIcon: IconValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        autoGrow: boolean;
        noResize: boolean;
        rows: string | number;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        placeholder?: string | undefined;
        theme?: string | undefined;
        counter?: string | number | true | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        appendInnerIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:appendInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prependInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        baseColor?: string | undefined;
        suffix?: string | undefined;
        counterValue?: ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        maxRows?: string | number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            clear?: (() => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            clear?: false | (() => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
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
        $nextTick: typeof nextTick;
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
    }> & {} & vue.ComponentCustomProperties & {}, "key" | "id" | "name" | "label" | "class" | "$children" | "ref" | "ref_for" | "ref_key" | "v-slot:default" | "v-slots" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "onUpdate:focused" | "validateOn" | "validationValue" | "hint" | "hideDetails" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules" | "centerAffix" | "persistentHint") | "v-slot:details">, `$${any}`>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    clearIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    autoGrow: boolean;
    noResize: boolean;
    rows: string | number;
} & {
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    class?: any;
    placeholder?: string | undefined;
    theme?: string | undefined;
    counter?: string | number | true | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    appendInnerIcon?: IconValue | undefined;
    prependInnerIcon?: IconValue | undefined;
    'onClick:clear'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:appendInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prependInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    baseColor?: string | undefined;
    suffix?: string | undefined;
    counterValue?: ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
    maxRows?: string | number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        clear?: (() => vue.VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        label?: ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        clear?: false | (() => vue.VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        label?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
}, HTMLInputElement & Omit<Omit<{
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
    $nextTick: typeof nextTick;
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
}> & {} & vue.ComponentCustomProperties & {}, "key" | "id" | "name" | "label" | "class" | "$children" | "ref" | "ref_for" | "ref_key" | "v-slot:default" | "v-slots" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "onUpdate:focused" | "validateOn" | "validationValue" | "hint" | "hideDetails" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules" | "centerAffix" | "persistentHint") | "v-slot:details">, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:control': (e: MouseEvent) => true;
    'mousedown:control': (e: MouseEvent) => true;
    'update:focused': (focused: boolean) => true;
    'update:modelValue': (val: string) => true;
}, string, {
    flat: boolean;
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rounded: string | number | boolean;
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    clearIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    autoGrow: boolean;
    noResize: boolean;
    rows: string | number;
}, {}, string, vue.SlotsType<Partial<{
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    clear: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    counter: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    appendInnerIcon: PropType<IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
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
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
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
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
    modelModifiers: PropType<Record<string, boolean>>;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    appendInnerIcon: PropType<IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
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
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
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
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
    modelModifiers: PropType<Record<string, boolean>>;
}>>;
type VTextarea = InstanceType<typeof VTextarea>;

export { VTextarea };
