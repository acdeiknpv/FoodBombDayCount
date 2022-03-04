import { dayNumberInYear, dateCounter } from "./dateCounter";

test('first day of the year', () => {
    const value = dayNumberInYear("01", "01", "1901");
    expect(value).toBe(1);
});

test('last day of non leap year', () => {
    const value = dayNumberInYear("31", "12", "2001");
    expect(value).toBe(365);
});

test('last day of leap year', () => {
    const value = dayNumberInYear("31", "12", "2000");
    expect(value).toBe(366);
});

test('0 day difference', () => {
    const value = dateCounter("01/01/1901", "02/01/1901");
    expect(value).toBe(0);
});

test('1 non leap year difference', () => {
    const value = dateCounter("01/01/1901", "01/01/1902");
    expect(value).toBe(364);
});

test('1 leap year difference', () => {
    const value = dateCounter("01/01/2000", "01/01/2001");
    expect(value).toBe(365);
});

test('same day', () => {
    const value = dateCounter("01/01/1901", "01/01/1901");
    expect(value).toBe(-1);
});