import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType } from "/js/vue.js";
// @ts-ignore
import * as vue_router from 'vue-router';

type Density = null | 'default' | 'comfortable' | 'compact';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VCardItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
            density?: Density | undefined;
            key?: string | number | symbol | undefined;
            title?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
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
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            density: Density;
        } & {
            title?: string | undefined;
            class?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            density: Density;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        density: Density;
    } & {
        title?: string | undefined;
        class?: any;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            subtitle?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            subtitle?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    density: Density;
} & {
    title?: string | undefined;
    class?: any;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
        subtitle?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
        subtitle?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    density: Density;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
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
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    subtitle: StringConstructor;
    title: StringConstructor;
}, vue.ExtractPropTypes<{
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
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    subtitle: StringConstructor;
    title: StringConstructor;
}>>;
type VCardItem = InstanceType<typeof VCardItem>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

declare const VCard: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            replace?: boolean | undefined;
            link?: boolean | undefined;
            flat?: boolean | undefined;
            exact?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | undefined;
            ripple?: boolean | {
                class: string;
            } | undefined;
            hover?: boolean | undefined;
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
            loading?: string | boolean | undefined;
            title?: string | undefined;
            image?: string | undefined;
            text?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                text?: (() => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: (() => vue.VNodeChild) | undefined;
                item?: (() => vue.VNodeChild) | undefined;
            };
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                text?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: false | (() => vue.VNodeChild) | undefined;
                item?: false | (() => vue.VNodeChild) | undefined;
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
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
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
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            text?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            image?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            replace: boolean;
            flat: boolean;
            exact: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            ripple: boolean | {
                class: string;
            } | undefined;
            hover: boolean;
        } & {
            link?: boolean | undefined;
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
            loading?: string | boolean | undefined;
            title?: string | undefined;
            image?: string | undefined;
            text?: string | undefined;
            class?: any;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                title?: (() => vue.VNodeChild) | undefined;
                subtitle?: (() => vue.VNodeChild) | undefined;
                actions?: (() => vue.VNodeChild) | undefined;
                text?: (() => vue.VNodeChild) | undefined;
                loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: (() => vue.VNodeChild) | undefined;
                item?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                title?: false | (() => vue.VNodeChild) | undefined;
                subtitle?: false | (() => vue.VNodeChild) | undefined;
                actions?: false | (() => vue.VNodeChild) | undefined;
                text?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
                image?: false | (() => vue.VNodeChild) | undefined;
                item?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            replace: boolean;
            link: boolean;
            flat: boolean;
            exact: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            ripple: boolean | {
                class: string;
            } | undefined;
            hover: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            image: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        flat: boolean;
        exact: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        density: Density;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ripple: boolean | {
            class: string;
        } | undefined;
        hover: boolean;
    } & {
        link?: boolean | undefined;
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
        loading?: string | boolean | undefined;
        title?: string | undefined;
        image?: string | undefined;
        text?: string | undefined;
        class?: any;
        href?: string | undefined;
        elevation?: string | number | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            subtitle?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            image?: (() => vue.VNodeChild) | undefined;
            item?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            subtitle?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            image?: false | (() => vue.VNodeChild) | undefined;
            item?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    flat: boolean;
    exact: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    ripple: boolean | {
        class: string;
    } | undefined;
    hover: boolean;
} & {
    link?: boolean | undefined;
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
    loading?: string | boolean | undefined;
    title?: string | undefined;
    image?: string | undefined;
    text?: string | undefined;
    class?: any;
    href?: string | undefined;
    elevation?: string | number | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
        subtitle?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        text?: (() => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        image?: (() => vue.VNodeChild) | undefined;
        item?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
        subtitle?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        text?: false | (() => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        image?: false | (() => vue.VNodeChild) | undefined;
        item?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:image"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    link: boolean;
    flat: boolean;
    exact: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    ripple: boolean | {
        class: string;
    } | undefined;
    hover: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    image: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    tag: {
        type: StringConstructor;
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
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    loading: (StringConstructor | BooleanConstructor)[];
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
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
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
    tag: {
        type: StringConstructor;
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
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    loading: (StringConstructor | BooleanConstructor)[];
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
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}>>;
type VCard = InstanceType<typeof VCard>;

declare const VCardActions: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            style?: vue.StyleValue | undefined;
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
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
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
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
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
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
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
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}>>;
type VCardActions = InstanceType<typeof VCardActions>;

declare const VCardSubtitle: {
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
type VCardSubtitle = InstanceType<typeof VCardSubtitle>;

declare const VCardText: {
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
type VCardText = InstanceType<typeof VCardText>;

declare const VCardTitle: {
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
type VCardTitle = InstanceType<typeof VCardTitle>;

export { VCard, VCardActions, VCardItem, VCardSubtitle, VCardText, VCardTitle };
