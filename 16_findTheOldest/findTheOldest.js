const findTheOldest = function (people) {
    if (people.length === 0) return null;

    let highestAge = 0;
    return people.reduce((oldestPerson, currentPerson) => {
        const currentAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (currentAge > highestAge) {
            highestAge = currentAge;
            return currentPerson;
        }
        return oldestPerson;
    }, people[0]);
}

const calculateAge = function (birthYear, finalYear) {
    let currentDate = new Date();
    let expirationYear = finalYear ?? currentDate.getFullYear();
    //Handle ancient beings
    if (birthYear < 0 && expirationYear < 0) {
        return Math.abs(expirationYear) - Math.abs(birthYear);
    } else if (birthYear < 0) {
        return expirationYear - Math.abs(birthYear);
    }
    //They're not ancient, calculate age
    return expirationYear - birthYear;
};

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
