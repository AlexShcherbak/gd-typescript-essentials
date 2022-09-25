function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(number: number): void {
  console.log("Result: " + number);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

const num1 = 5;
const num2 = 7.1;

let combineValues: (a: number, b: number) => number;
combineValues = add;

printResult(add(num1, num2));

console.log(combineValues(5, 12));

addAndHandle(10, 10, (res) => {
  console.log(res);
});
