import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, PropType, JSXComponent, Ref, ComputedRef, EffectScope, nextTick } from "/js/vue.js";

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;
type SelectItemKey = boolean | null | undefined | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
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
interface VFieldSlot extends DefaultInputSlot {
    props: Record<string, unknown>;
}
type VFieldSlots = {
    clear: never;
    'prepend-inner': DefaultInputSlot;
    'append-inner': DefaultInputSlot;
    label: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    };
    loader: LoaderSlotProps;
    default: VFieldSlot;
};

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
type VInputSlots = {
    default: VInputSlot;
    prepend: VInputSlot;
    append: VInputSlot;
    details: VInputSlot;
    message: VMessageSlot;
};

/**
 * - match without highlight
 * - single match (index), length already known
 * - single match (start, end)
 * - multiple matches (start, end), probably shouldn't overlap
 */
type FilterMatch = boolean | number | [number, number] | [number, number][];
type FilterFunction = (value: string, query: string, item?: InternalItem) => FilterMatch;
type FilterKeyFunctions = Record<string, FilterFunction>;
type FilterKeys = string | string[];
type FilterMode = 'some' | 'every' | 'union' | 'intersection';
interface InternalItem<T = any> {
    value: any;
    raw: T;
}

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps$1 {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope): void;

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children?: ListItem<T>[];
}

