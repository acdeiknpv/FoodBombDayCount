import { leapYearVerifier } from "../dateVerifier/dateVerifier";

export function dayNumberInYear(day, month, year) {
    const dayPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var dayCount = 0;
    for (var i = 0; i < month - 1; i++) {
        dayCount += dayPerMonth[i];
    }
    dayCount += day - 1;
    if (leapYearVerifier(year) && month > 2) { dayCount += 1 }

    return ( dayCount + 1 );
}

function dayDifference(n1, n2, y1, y2) {
    var dayDiff = 0;
    if (leapYearVerifier(y1)) { dayDiff = 366 - n1; } else { dayDiff = 365 - n1; }

    y1++;

    while (y1 < y2) {
        if (leapYearVerifier(y1)) { dayDiff += 366; } else { dayDiff += 365; }
        y1 += 1;
    }

    dayDiff += n2;

    return ( dayDiff - 1);
}

export function dateCounter(startDate, endDate) {
    
    var splitedStartDate = startDate.split('/');
    var splitedEndDate = endDate.split('/');

    var d1 = splitedStartDate[0],
        m1 = splitedStartDate[1],
        y1 = splitedStartDate[2];

    var d2 = splitedEndDate[0],
        m2 = splitedEndDate[1],
        y2 = splitedEndDate[2]

    var n2 = dayNumberInYear(d2, m2, y2);
    var n1 = dayNumberInYear(d1, m1, y1);

    if (y1 === y2) {
        return (n2 - n1 - 1);
    } else {
        return (dayDifference(n1, n2, y1, y2));
    }
}