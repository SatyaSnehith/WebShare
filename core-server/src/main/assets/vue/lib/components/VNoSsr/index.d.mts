import * as vue from "/js/vue.js";

declare const VNoSsr: vue.DefineComponent<{}, () => false | vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string>;
type VNoSsr = InstanceType<typeof VNoSsr>;

export { VNoSsr };
