"use strict";
// pipe (|) k sth ek se zyada value ko assign krna ye kehlata hai union type
function combine(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
console.log(combine(10, 23));
console.log(combine(33, 27));
console.log(combine("Sulaiman", "Hussain"));
