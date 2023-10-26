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

declare class VuetifyDateAdapter implements DateAdapter<Date> {
    locale: string;
    constructor(options: {
        locale: string;
    });
    date(value?: any): Date | null;
    toJsDate(date: Date): Date;
    toISO(date: Date): string;
    parseISO(date: string): Date;
    addDays(date: Date, amount: number): Date;
    addMonths(date: Date, amount: number): Date;
    getWeekArray(date: Date): Date[][];
    startOfMonth(date: Date): Date;
    endOfMonth(date: Date): Date;
    format(date: Date, formatString: string): string;
    isEqual(date: Date, comparing: Date): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: Date, range: [Date, Date]): boolean;
    isAfter(date: Date, comparing: Date): boolean;
    isBefore(date: Date, comparing: Date): boolean;
    isSameDay(date: Date, comparing: Date): boolean;
    isSameMonth(date: Date, comparing: Date): boolean;
    setYear(date: Date, year: number): Date;
    getDiff(date: Date, comparing: Date | string, unit?: string): number;
    getWeekdays(): string[];
    getYear(date: Date): number;
    getMonth(date: Date): number;
    startOfDay(date: Date): Date;
    endOfDay(date: Date): Date;
    startOfYear(date: Date): Date;
    endOfYear(date: Date): Date;
}

export { VuetifyDateAdapter };
