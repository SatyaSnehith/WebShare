// Composables
import { useLocale } from "../../composables/locale.mjs"; // Utilities
import { inject, reactive, watch } from "/js/vue.js";
import { mergeDeep, propsFactory } from "../../util/index.mjs"; // Adapters
import { VuetifyDateAdapter } from "./adapters/vuetify.mjs"; // Types
export const DateAdapterSymbol = Symbol.for('vuetify:date-adapter');
export function createDate(options) {
  return mergeDeep({
    adapter: VuetifyDateAdapter,
    locale: {
      af: 'af-ZA',
      // ar: '', # not the same value for all variants
      bg: 'bg-BG',
      ca: 'ca-ES',
      ckb: '',
      cs: '',
      de: 'de-DE',
      el: 'el-GR',
      en: 'en-US',
      // es: '', # not the same value for all variants
      et: 'et-EE',
      fa: 'fa-IR',
      fi: 'fi-FI',
      // fr: '', #not the same value for all variants
      hr: 'hr-HR',
      hu: 'hu-HU',
      he: 'he-IL',
      id: 'id-ID',
      it: 'it-IT',
      ja: 'ja-JP',
      ko: 'ko-KR',
      lv: 'lv-LV',
      lt: 'lt-LT',
      nl: 'nl-NL',
      no: 'no-NO',
      pl: 'pl-PL',
      pt: 'pt-PT',
      ro: 'ro-RO',
      ru: 'ru-RU',
      sk: 'sk-SK',
      sl: 'sl-SI',
      srCyrl: 'sr-SP',
      srLatn: 'sr-SP',
      sv: 'sv-SE',
      th: 'th-TH',
      tr: 'tr-TR',
      az: 'az-AZ',
      uk: 'uk-UA',
      vi: 'vi-VN',
      zhHans: 'zh-CN',
      zhHant: 'zh-TW'
    }
  }, options);
}

// TODO: revisit this after it starts being implemented
export const makeDateProps = propsFactory({
  displayDate: {
    type: Object,
    default: new Date()
  },
  hideAdjacentMonths: Boolean,
  modelValue: {
    type: null,
    default: () => []
  }
}, 'date');
export function useDate() {
  const date = inject(DateAdapterSymbol);
  const locale = useLocale();
  if (!date) throw new Error('[Vuetify] Could not find injected date');
  const instance = reactive(typeof date.adapter === 'function'
  // eslint-disable-next-line new-cap
  ? new date.adapter({
    locale: date.locale?.[locale.current.value] ?? locale.current.value
  }) : date.adapter);
  watch(locale.current, value => {
    const newLocale = date.locale ? date.locale[value] : value;
    instance.locale = newLocale ?? instance.locale;
  });
  return instance;
}
export function toIso(adapter, value) {
  const date = adapter.toJsDate(value);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
function getMondayOfFirstWeekOfYear(year) {
  return new Date(year, 0, 1);
}

// https://stackoverflow.com/questions/274861/how-do-i-calculate-the-week-number-given-a-date/275024#275024
export function getWeek(adapter, value) {
  const date = adapter.toJsDate(value);
  let year = date.getFullYear();
  let d1w1 = getMondayOfFirstWeekOfYear(year);
  if (date < d1w1) {
    year = year - 1;
    d1w1 = getMondayOfFirstWeekOfYear(year);
  } else {
    const tv = getMondayOfFirstWeekOfYear(year + 1);
    if (date >= tv) {
      year = year + 1;
      d1w1 = tv;
    }
  }
  const diffTime = Math.abs(date.getTime() - d1w1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7) + 1;
}
//# sourceMappingURL=date.mjs.map