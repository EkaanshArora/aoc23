import { input } from "./input";

const lines = input.split("\n");
let sum = 0;

for (const line in lines) {
  const first = lines[line]
    .split("")
    .find((e) => Number.isInteger(parseInt(e)));
  const last = lines[line]
    .split("")
    .findLast((e) => Number.isInteger(parseInt(e)));
  const num = parseInt(first!) * 10 + parseInt(last!);
  sum = sum + num;
}

console.log(sum);
