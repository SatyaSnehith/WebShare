import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, PropType } from "/js/vue.js";

type HSV = {
    h: number;
    s: number;
    v: number;
    a?: number;
};

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type ColorPickerMode = {
    inputProps: Record<string, unknown>;
    inputs: {
        [key: string]: any;
        getValue: (color: any) => number | string;
        getColor: (color: any, v: string) => any;
    }[];
    from: (color: any) => HSV;
    to: (color: HSV) => any;
};
declare const modes: {
    rgb: {
        inputs: {
            [key: string]: any;
            getValue: (color: any) => number | string;
            getColor: (color: any, v: string) => any;
        }[];
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
    };
    rgba: ColorPickerMode;
    hsl: {
        inputs: {
            [key: string]: any;
            getValue: (color: any) => number | string;
            getColor: (color: any, v: string) => any;
        }[];
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
    };
    hsla: ColorPickerMode;
    hex: {
        inputs: {
            label: string;
            getValue: (c: string) => string;
            getColor: (c: string, v: string) => string;
        }[];
        inputProps: Record<string, unknown>;
        from: (color: any) => HSV;
        to: (color: HSV) => any;
    };
    hexa: ColorPickerMode;
};

declare const VColorPicker: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            width?: NonNullable<string | number> | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            mode?: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa" | undefined;
            rounded?: string | number | boolean | undefined;
            dotSize?: string | number | undefined;
            modes?: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[] | undefined;
            canvasHeight?: string | number | undefined;
            hideCanvas?: boolean | undefined;
            hideSliders?: boolean | undefined;
            hideInputs?: boolean | undefined;
            showSwatches?: boolean | undefined;
            swatchesMaxHeight?: string | number | undefined;
            key?: string | number | symbol | undefined;
            readonly border?: string | number | boolean | undefined;
            readonly color?: string | undefined;
            readonly position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            class?: any;
            readonly elevation?: string | number | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            readonly theme?: string | undefined;
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
            readonly modelValue?: string | Record<string, unknown> | null | undefined;
            "onUpdate:modelValue"?: ((color: any) => any) | undefined;
            "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
            readonly swatches?: readonly (readonly (string | number | {
                readonly r: number;
                readonly g: number;
                readonly b: number;
                readonly a?: number | undefined;
            } | {
                readonly h: number;
                readonly s: number;
                readonly v: number;
                readonly a?: number | undefined;
            } | {
                readonly h: number;
                readonly s: number;
                readonly l: number;
                readonly a?: number | undefined;
            })[])[] | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot<any> | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", color: any) => void) & ((event: "update:mode", mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
            width: {
                type: PropType<NonNullable<string | number>>;
                default: NonNullable<string | number>;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            color: StringConstructor;
            position: {
                type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
                validator: (v: any) => boolean;
            };
            style: {
                type: PropType<vue.StyleValue>;
                default: null;
            };
            class: PropType<any>;
            tag: {
                type: StringConstructor;
                default: string;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            theme: StringConstructor;
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            canvasHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            disabled: BooleanConstructor;
            dotSize: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            hideCanvas: BooleanConstructor;
            hideSliders: BooleanConstructor;
            hideInputs: BooleanConstructor;
            mode: {
                type: PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
                default: string;
                validator: (v: string) => boolean;
            };
            modes: {
                type: PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
                default: () => string[];
                validator: (v: any) => boolean;
            };
            showSwatches: BooleanConstructor;
            swatches: PropType<readonly (readonly (string | number | {
                readonly r: number;
                readonly g: number;
                readonly b: number;
                readonly a?: number | undefined;
            } | {
                readonly h: number;
                readonly s: number;
                readonly v: number;
                readonly a?: number | undefined;
            } | {
                readonly h: number;
                readonly s: number;
                readonly l: number;
                readonly a?: number | undefined;
            })[])[]>;
            swatchesMaxHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            modelValue: {
                type: PropType<string | Record<string, unknown> | null | undefined>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((color: any) => any) | undefined;
            "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (color: any) => true;
            'update:mode': (mode: keyof typeof modes) => true;
        }, string, {
            width: NonNullable<string | number>;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa";
            rounded: string | number | boolean;
            dotSize: string | number;
            modes: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[];
            canvasHeight: string | number;
            hideCanvas: boolean;
            hideSliders: boolean;
            hideInputs: boolean;
            showSwatches: boolean;
            swatchesMaxHeight: string | number;
        }, {}, string, {}> & {
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
    } & Readonly<vue.ExtractPropTypes<{
        width: {
            type: PropType<NonNullable<string | number>>;
            default: NonNullable<string | number>;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        color: StringConstructor;
        position: {
            type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
            validator: (v: any) => boolean;
        };
        style: {
            type: PropType<vue.StyleValue>;
            default: null;
        };
        class: PropType<any>;
        tag: {
            type: StringConstructor;
            default: string;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        theme: StringConstructor;
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        canvasHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        hideCanvas: BooleanConstructor;
        hideSliders: BooleanConstructor;
        hideInputs: BooleanConstructor;
        mode: {
            type: PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
        showSwatches: BooleanConstructor;
        swatches: PropType<readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[]>;
        swatchesMaxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        modelValue: {
            type: PropType<string | Record<string, unknown> | null | undefined>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<{
    width: {
        type: PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    class: PropType<any>;
    tag: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}>> & {
    "onUpdate:modelValue"?: ((color: any) => any) | undefined;
    "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (color: any) => true;
    'update:mode': (mode: keyof typeof modes) => true;
}, string, {
    width: NonNullable<string | number>;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa";
    rounded: string | number | boolean;
    dotSize: string | number;
    modes: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[];
    canvasHeight: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
}, {}, string, {}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    width: {
        type: PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    class: PropType<any>;
    tag: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}, vue.ExtractPropTypes<{
    width: {
        type: PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    class: PropType<any>;
    tag: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
}>>;
type VColorPicker = InstanceType<typeof VColorPicker>;

export { VColorPicker };
