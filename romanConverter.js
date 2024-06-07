var romanToInt = function (s) {

    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = i + 1 < len ? romanMap[s[i + 1]] : 0;

        if (currentVal < nextVal) {
            total -= currentVal;
        }
        else {
            total += currentVal;
        }
    }
    return total;
};


//example to test
const s = "MCMXCIV";
console.log(`Integer value of this roman of: ${s} is equal to: `, romanToInt(s));