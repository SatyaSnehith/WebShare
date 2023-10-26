import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, ComponentInternalInstance, Ref, ComputedRef, JSXComponent, PropType, nextTick } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<Readonly<number[]>>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}
interface GroupItemProvide {
    id: number;
    isSelected: Ref<boolean>;
    toggle: () => void;
    select: (value: boolean) => void;
    selectedClass: Ref<(string | undefined)[] | false>;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    group: GroupProvide;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    ariaLabel: string;
};
declare const VWindow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: boolean | "force" | undefined;
            touch?: boolean | TouchHandlers | undefined;
            selectedClass?: string | undefined;
            continuous?: boolean | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            key?: string | number | symbol | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: false | ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:additional"?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
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
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
            showArrows?: string | boolean | undefined;
            "v-slot:next"?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            additional?: ((arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prev?: ((arg: {
                props: ControlProps;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: {
                props: ControlProps;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", v: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean | "force";
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
        } & {
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            modelValue?: any;
            showArrows?: string | boolean | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: false | ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: ControlProps;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            "v-slot:additional"?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
        }, {
            group: GroupProvide;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (v: any) => boolean;
        }, string, {
            reverse: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean | "force";
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            additional: (arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prev: (arg: {
                props: ControlProps;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: {
                props: ControlProps;
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
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        selectedClass: string;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        touch?: boolean | TouchHandlers | undefined;
        theme?: string | undefined;
        modelValue?: any;
        showArrows?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            additional?: ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            prev?: ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            additional?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: ControlProps;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        "v-slot:additional"?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        group: GroupProvide;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean | "force";
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
} & {
    class?: any;
    touch?: boolean | TouchHandlers | undefined;
    theme?: string | undefined;
    modelValue?: any;
    showArrows?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        additional?: ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        prev?: ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
        next?: ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        group: GroupProvide;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        additional?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
        next?: false | ((arg: {
            props: ControlProps;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        group: GroupProvide;
    }) => vue.VNodeChild) | undefined;
    "v-slot:additional"?: false | ((arg: {
        group: GroupProvide;
    }) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: {
        props: ControlProps;
    }) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: ControlProps;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: any) => any) | undefined;
}, {
    group: GroupProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: any) => boolean;
}, string, {
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean | "force";
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    additional: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: ControlProps;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: ControlProps;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}>>;
type VWindow = InstanceType<typeof VWindow>;

declare const VWindowItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            transition?: string | boolean | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            reverseTransition?: string | boolean | undefined;
            key?: string | number | symbol | undefined;
            value?: any;
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
            selectedClass?: string | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
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
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
        } & {
            transition?: string | boolean | undefined;
            value?: any;
            class?: any;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
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
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {
            groupItem: GroupItemProvide;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => true;
        }, string, {
            transition: string | boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            reverseTransition: string | boolean;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
    } & {
        transition?: string | boolean | undefined;
        value?: any;
        class?: any;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
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
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        groupItem: GroupItemProvide;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
} & {
    transition?: string | boolean | undefined;
    value?: any;
    class?: any;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
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
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    groupItem: GroupItemProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    transition: string | boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>>;
type VWindowItem = InstanceType<typeof VWindowItem>;

export { VWindow, VWindowItem };
