function yearsToDays(year) {

    const daysInYear = 365;

    if (isNaN(year)) {

        return 0;
    }

    if (year < 0) {

        return 0;
    }

    return daysInYear * year;
}

module.exports = yearsToDays