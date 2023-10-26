import { PropType } from "/js/vue.js";

interface DateAdapter<T> {
    date(value?: any): T | null;
    format(date: T, formatString: string): string;
    toJsDate(value: T): Date;
    parseISO(date: string): T;
    toISO(date: T): string;
    startOfDay(date: T): T;
    endOfDay(date: T): T;
    startOfMonth(date: T): T;
    endOfMonth(date: T): T;
    startOfYear(date: T): T;
    endOfYear(date: T): T;
    isBefore(date: T, comparing: T): boolean;
    isAfter(date: T, comparing: T): boolean;
    isEqual(date: T, comparing: T): boolean;
    isSameDay(date: T, comparing: T): boolean;
    isSameMonth(date: T, comparing: T): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: T, range: [T, T]): boolean;
    addDays(date: T, amount: number): T;
    addMonths(date: T, amount: number): T;
    getYear(date: T): number;
    setYear(date: T, year: number): T;
    getDiff(date: T, comparing: T | string, unit?: string): number;
    getWeekArray(date: T): T[][];
    getWeekdays(): string[];
    getMonth(date: T): number;
}

interface DateInstance<T> extends DateAdapter<T> {
    locale?: any;
}
type InternalDateOptions<T = any> = {
    adapter: (new (options: {
        locale: any;
    }) => DateInstance<T>) | DateInstance<T>;
    formats?: Record<string, string>;
    locale: Record<string, any>;
};
type DateOptions<T = any> = Partial<InternalDateOptions<T>>;
declare const makeDateProps: <Defaults extends {
    displayDate?: unknown;
    hideAdjacentMonths?: unknown;
    modelValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    displayDate: unknown extends Defaults["displayDate"] ? {
        type: PropType<Date>;
        default: Date;
    } : Omit<{
        type: PropType<Date>;
        default: Date;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["displayDate"] ? Date : Date | Defaults["displayDate"]>;
        default: unknown extends Defaults["displayDate"] ? Date : Date | Defaults["displayDate"];
    };
    hideAdjacentMonths: unknown extends Defaults["hideAdjacentMonths"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideAdjacentMonths"] ? boolean : boolean | Defaults["hideAdjacentMonths"]>;
        default: unknown extends Defaults["hideAdjacentMonths"] ? boolean : boolean | Defaults["hideAdjacentMonths"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly any[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
};
declare function useDate(): {
    locale?: any;
    date: (value?: any) => any;
    format: (date: any, formatString: string) => string;
    toJsDate: (value: any) => Date;
    parseISO: (date: string) => any;
    toISO: (date: any) => string;
    startOfDay: (date: any) => any;
    endOfDay: (date: any) => any;
    startOfMonth: (date: any) => any;
    endOfMonth: (date: any) => any;
    startOfYear: (date: any) => any;
    endOfYear: (date: any) => any;
    isBefore: (date: any, comparing: any) => boolean;
    isAfter: (date: any, comparing: any) => boolean;
    isEqual: (date: any, comparing: any) => boolean;
    isSameDay: (date: any, comparing: any) => boolean;
    isSameMonth: (date: any, comparing: any) => boolean;
    isValid: (date: any) => boolean;
    isWithinRange: (date: any, range: [any, any]) => boolean;
    addDays: (date: any, amount: number) => any;
    addMonths: (date: any, amount: number) => any;
    getYear: (date: any) => number;
    setYear: (date: any, year: number) => any;
    getDiff: (date: any, comparing: any, unit?: string | undefined) => number;
    getWeekArray: (date: any) => any[][];
    getWeekdays: () => string[];
    getMonth: (date: any) => number;
};

export { DateAdapter, DateInstance, DateOptions, makeDateProps, useDate };
