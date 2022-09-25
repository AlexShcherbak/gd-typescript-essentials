function combine(n1, n2, resultType) {
    var res;
    if (typeof n1 === "number" && typeof n2 === "number" || resultType === 'as number') {
        res = +n1 + +n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
console.log(combine(18, 31, 'as number'));
console.log(combine('18', '31', 'as number'));
console.log(combine('Max', 'Anna', 'as text'));
