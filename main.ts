// Rest Parameters
function finalMarks(english: number = 78, ...totalMarks: number[]) {
    console.log(english)
    console.log(totalMarks)
}
finalMarks(78, 65, 45, 90);

function todaysMenu(Briyani: number = 2, ...desert: number[]) {
    console.log(Briyani)
    console.log(desert)
}
todaysMenu(2, 4, 8, 3);

function calculateSum(num: number = 24, num2: number = 55, ...num6: number[]) {
    console.log(num)
    console.log(num6)
}
calculateSum(24, 55, 1, 46, 0, 3);

function todaysWeather(hot: number = 1, cold: number = 12){
    console.log(hot)
    console.log(cold)
}
todaysWeather(1, 12 );