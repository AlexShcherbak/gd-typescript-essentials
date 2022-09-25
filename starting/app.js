function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log("".concat(phrase, " ").concat(n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 7.1;
var printResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
