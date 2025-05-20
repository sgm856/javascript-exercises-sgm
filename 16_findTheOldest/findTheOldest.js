const findTheOldest = function (people) {
    let oldest = null;
    let highestAge = 0;
    for (person of people) {
        let calculatedAge = 0;
        if ('yearOfDeath' in person) {
            calculatedAge = calculateAge(person.yearOfBirth, person.yearOfDeath);
        } else {
            currentDate = new Date();
            calculatedAge = calculateAge(person.yearOfBirth, currentDate.getFullYear());
        }

        if (calculatedAge > highestAge) {
            oldest = person;
            highestAge = calculatedAge;
        }
    }
    return oldest;
};

const calculateAge = function (birthYear, finalYear) {
    if (birthYear < 0 && finalYear < 0) {
        return Math.abs(finalYear) - Math.abs(birthYear);
    } else if (birthYear < 0) {
        return finalYear - Math.abs(birthYear);
    }
    return finalYear - birthYear;
};
debugger;
findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]);

// Do not edit below this line
module.exports = findTheOldest;
