"use strict";
// Rest Parameters
function finalMarks(english = 78, ...totalMarks) {
    console.log(english);
    console.log(totalMarks);
}
finalMarks(78, 65, 45, 90);
function todaysMenu(Briyani = 2, ...desert) {
    console.log(Briyani);
    console.log(desert);
}
todaysMenu(2, 4, 8, 3);
function calculateSum(num = 24, num2 = 55, ...num6) {
    console.log(num);
    console.log(num6);
}
calculateSum(24, 55, 1, 46, 0, 3);
function todaysWeather(hot = 1, cold = 12) {
    console.log(hot);
    console.log(cold);
}
todaysWeather(1, 12);
