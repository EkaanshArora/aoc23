import { input } from "./input";

const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const lines = input.split("\n");
let sum = 0;

for (const line in lines) {
  const firstDigit = lines[line]
    .split("")
    .find((e) => Number.isInteger(parseInt(e)));
  let firstDigitIndex = lines[line].search(String(firstDigit));
  if (firstDigitIndex === -1) {
    firstDigitIndex = Infinity;
  }
  const wordsCopy = digits
    .map((d) => lines[line].search(d))
    .map((d) => (d === -1 ? Infinity : d));
  let firstWordIndex = wordsCopy.reduce((acc, cur, index) =>
    acc < cur ? acc : cur
  );
  const firstWord = wordsCopy.findIndex((w) => w === firstWordIndex) + 1;
  const firstReal = firstWordIndex < firstDigitIndex ? firstWord : firstDigit;
  if (firstWordIndex === undefined) {
    firstWordIndex = Infinity;
  }
  const lastDigit = lines[line]
    .split("")
    .findLast((e) => Number.isInteger(parseInt(e)));
  let lastDigitIndex = lines[line].lastIndexOf(String(lastDigit));
  if (lastDigitIndex === -1) {
    lastDigitIndex = -Infinity;
  }
  const words = digits.map((d) => lines[line].lastIndexOf(d));
  let lastWordIndex = words.reduce((acc, cur, index) =>
    acc > cur ? acc : cur
  );
  const lastWord = words.findIndex((w) => w === lastWordIndex) + 1;
  if (lastWordIndex === undefined) {
    lastWordIndex = -Infinity;
  }
  const lastReal = lastWordIndex > lastDigitIndex ? lastWord : lastDigit;
  const num = parseInt(String(firstReal)) * 10 + parseInt(String(lastReal));
  console.log(lines[line]);
  // console.log(
  //   { words },
  //   { lastDigit },
  //   { lastDigitIndex },
  //   { firstWordIndex },
  //   { lastWordIndex }
  // );
  console.log(num);
  sum = sum + num;
}

console.log(sum);
