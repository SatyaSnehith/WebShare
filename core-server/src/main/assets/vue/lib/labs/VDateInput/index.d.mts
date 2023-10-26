import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, Ref, ComputedRef } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};

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

declare const VDateInput: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            flat?: boolean | undefined;
            reverse?: boolean | undefined;
            type?: string | undefined;
            error?: boolean | undefined;
            active?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            inputMode?: "calendar" | "keyboard" | undefined;
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            readonly?: boolean | null | undefined;
            placeholder?: string | undefined;
            messages?: string | readonly string[] | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
            clearIcon?: IconValue | undefined;
            appendInnerIcon?: NonNullable<IconValue> | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            centerAffix?: boolean | undefined;
            persistentHint?: boolean | undefined;
            mobile?: boolean | undefined;
            clearable?: boolean | undefined;
            dirty?: boolean | undefined;
            persistentClear?: boolean | undefined;
            singleLine?: boolean | undefined;
            persistentPlaceholder?: boolean | undefined;
            persistentCounter?: boolean | undefined;
            displayDate?: any;
            viewMode?: "month" | "year" | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
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
                default?: (() => vue.VNodeChild) | undefined;
                counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            };
            format?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            counter?: string | number | boolean | undefined;
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
                default?: false | (() => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            bgColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
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
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
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
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", date: readonly any[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:inputMode", inputMode: "calendar" | "keyboard") => void) & ((event: "update:viewMode", viewMode: "month" | "year") => void) & ((event: "update:displayDate", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            inputMode: "calendar" | "keyboard";
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            placeholder: string;
            messages: string | readonly string[];
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            clearIcon: IconValue;
            appendInnerIcon: NonNullable<IconValue>;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            mobile: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            displayDate: any;
            viewMode: "month" | "year";
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            format?: string | undefined;
            theme?: string | undefined;
            counter?: string | number | boolean | undefined;
            rounded?: string | number | boolean | undefined;
            modelValue?: any;
            bgColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
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
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
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
                default?: (() => vue.VNodeChild) | undefined;
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
                default?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: readonly any[]) => boolean;
            'update:displayDate': (date: any) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
            'update:viewMode': (viewMode: "month" | "year") => boolean;
        }, string, {
            flat: boolean;
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            inputMode: "calendar" | "keyboard";
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            placeholder: string;
            messages: string | readonly string[];
            rounded: string | number | boolean;
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            clearIcon: IconValue;
            appendInnerIcon: NonNullable<IconValue>;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
            mobile: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            displayDate: any;
            viewMode: "month" | "year";
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
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        flat: boolean;
        reverse: boolean;
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        inputMode: "calendar" | "keyboard";
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        placeholder: string;
        messages: string | readonly string[];
        density: Density;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        clearIcon: IconValue;
        appendInnerIcon: NonNullable<IconValue>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        persistentHint: boolean;
        mobile: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        displayDate: any;
        viewMode: "month" | "year";
    } & {
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        format?: string | undefined;
        theme?: string | undefined;
        counter?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
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
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
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
            default?: (() => vue.VNodeChild) | undefined;
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
            default?: false | (() => vue.VNodeChild) | undefined;
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
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
        "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    reverse: boolean;
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    inputMode: "calendar" | "keyboard";
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    placeholder: string;
    messages: string | readonly string[];
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    clearIcon: IconValue;
    appendInnerIcon: NonNullable<IconValue>;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    mobile: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    displayDate: any;
    viewMode: "month" | "year";
} & {
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    class?: any;
    format?: string | undefined;
    theme?: string | undefined;
    counter?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
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
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
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
        default?: (() => vue.VNodeChild) | undefined;
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
        default?: false | (() => vue.VNodeChild) | undefined;
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
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
    "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: readonly any[]) => boolean;
    'update:displayDate': (date: any) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
    'update:viewMode': (viewMode: "month" | "year") => boolean;
}, string, {
    flat: boolean;
    reverse: boolean;
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    inputMode: "calendar" | "keyboard";
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    placeholder: string;
    messages: string | readonly string[];
    rounded: string | number | boolean;
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    clearIcon: IconValue;
    appendInnerIcon: NonNullable<IconValue>;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
    mobile: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    displayDate: any;
    viewMode: "month" | "year";
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
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    appendInnerIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: vue.PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: vue.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
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
    name: StringConstructor;
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
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
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
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: vue.PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: vue.PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: vue.PropType<Record<string, boolean>>;
    displayDate: {
        type: vue.PropType<any>;
        default: null;
    };
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
    format: StringConstructor;
    mobile: BooleanConstructor;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    appendInnerIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: vue.PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: vue.PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
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
    name: StringConstructor;
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
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
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
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: vue.PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: vue.PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: vue.PropType<Record<string, boolean>>;
    displayDate: {
        type: vue.PropType<any>;
        default: null;
    };
    inputMode: {
        type: vue.PropType<"calendar" | "keyboard">;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year">;
        default: string;
    };
    format: StringConstructor;
    mobile: BooleanConstructor;
}>>;
type VDateInput = InstanceType<typeof VDateInput>;

