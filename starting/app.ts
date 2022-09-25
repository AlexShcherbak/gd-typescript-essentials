type Combine = number | string;
type ResultDescription = 'as number' | 'as text'

function combine(n1: Combine, n2: Combine, resultType: ResultDescription) {
    let res;

    if (typeof n1 === "number" && typeof n2 === "number" || resultType === 'as number') {
        res = +n1 + +n2;
    } else {
        res = n1.toString() + n2.toString();
    }

    return res;  
}

console.log(combine(18, 31, 'as number'));

console.log(combine('18', '31', 'as number'));

console.log(combine('Max', 'Anna', 'as text'));