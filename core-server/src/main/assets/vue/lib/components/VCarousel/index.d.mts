import * as vue from "/js/vue.js";
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType, ComponentInternalInstance, Ref, ComputedRef } from "/js/vue.js";

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

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

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

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

declare const VCarousel: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            interval?: string | number | undefined;
            height?: string | number | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            tag?: string | undefined;
            mandatory?: NonNullable<boolean | "force"> | undefined;
            touch?: boolean | TouchHandlers | undefined;
            selectedClass?: string | undefined;
            continuous?: boolean | undefined;
            nextIcon?: IconValue | undefined;
            prevIcon?: IconValue | undefined;
            showArrows?: NonNullable<string | boolean> | undefined;
            cycle?: boolean | undefined;
            delimiterIcon?: IconValue | undefined;
            hideDelimiters?: boolean | undefined;
            hideDelimiterBackground?: boolean | undefined;
            progress?: string | boolean | undefined;
            key?: string | number | symbol | undefined;
            color?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | {
                default?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: Record<string, any>;
                    item: {
                        id: number;
                        value: unknown;
                        disabled: boolean | undefined;
                    };
                }) => vue.VNodeChild) | undefined;
            };
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
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: Record<string, any>;
                    item: {
                        id: number;
                        value: unknown;
                        disabled: boolean | undefined;
                    };
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
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:prev"?: false | ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            verticalDelimiters?: boolean | "left" | "right" | undefined;
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
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", val: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
        } & {
            progress?: string | boolean | undefined;
            color?: string | undefined;
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            modelValue?: any;
            verticalDelimiters?: boolean | "left" | "right" | undefined;
        } & {
            $children?: vue.VNodeChild | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | {
                default?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: Record<string, any>;
                    item: {
                        id: number;
                        value: unknown;
                        disabled: boolean | undefined;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                additional?: false | ((arg: {
                    group: GroupProvide;
                }) => vue.VNodeChild) | undefined;
                prev?: false | ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                next?: false | ((arg: {
                    props: {
                        icon: IconValue;
                        class: string;
                        onClick: () => void;
                        ariaLabel: string;
                    };
                }) => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: Record<string, any>;
                    item: {
                        id: number;
                        value: unknown;
                        disabled: boolean | undefined;
                    };
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
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:next"?: false | ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (val: any) => boolean;
        }, string, {
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
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
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
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
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        selectedClass: string;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: NonNullable<string | boolean>;
        cycle: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    } & {
        progress?: string | boolean | undefined;
        color?: string | undefined;
        class?: any;
        touch?: boolean | TouchHandlers | undefined;
        theme?: string | undefined;
        modelValue?: any;
        verticalDelimiters?: boolean | "left" | "right" | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | {
            default?: ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            additional?: ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            prev?: ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            item?: ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            additional?: false | ((arg: {
                group: GroupProvide;
            }) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
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
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: Record<string, any>;
            item: {
                id: number;
                value: unknown;
                disabled: boolean | undefined;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: NonNullable<string | boolean>;
    cycle: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
} & {
    progress?: string | boolean | undefined;
    color?: string | undefined;
    class?: any;
    touch?: boolean | TouchHandlers | undefined;
    theme?: string | undefined;
    modelValue?: any;
    verticalDelimiters?: boolean | "left" | "right" | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: {
        group: GroupProvide;
    }) => vue.VNodeChild) | {
        default?: ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        additional?: ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        prev?: ((arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        item?: ((arg: {
            props: Record<string, any>;
            item: {
                id: number;
                value: unknown;
                disabled: boolean | undefined;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        additional?: false | ((arg: {
            group: GroupProvide;
        }) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                ariaLabel: string;
            };
        }) => vue.VNodeChild) | undefined;
        item?: false | ((arg: {
            props: Record<string, any>;
            item: {
                id: number;
                value: unknown;
                disabled: boolean | undefined;
            };
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
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        props: Record<string, any>;
        item: {
            id: number;
            value: unknown;
            disabled: boolean | undefined;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => boolean;
}, string, {
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: NonNullable<string | boolean>;
    cycle: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
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
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: Record<string, any>;
        item: {
            id: number;
            value: unknown;
            disabled: boolean | undefined;
        };
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
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
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
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
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
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
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
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
}>>;
type VCarousel = InstanceType<typeof VCarousel>;

interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}

declare const VCarouselItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            inline?: boolean | undefined;
            transition?: string | boolean | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            options?: IntersectionObserverInit | undefined;
            cover?: boolean | undefined;
            src?: string | srcObject | undefined;
            reverseTransition?: string | boolean | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            alt?: string | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
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
            placeholder?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            error?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            sources?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inline: boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            transition?: string | boolean | undefined;
            value?: any;
            class?: any;
            alt?: string | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            inline: boolean;
            transition: string | boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
            reverseTransition: string | boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        inline: boolean;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        aspectRatio?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        transition?: string | boolean | undefined;
        value?: any;
        class?: any;
        alt?: string | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        contentClass?: string | undefined;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            placeholder?: (() => vue.VNodeChild) | undefined;
            error?: (() => vue.VNodeChild) | undefined;
            sources?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            placeholder?: false | (() => vue.VNodeChild) | undefined;
            error?: false | (() => vue.VNodeChild) | undefined;
            sources?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inline: boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    aspectRatio?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    transition?: string | boolean | undefined;
    value?: any;
    class?: any;
    alt?: string | undefined;
    sizes?: string | undefined;
    srcset?: string | undefined;
    contentClass?: string | undefined;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        placeholder?: (() => vue.VNodeChild) | undefined;
        error?: (() => vue.VNodeChild) | undefined;
        sources?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        placeholder?: false | (() => vue.VNodeChild) | undefined;
        error?: false | (() => vue.VNodeChild) | undefined;
        sources?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    transition: string | boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: vue.PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: vue.PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
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
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: vue.PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: vue.PropType<string | srcObject>;
        default: string;
    };
    srcset: StringConstructor;
}>>;
type VCarouselItem = InstanceType<typeof VCarouselItem>;

export { VCarousel, VCarouselItem };
