export function yearVerifier(year) {
    if (year > 1900 && year < 3000) {
        return true;
    } else {
        console.error("Year should be between 1901 and 2999 included");
        return false;
    }
}

export function dayVerifier(day, month, leap) {
    var maxDayInMonth = 0;

    if (month > 7) {
        if (month % 2 === 0) {
            maxDayInMonth = 31;
        } else {
            maxDayInMonth = 30;
        }
    } else {
        if (month % 2 === 1) {
            maxDayInMonth = 31;
        } else {
            maxDayInMonth = 30;
        }
    }

    if (month == 2) {
        if (leap) {
            maxDayInMonth = 29;
        } else {
            maxDayInMonth = 28;
        }
    }

    if (day > maxDayInMonth || day < 0) {
        console.error("This date is not existing");
        return false;
    }
    return true;
}

export function dateVerifier(date) {
    if (date) {
        var splitedDate = date.split('/');
        var year = splitedDate[2];
        var month = splitedDate[1];
        var day = splitedDate[0];

        if (!yearVerifier(year)) { return -1; };

        var leap = leapYearVerifier(year);

        if (!dayVerifier(day, month, leap)) { return -1; };

        return 0;
    } else {
        console.error("Wrong Format");
        return -1;
    }
}

export function leapYearVerifier(year) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

export function dateOrder(startDate, endDate) {
    var splitedStartDate = startDate.split('/');
    var splitedEndDate = endDate.split('/');

    if (splitedStartDate[2] < splitedEndDate[2]) { return 0 }
    else if (splitedStartDate[2] === splitedEndDate[2]) {
        if (splitedStartDate[1] < splitedEndDate[1]) { return 0 }
        else if (splitedStartDate[1] === splitedEndDate[1]) {
            if (splitedStartDate[0] < splitedEndDate[0]) { return 0 }
        }
    }
    return -1;
}