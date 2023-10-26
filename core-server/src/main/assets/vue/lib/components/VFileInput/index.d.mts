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

type VMessageSlot = {
    message: string;
};

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}
interface VFieldSlot extends DefaultInputSlot {
    props: Record<string, unknown>;
}

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

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

declare const VFileInput: {
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
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            readonly?: boolean | null | undefined;
            counter?: boolean | undefined;
            messages?: string | readonly string[] | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
            modelValue?: File[] | undefined;
            prependIcon?: NonNullable<IconValue> | undefined;
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
            chips?: boolean | undefined;
            counterSizeString?: string | undefined;
            counterString?: string | undefined;
            showSize?: boolean | 1024 | 1000 | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                label?: ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                counter?: (() => vue.VNodeChild) | undefined;
                selection?: ((arg: {
                    fileNames: string[];
                    totalBytes: number;
                    totalBytesReadable: string;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: false | (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                label?: false | ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                counter?: false | (() => vue.VNodeChild) | undefined;
                selection?: false | ((arg: {
                    fileNames: string[];
                    totalBytes: number;
                    totalBytesReadable: string;
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
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
            bgColor?: string | undefined;
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
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "v-slot:counter"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:selection"?: false | ((arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
            }) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: VInputSlot & VFieldSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            clear?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            counter?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            selection?: ((arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", files: File[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            readonly: boolean | null;
            counter: boolean;
            messages: string | readonly string[];
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            modelValue: File[];
            prependIcon: NonNullable<IconValue>;
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
            chips: boolean;
            counterSizeString: string;
            counterString: string;
            showSize: boolean | 1024 | 1000;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
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
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
                prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                label?: ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                counter?: (() => vue.VNodeChild) | undefined;
                selection?: ((arg: {
                    fileNames: string[];
                    totalBytes: number;
                    totalBytesReadable: string;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
                clear?: false | (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
                label?: false | ((arg: DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                counter?: false | (() => vue.VNodeChild) | undefined;
                selection?: false | ((arg: {
                    fileNames: string[];
                    totalBytes: number;
                    totalBytesReadable: string;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:counter"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:selection"?: false | ((arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
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
            'update:modelValue': (files: File[]) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean;
            readonly: boolean | null;
            counter: boolean;
            messages: string | readonly string[];
            rounded: string | number | boolean;
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            modelValue: File[];
            prependIcon: NonNullable<IconValue>;
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
            chips: boolean;
            counterSizeString: string;
            counterString: string;
            showSize: boolean | 1024 | 1000;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: VInputSlot & VFieldSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            clear: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            counter: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            selection: (arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        flat: boolean;
        reverse: boolean;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean | null;
        counter: boolean;
        messages: string | readonly string[];
        density: Density;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        modelValue: File[];
        prependIcon: NonNullable<IconValue>;
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
        chips: boolean;
        counterSizeString: string;
        counterString: string;
        showSize: boolean | 1024 | 1000;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
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
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            clear?: (() => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            counter?: (() => vue.VNodeChild) | undefined;
            selection?: ((arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            clear?: false | (() => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            counter?: false | (() => vue.VNodeChild) | undefined;
            selection?: false | ((arg: {
                fileNames: string[];
                totalBytes: number;
                totalBytesReadable: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:selection"?: false | ((arg: {
            fileNames: string[];
            totalBytes: number;
            totalBytesReadable: string;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
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
    disabled: boolean;
    multiple: boolean;
    readonly: boolean | null;
    counter: boolean;
    messages: string | readonly string[];
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    modelValue: File[];
    prependIcon: NonNullable<IconValue>;
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
    chips: boolean;
    counterSizeString: string;
    counterString: string;
    showSize: boolean | 1024 | 1000;
} & {
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
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
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        clear?: (() => vue.VNodeChild) | undefined;
        'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        label?: ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        counter?: (() => vue.VNodeChild) | undefined;
        selection?: ((arg: {
            fileNames: string[];
            totalBytes: number;
            totalBytesReadable: string;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        clear?: false | (() => vue.VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        label?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        counter?: false | (() => vue.VNodeChild) | undefined;
        selection?: false | ((arg: {
            fileNames: string[];
            totalBytes: number;
            totalBytesReadable: string;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VInputSlot & VFieldSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:counter"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:selection"?: false | ((arg: {
        fileNames: string[];
        totalBytes: number;
        totalBytesReadable: string;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
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
    'update:modelValue': (files: File[]) => true;
}, string, {
    flat: boolean;
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean | null;
    counter: boolean;
    messages: string | readonly string[];
    rounded: string | number | boolean;
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    modelValue: File[];
    prependIcon: NonNullable<IconValue>;
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
    chips: boolean;
    counterSizeString: string;
    counterString: string;
    showSize: boolean | 1024 | 1000;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: VInputSlot & VFieldSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    clear: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    counter: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    selection: (arg: {
        fileNames: string[];
        totalBytes: number;
        totalBytesReadable: string;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
        validator: (val: any) => boolean;
    };
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
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    prependIcon: {
        type: PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
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
    chips: BooleanConstructor;
    counter: BooleanConstructor;
    counterSizeString: {
        type: StringConstructor;
        default: string;
    };
    counterString: {
        type: StringConstructor;
        default: string;
    };
    multiple: BooleanConstructor;
    showSize: {
        type: PropType<boolean | 1024 | 1000>;
        default: boolean;
        validator: (v: boolean | number) => boolean;
    };
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
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    modelValue: {
        type: PropType<File[]>;
        default: () => never[];
        validator: (val: any) => boolean;
    };
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
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    prependIcon: {
        type: PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
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
    chips: BooleanConstructor;
    counter: BooleanConstructor;
    counterSizeString: {
        type: StringConstructor;
        default: string;
    };
    counterString: {
        type: StringConstructor;
        default: string;
    };
    multiple: BooleanConstructor;
    showSize: {
        type: PropType<boolean | 1024 | 1000>;
        default: boolean;
        validator: (v: boolean | number) => boolean;
    };
}>>;
type VFileInput = InstanceType<typeof VFileInput>;

export { VFileInput };
