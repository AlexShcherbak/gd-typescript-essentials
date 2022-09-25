function add(n1, n2) {
    return n1 + n2;
}
function printResult(number) {
    console.log("Result: " + number);
}
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
var num1 = 5;
var num2 = 7.1;
var combineValues;
combineValues = add;
printResult(add(num1, num2));
console.log(combineValues(5, 12));
addAndHandle(10, 10, function (res) {
    console.log(res);
});
