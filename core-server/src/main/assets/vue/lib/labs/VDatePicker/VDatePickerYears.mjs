import { createVNode as _createVNode } from "/js/vue.js";
// Styles
import "./VDatePickerYears.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs"; // Composables
import { useDate } from "../date/index.mjs"; // Utilities
import { computed, onMounted, ref } from "/js/vue.js";
import { convertToUnit, createRange, genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVDatePickerYearsProps = propsFactory({
  color: String,
  height: [String, Number],
  displayDate: null,
  min: [Number, String, Date],
  max: [Number, String, Date]
}, 'VDatePickerYears');
export const VDatePickerYears = genericComponent()({
  name: 'VDatePickerYears',
  props: makeVDatePickerYearsProps(),
  emits: {
    'update:displayDate': date => true,
    'click:mode': () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const adapter = useDate();
    const displayYear = computed(() => adapter.getYear(props.displayDate ?? new Date()));
    const years = computed(() => {
      const min = props.min ? adapter.date(props.min).getFullYear() : displayYear.value - 100;
      const max = props.max ? adapter.date(props.max).getFullYear() : displayYear.value + 50;
      return createRange(max - min + 1, min);
    });
    const yearRef = ref();
    onMounted(() => {
      yearRef.value?.$el.scrollIntoView({
        block: 'center'
      });
    });
    useRender(() => _createVNode("div", {
      "class": "v-date-picker-years",
      "style": {
        height: convertToUnit(props.height)
      }
    }, [_createVNode("div", {
      "class": "v-date-picker-years__content"
    }, [years.value.map(year => {
      function onClick() {
        emit('update:displayDate', adapter.setYear(props.displayDate, year));
        emit('click:mode');
      }
      return _createVNode(VBtn, {
        "ref": year === displayYear.value ? yearRef : undefined,
        "active": year === displayYear.value,
        "color": year === displayYear.value ? props.color : undefined,
        "rounded": "xl",
        "text": String(year),
        "variant": year === displayYear.value ? 'flat' : 'text',
        "onClick": onClick
      }, null);
    })])]));
    return {};
  }
});
//# sourceMappingURL=VDatePickerYears.mjs.map