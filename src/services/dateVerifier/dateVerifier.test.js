import { dateOrder, leapYearVerifier, dateVerifier, yearVerifier, dayVerifier } from "./dateVerifier";

test('Is a correct date Format', () => {
    const value = dateVerifier("01/07/1998");
    expect(value).toBe(0); //True
});

test('Is not a correct date Format', () => {
    const value = dateVerifier("01-07-1998");
    expect(value).toBe(-1); //False
});

test('Is a year taken in charge', () => {
    const value = yearVerifier("2022");
    expect(value).toBeTruthy();
});

test('Is a year not taken in charge', () => {
    const value = yearVerifier("3650");
    expect(value).toBeFalsy();
});

test('Is a leap year', () => {
    const value = leapYearVerifier("2000");
    expect(value).toBeTruthy();
});

test('Is not a leap year', () => {
    const value = leapYearVerifier("2001");
    expect(value).toBeFalsy();
});

test('Is an existing day', () => {
    const value = dayVerifier("31", "01", false);
    expect(value).toBeTruthy();
});

test('Is not an existing day', () => {
    const value = dayVerifier("31", "02", false);
    expect(value).toBeFalsy();
});

test('Is a leap year day', () => {
    const value = dayVerifier("29", "02", true);
    expect(value).toBeTruthy();
});

test('Is not a leap year day', () => {
    const value = dayVerifier("29", "02", false);
    expect(value).toBeFalsy();
});

test('StartDate is before EndDate', () => {
    const value = dateOrder("01/07/1998", "02/08/2002");
    expect(value).toBe(0); //True
});

test('StartDate is after EndDate', () => {
    const value = dateOrder("02/08/2002", "01/07/1998");
    expect(value).toBe(-1); //False
});