declare const VDateRangeInput: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            inputMode?: "calendar" | "keyboard" | undefined;
            placeholder?: string | undefined;
            prependIcon?: string | undefined;
            mobile?: boolean | undefined;
            viewMode?: "month" | "year" | undefined;
            dividerText?: string | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            style?: unknown;
            class?: unknown;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            format?: string | undefined;
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
            modelValue?: any[] | undefined;
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            displayDate?: any;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
            fromLabel?: string | undefined;
            toLabel?: string | undefined;
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
        $emit: ((event: "update:modelValue", date: readonly any[]) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:inputMode", inputMode: "calendar" | "keyboard") => void) & ((event: "update:viewMode", viewMode: "month" | "year") => void) & ((event: "update:displayDate", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inputMode: "calendar" | "keyboard";
            placeholder: string;
            prependIcon: string;
            mobile: boolean;
            viewMode: "month" | "year";
            dividerText: string;
        } & {
            color?: string | undefined;
            format?: string | undefined;
            modelValue?: any[] | undefined;
            displayDate?: any;
            fromLabel?: string | undefined;
            toLabel?: string | undefined;
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
            "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:displayDate"?: ((date: any) => any) | undefined;
            "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
            "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: readonly any[]) => boolean;
            'update:displayDate': (date: any) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
            'update:viewMode': (viewMode: "month" | "year") => boolean;
        }, string, {
            inputMode: "calendar" | "keyboard";
            placeholder: string;
            prependIcon: string;
            mobile: boolean;
            viewMode: "month" | "year";
            dividerText: string;
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
        inputMode: "calendar" | "keyboard";
        placeholder: string;
        prependIcon: string;
        mobile: boolean;
        viewMode: "month" | "year";
        dividerText: string;
    } & {
        color?: string | undefined;
        format?: string | undefined;
        modelValue?: any[] | undefined;
        displayDate?: any;
        fromLabel?: string | undefined;
        toLabel?: string | undefined;
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
        "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:displayDate"?: ((date: any) => any) | undefined;
        "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
        "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inputMode: "calendar" | "keyboard";
    placeholder: string;
    prependIcon: string;
    mobile: boolean;
    viewMode: "month" | "year";
    dividerText: string;
} & {
    color?: string | undefined;
    format?: string | undefined;
    modelValue?: any[] | undefined;
    displayDate?: any;
    fromLabel?: string | undefined;
    toLabel?: string | undefined;
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
    "onUpdate:modelValue"?: ((date: readonly any[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:displayDate"?: ((date: any) => any) | undefined;
    "onUpdate:inputMode"?: ((inputMode: "calendar" | "keyboard") => any) | undefined;
    "onUpdate:viewMode"?: ((viewMode: "month" | "year") => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: readonly any[]) => boolean;
    'update:displayDate': (date: any) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:inputMode': (inputMode: "calendar" | "keyboard") => boolean;
    'update:viewMode': (viewMode: "month" | "year") => boolean;
}, string, {
    inputMode: "calendar" | "keyboard";
    placeholder: string;
    prependIcon: string;
    mobile: boolean;
    viewMode: "month" | "year";
    dividerText: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    modelValue: {
        type: PropType<any[]>;
    };
    displayDate: {
        type: PropType<any>;
    };
    inputMode: {
        type: PropType<"calendar" | "keyboard">;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
    format: StringConstructor;
    color: StringConstructor;
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    fromLabel: StringConstructor;
    toLabel: StringConstructor;
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
}, vue.ExtractPropTypes<{
    modelValue: {
        type: PropType<any[]>;
    };
    displayDate: {
        type: PropType<any>;
    };
    inputMode: {
        type: PropType<"calendar" | "keyboard">;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
    format: StringConstructor;
    color: StringConstructor;
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    fromLabel: StringConstructor;
    toLabel: StringConstructor;
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    mobile: BooleanConstructor;
}>>;
type VDateRangeInput = InstanceType<typeof VDateRangeInput>;

export { VDateInput, VDateRangeInput };
