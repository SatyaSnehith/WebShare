import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent } from "/js/vue.js";
// @ts-ignore
import * as vue_router from 'vue-router';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VChip: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            replace?: boolean | undefined;
            link?: boolean | undefined;
            filter?: boolean | undefined;
            exact?: boolean | undefined;
            label?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            draggable?: boolean | undefined;
            disabled?: boolean | undefined;
            size?: string | number | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined;
            modelValue?: boolean | undefined;
            ripple?: boolean | {
                class: string;
            } | undefined;
            closable?: boolean | undefined;
            closeIcon?: IconValue | undefined;
            closeLabel?: string | undefined;
            filterIcon?: string | undefined;
            pill?: boolean | undefined;
            key?: string | number | symbol | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            value?: any;
            text?: string | undefined;
            class?: any;
            onClick?: (EventProp<[MouseEvent], (args_0: MouseEvent) => any> & ((e: MouseEvent | KeyboardEvent) => any)) | undefined;
            onClickOnce?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean;
                }) => vue.VNodeChild) | undefined;
                label?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                close?: (() => vue.VNodeChild) | undefined;
                filter?: (() => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild);
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean;
                }) => vue.VNodeChild) | undefined;
                label?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                close?: false | (() => vue.VNodeChild) | undefined;
                filter?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            selectedClass?: string | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            "onClick:close"?: ((e: MouseEvent) => any) | undefined;
            "v-slot:close"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | (() => vue.VNodeChild) | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            "v-slot:filter"?: false | (() => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            close?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            filter?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click", e: MouseEvent | KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void) & ((event: "group:selected", val: {
            value: boolean;
        }) => void) & ((event: "click:close", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            replace: boolean;
            filter: boolean;
            exact: boolean;
            label: boolean;
            style: vue.StyleValue;
            draggable: boolean;
            disabled: boolean;
            size: string | number;
            tag: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            modelValue: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            closable: boolean;
            closeIcon: IconValue;
            closeLabel: string;
            filterIcon: string;
            pill: boolean;
        } & {
            link?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            value?: any;
            text?: string | undefined;
            class?: any;
            onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            onClickOnce?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean;
                }) => vue.VNodeChild) | undefined;
                label?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                close?: (() => vue.VNodeChild) | undefined;
                filter?: (() => vue.VNodeChild) | undefined;
            } | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isSelected: boolean | undefined;
                    selectedClass: boolean | (string | undefined)[] | undefined;
                    select: ((value: boolean) => void) | undefined;
                    toggle: (() => void) | undefined;
                    value: unknown;
                    disabled: boolean;
                }) => vue.VNodeChild) | undefined;
                label?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                close?: false | (() => vue.VNodeChild) | undefined;
                filter?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:close"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:filter"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
            "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        }, () => false | JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:close': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            'group:selected': (val: {
                value: boolean;
            }) => true;
            click: (e: MouseEvent | KeyboardEvent) => true;
        }, string, {
            replace: boolean;
            link: boolean;
            filter: boolean;
            exact: boolean;
            label: boolean;
            style: vue.StyleValue;
            draggable: boolean;
            disabled: boolean;
            size: string | number;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            modelValue: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            closable: boolean;
            closeIcon: IconValue;
            closeLabel: string;
            filterIcon: string;
            pill: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            close: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            filter: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        filter: boolean;
        exact: boolean;
        label: boolean;
        style: vue.StyleValue;
        draggable: boolean;
        disabled: boolean;
        size: string | number;
        tag: string;
        density: Density;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        modelValue: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        filterIcon: string;
        pill: boolean;
    } & {
        link?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        text?: string | undefined;
        class?: any;
        onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        onClickOnce?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild) | undefined;
            label?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            close?: (() => vue.VNodeChild) | undefined;
            filter?: (() => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => vue.VNodeChild) | undefined;
            label?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            close?: false | (() => vue.VNodeChild) | undefined;
            filter?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:close"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:filter"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => false | JSX.Element> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    filter: boolean;
    exact: boolean;
    label: boolean;
    style: vue.StyleValue;
    draggable: boolean;
    disabled: boolean;
    size: string | number;
    tag: string;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    modelValue: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    filterIcon: string;
    pill: boolean;
} & {
    link?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    value?: any;
    text?: string | undefined;
    class?: any;
    onClick?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    onClickOnce?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    selectedClass?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => vue.VNodeChild) | undefined;
        label?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        close?: (() => vue.VNodeChild) | undefined;
        filter?: (() => vue.VNodeChild) | undefined;
    } | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => vue.VNodeChild) | undefined;
        label?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        close?: false | (() => vue.VNodeChild) | undefined;
        filter?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:close"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:filter"?: false | (() => vue.VNodeChild) | undefined;
} & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
    "onClick:close"?: ((e: MouseEvent) => any) | undefined;
}, () => false | JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:close': (e: MouseEvent) => true;
    'update:modelValue': (value: boolean) => true;
    'group:selected': (val: {
        value: boolean;
    }) => true;
    click: (e: MouseEvent | KeyboardEvent) => true;
}, string, {
    replace: boolean;
    link: boolean;
    filter: boolean;
    exact: boolean;
    label: boolean;
    style: vue.StyleValue;
    draggable: boolean;
    disabled: boolean;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    modelValue: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    filterIcon: string;
    pill: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    close: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    filter: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: StringConstructor;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    text: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    onClickOnce: PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: StringConstructor;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    text: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    onClickOnce: PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}>>;
type VChip = InstanceType<typeof VChip>;

export { VChip };