type Primitive = string | number | boolean | symbol;
type Val<T, ReturnObject extends boolean> = [T] extends [Primitive] ? T : (ReturnObject extends true ? T : any);
type Value<T, ReturnObject extends boolean, Multiple extends boolean> = Multiple extends true ? readonly Val<T, ReturnObject>[] : Val<T, ReturnObject> | null;
declare const VAutocomplete: {
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
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | undefined;
            menu?: boolean | undefined;
            style?: vue.StyleValue | undefined;
            role?: string | undefined;
            autofocus?: boolean | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            readonly?: boolean | null | undefined;
            noDataText?: string | undefined;
            messages?: string | readonly string[] | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            variant?: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined;
            valueComparator?: typeof deepEqual | undefined;
            clearIcon?: IconValue | undefined;
            focused?: boolean | undefined;
            errorMessages?: string | readonly string[] | null | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            centerAffix?: boolean | undefined;
            persistentHint?: boolean | undefined;
            filterMode?: FilterMode | undefined;
            noFilter?: boolean | undefined;
            filterKeys?: NonNullable<FilterKeys> | undefined;
            itemTitle?: SelectItemKey;
            itemValue?: SelectItemKey;
            itemChildren?: NonNullable<SelectItemKey> | undefined;
            itemProps?: SelectItemKey;
            clearable?: boolean | undefined;
            persistentClear?: boolean | undefined;
            singleLine?: boolean | undefined;
            persistentPlaceholder?: boolean | undefined;
            persistentCounter?: boolean | undefined;
            chips?: boolean | undefined;
            closableChips?: boolean | undefined;
            closeText?: string | undefined;
            openText?: string | undefined;
            hideNoData?: boolean | undefined;
            hideSelected?: boolean | undefined;
            menuIcon?: IconValue | undefined;
            openOnClear?: boolean | undefined;
            search?: string | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            class?: any;
            placeholder?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            counter?: string | number | boolean | undefined;
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
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            bgColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            prependInnerIcon?: IconValue | undefined;
            'onClick:clear'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:appendInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prependInner'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((focused: boolean) => any)) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            baseColor?: string | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            menuProps?: {
                location?: Anchor | undefined;
                origin?: "auto" | Anchor | "overlap" | undefined;
                transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component | undefined;
                })> | {
                    component: vue.Component;
                } | undefined;
                zIndex?: string | number | undefined;
                style?: vue.StyleValue | undefined;
                eager?: boolean | undefined;
                disabled?: boolean | undefined;
                modelValue?: boolean | undefined;
                locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)> | undefined;
                scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
                closeDelay?: NonNullable<string | number> | undefined;
                openDelay?: NonNullable<string | number> | undefined;
                activatorProps?: Record<string, any> | undefined;
                openOnClick?: boolean | undefined;
                openOnHover?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                closeOnContentClick?: boolean | undefined;
                closeOnBack?: boolean | undefined;
                contained?: boolean | undefined;
                noClickAnimation?: boolean | undefined;
                persistent?: boolean | undefined;
                scrim?: NonNullable<string | boolean> | undefined;
                offset?: string | number | number[] | undefined;
                key?: string | number | symbol | undefined;
                id?: string | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                class?: any;
                $children?: vue.VNodeChild | {
                    default?: ((arg: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                } | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild);
                ref?: vue.VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                theme?: string | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                } | undefined;
                contentClass?: any;
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
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                activator?: string | Element | vue.ComponentPublicInstance | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                contentProps?: any;
                attach?: string | boolean | Element | undefined;
            } | undefined;
            itemColor?: string | undefined;
            "onUpdate:menu"?: ((val: boolean) => any) | undefined;
            autoSelectFirst?: boolean | "exact" | undefined;
            "onUpdate:search"?: ((val: any) => any) | undefined;
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
            item?: ((arg: {
                item: ListItem<unknown>;
                index: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            chip?: ((arg: {
                item: ListItem<unknown>;
                index: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            selection?: ((arg: {
                item: ListItem<unknown>;
                index: number;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'prepend-item'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'append-item'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'no-data'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:focused", focused: boolean) => void) & ((event: "update:menu", val: boolean) => void) & ((event: "update:search", val: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            menu: boolean;
            style: vue.StyleValue;
            role: string;
            autofocus: boolean;
            eager: boolean;
            disabled: boolean;
            readonly: boolean | null;
            noDataText: string;
            messages: string | readonly string[];
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            valueComparator: typeof deepEqual;
            clearIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: NonNullable<FilterKeys>;
            itemTitle: SelectItemKey;
            itemValue: SelectItemKey;
            itemChildren: NonNullable<SelectItemKey>;
            itemProps: SelectItemKey;
            clearable: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            chips: boolean;
            closableChips: boolean;
            closeText: string;
            openText: string;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: IconValue;
            openOnClear: boolean;
        } & {
            search?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            class?: any;
            placeholder?: string | undefined;
            theme?: string | undefined;
            counter?: string | number | boolean | undefined;
            rounded?: string | number | boolean | undefined;
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
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            baseColor?: string | undefined;
            customFilter?: FilterFunction | undefined;
            customKeyFilter?: FilterKeyFunctions | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            menuProps?: {
                location?: Anchor | undefined;
                origin?: "auto" | Anchor | "overlap" | undefined;
                transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component | undefined;
                })> | {
                    component: vue.Component;
                } | undefined;
                zIndex?: string | number | undefined;
                style?: vue.StyleValue | undefined;
                eager?: boolean | undefined;
                disabled?: boolean | undefined;
                modelValue?: boolean | undefined;
                locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)> | undefined;
                scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
                closeDelay?: NonNullable<string | number> | undefined;
                openDelay?: NonNullable<string | number> | undefined;
                activatorProps?: Record<string, any> | undefined;
                openOnClick?: boolean | undefined;
                openOnHover?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                closeOnContentClick?: boolean | undefined;
                closeOnBack?: boolean | undefined;
                contained?: boolean | undefined;
                noClickAnimation?: boolean | undefined;
                persistent?: boolean | undefined;
                scrim?: NonNullable<string | boolean> | undefined;
                offset?: string | number | number[] | undefined;
                key?: string | number | symbol | undefined;
                id?: string | undefined;
                height?: string | number | undefined;
                width?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                class?: any;
                $children?: vue.VNodeChild | {
                    default?: ((arg: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                } | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild);
                ref?: vue.VNodeRef | undefined;
                ref_for?: boolean | undefined;
                ref_key?: string | undefined;
                theme?: string | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                } | undefined;
                contentClass?: any;
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
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                activator?: string | Element | vue.ComponentPublicInstance | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
                contentProps?: any;
                attach?: string | boolean | Element | undefined;
            } | undefined;
            itemColor?: string | undefined;
            autoSelectFirst?: boolean | "exact" | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:menu"?: ((val: boolean) => any) | undefined;
            "onUpdate:search"?: ((val: any) => any) | undefined;
        }, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => boolean;
            'update:search': (val: any) => true;
            'update:modelValue': (val: any) => boolean;
            'update:menu': (val: boolean) => true;
        }, "multiple" | "$children" | "items" | "v-slots" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "returnObject" | "v-slot:item" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, string, {
            flat: boolean;
            reverse: boolean;
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })>;
            menu: boolean;
            style: vue.StyleValue;
            role: string;
            autofocus: boolean;
            eager: boolean;
            disabled: boolean;
            readonly: boolean | null;
            noDataText: string;
            messages: string | readonly string[];
            rounded: string | number | boolean;
            density: Density;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            valueComparator: typeof deepEqual;
            clearIcon: IconValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            persistentHint: boolean;
            filterMode: FilterMode;
            noFilter: boolean;
            filterKeys: NonNullable<FilterKeys>;
            itemTitle: SelectItemKey;
            itemValue: SelectItemKey;
            itemChildren: NonNullable<SelectItemKey>;
            itemProps: SelectItemKey;
            clearable: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            chips: boolean;
            closableChips: boolean;
            closeText: string;
            openText: string;
            hideNoData: boolean;
            hideSelected: boolean;
            menuIcon: IconValue;
            openOnClear: boolean;
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
            item: (arg: {
                item: ListItem<unknown>;
                index: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            chip: (arg: {
                item: ListItem<unknown>;
                index: number;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            selection: (arg: {
                item: ListItem<unknown>;
                index: number;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'prepend-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'append-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        menu: boolean;
        style: vue.StyleValue;
        role: string;
        autofocus: boolean;
        eager: boolean;
        disabled: boolean;
        readonly: boolean | null;
        noDataText: string;
        messages: string | readonly string[];
        density: Density;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: NonNullable<SelectItemKey>;
        itemProps: SelectItemKey;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
    } & {
        search?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        placeholder?: string | undefined;
        theme?: string | undefined;
        counter?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
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
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        baseColor?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        menuProps?: {
            location?: Anchor | undefined;
            origin?: "auto" | Anchor | "overlap" | undefined;
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            } | undefined;
            zIndex?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)> | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            closeDelay?: NonNullable<string | number> | undefined;
            openDelay?: NonNullable<string | number> | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: NonNullable<string | boolean> | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: any;
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
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((val: boolean) => any) | undefined;
        "onUpdate:search"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<any> & {} & vue.ComponentCustomProperties & {};
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
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    menu: boolean;
    style: vue.StyleValue;
    role: string;
    autofocus: boolean;
    eager: boolean;
    disabled: boolean;
    readonly: boolean | null;
    noDataText: string;
    messages: string | readonly string[];
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    valueComparator: typeof deepEqual;
    clearIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: NonNullable<SelectItemKey>;
    itemProps: SelectItemKey;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: IconValue;
    openOnClear: boolean;
} & {
    search?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    class?: any;
    placeholder?: string | undefined;
    theme?: string | undefined;
    counter?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
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
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    baseColor?: string | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
    menuProps?: {
        location?: Anchor | undefined;
        origin?: "auto" | Anchor | "overlap" | undefined;
        transition?: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        } | undefined;
        zIndex?: string | number | undefined;
        style?: vue.StyleValue | undefined;
        eager?: boolean | undefined;
        disabled?: boolean | undefined;
        modelValue?: boolean | undefined;
        locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)> | undefined;
        scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
        closeDelay?: NonNullable<string | number> | undefined;
        openDelay?: NonNullable<string | number> | undefined;
        activatorProps?: Record<string, any> | undefined;
        openOnClick?: boolean | undefined;
        openOnHover?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        closeOnContentClick?: boolean | undefined;
        closeOnBack?: boolean | undefined;
        contained?: boolean | undefined;
        noClickAnimation?: boolean | undefined;
        persistent?: boolean | undefined;
        scrim?: NonNullable<string | boolean> | undefined;
        offset?: string | number | number[] | undefined;
        key?: string | number | symbol | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        ref?: vue.VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        theme?: string | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
        contentClass?: any;
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
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        activator?: string | Element | vue.ComponentPublicInstance | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } | undefined;
    itemColor?: string | undefined;
    autoSelectFirst?: boolean | "exact" | undefined;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:menu"?: ((val: boolean) => any) | undefined;
    "onUpdate:search"?: ((val: any) => any) | undefined;
}, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:focused': (focused: boolean) => boolean;
    'update:search': (val: any) => true;
    'update:modelValue': (val: any) => boolean;
    'update:menu': (val: boolean) => true;
}, "multiple" | "$children" | "items" | "v-slots" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "returnObject" | "v-slot:item" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, string, {
    flat: boolean;
    reverse: boolean;
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    menu: boolean;
    style: vue.StyleValue;
    role: string;
    autofocus: boolean;
    eager: boolean;
    disabled: boolean;
    readonly: boolean | null;
    noDataText: string;
    messages: string | readonly string[];
    rounded: string | number | boolean;
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    valueComparator: typeof deepEqual;
    clearIcon: IconValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    persistentHint: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: NonNullable<SelectItemKey>;
    itemProps: SelectItemKey;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: IconValue;
    openOnClear: boolean;
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
    item: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    chip: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    selection: (arg: {
        item: ListItem<unknown>;
        index: number;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'prepend-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'append-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1 extends readonly any[], Item = T_1 extends readonly (infer U)[] ? U : never, ReturnObject extends boolean = false, Multiple extends boolean = false, V extends Value<Item, ReturnObject, Multiple> = Value<Item, ReturnObject, Multiple>>(props: {
    items?: T_1 | undefined;
    returnObject?: ReturnObject | undefined;
    multiple?: Multiple | undefined;
    modelValue?: V | null | undefined;
    'onUpdate:modelValue'?: ((val: V) => void) | undefined;
}, slots: Omit<VInputSlots & VFieldSlots, "default"> & {
    item: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    chip: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    selection: {
        item: ListItem<Item>;
        index: number;
    };
    'prepend-item': never;
    'append-item': never;
    'no-data': never;
}) => GenericProps<{
    items?: T_1 | undefined;
    returnObject?: ReturnObject | undefined;
    multiple?: Multiple | undefined;
    modelValue?: V | null | undefined;
    'onUpdate:modelValue'?: ((val: V) => void) | undefined;
}, Omit<VInputSlots & VFieldSlots, "default"> & {
    item: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    chip: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    selection: {
        item: ListItem<Item>;
        index: number;
    };
    'prepend-item': never;
    'append-item': never;
    'no-data': never;
}>) & FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    flat: BooleanConstructor;
    reverse: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    active: BooleanConstructor;
    name: StringConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    prefix: StringConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    autofocus: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    class: PropType<any>;
    placeholder: StringConstructor;
    theme: StringConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    bgColor: StringConstructor;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<IconValue>;
    'onClick:clear': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    baseColor: StringConstructor;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<NonNullable<SelectItemKey>>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<{
            location?: Anchor | undefined;
            origin?: "auto" | Anchor | "overlap" | undefined;
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            } | undefined;
            zIndex?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)> | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            closeDelay?: NonNullable<string | number> | undefined;
            openDelay?: NonNullable<string | number> | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: NonNullable<string | boolean> | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: any;
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
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        }>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<FilterFunction>;
    customKeyFilter: PropType<FilterKeyFunctions>;
    filterKeys: {
        type: PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    search: StringConstructor;
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    flat: BooleanConstructor;
    reverse: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    active: BooleanConstructor;
    name: StringConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    prefix: StringConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    autofocus: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    class: PropType<any>;
    placeholder: StringConstructor;
    theme: StringConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    bgColor: StringConstructor;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<IconValue>;
    'onClick:clear': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:appendInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:prependInner': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    baseColor: StringConstructor;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<NonNullable<SelectItemKey>>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<{
            location?: Anchor | undefined;
            origin?: "auto" | Anchor | "overlap" | undefined;
            transition?: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            } | undefined;
            zIndex?: string | number | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            modelValue?: boolean | undefined;
            locationStrategy?: NonNullable<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)> | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            closeDelay?: NonNullable<string | number> | undefined;
            openDelay?: NonNullable<string | number> | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: NonNullable<string | boolean> | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: any;
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
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        }>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<FilterFunction>;
    customKeyFilter: PropType<FilterKeyFunctions>;
    filterKeys: {
        type: PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    search: StringConstructor;
}>>;
type VAutocomplete = InstanceType<typeof VAutocomplete>;

export { VAutocomplete };
