import { input } from "./input";
// const input = `467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..`;

const lines = input.split("\n");
let sum = 0;

for (const line in lines) {
  const num = [];
  const previous = lines[parseInt(line) - 1];
  const next = lines[parseInt(line) + 1];
  let currentLine = lines[line];
  while (currentLine.search(/\*/) !== -1) {
    const sIndex = currentLine.search(/\*/);
    if (sIndex === -1) {
      continue;
    }
    const previousNumbers = [];
    let previousCopy = previous;
    while (previousCopy.search(/\d+/) !== -1) {
      const d = previousCopy.match(/\d+/);
      if (!d) {
        break;
      }
      const dStart =
        previousCopy.search(/\d+/) - 1 < 0 ? 0 : previousCopy.search(/\d+/) - 1;
      const dEnd =
        dStart + d[0].length + 1 > previousCopy.length
          ? previousCopy.length
          : dStart + d[0].length + 1;
      if (sIndex >= dStart && sIndex <= dEnd) {
        previousNumbers.push(parseInt(d[0]));
      }
      previousCopy = previousCopy.replace(d[0], ".".repeat(d[0].length));
    }

    const nextNumbers = [];
    let nextCopy = next;
    while (nextCopy.search(/\d+/) !== -1) {
      const d = nextCopy.match(/\d+/);
      if (!d) {
        break;
      }
      const dStart =
        nextCopy.search(/\d+/) - 1 < 0 ? 0 : nextCopy.search(/\d+/) - 1;
      const dEnd =
        dStart + d[0].length + 1 > nextCopy.length
          ? nextCopy.length
          : dStart + d[0].length + 1;
      if (sIndex >= dStart && sIndex <= dEnd) {
        nextNumbers.push(parseInt(d[0]));
      }
      nextCopy = nextCopy.replace(d[0], ".".repeat(d[0].length));
    }

    const currentNumbers = [];
    let currentCopy = currentLine;
    while (currentCopy.search(/\d+/) !== -1) {
      const d = currentCopy.match(/\d+/);
      if (!d) {
        break;
      }
      const dStart =
        currentCopy.search(/\d+/) - 1 < 0 ? 0 : currentCopy.search(/\d+/) - 1;
      const dEnd =
        dStart + d[0].length + 1 > currentCopy.length
          ? currentCopy.length
          : dStart + d[0].length + 1;
      if (sIndex >= dStart && sIndex <= dEnd) {
        currentNumbers.push(parseInt(d[0]));
      }
      currentCopy = currentCopy.replace(d[0], ".".repeat(d[0].length));
    }

    const numbers = [...previousNumbers, ...nextNumbers, ...currentNumbers];

    if (numbers.length === 2) {
      //@ts-ignore
      const product = numbers.reduce((acc, cur) => acc * cur);
      console.log(product, currentLine);
      sum = sum + product;
    } else {
      console.log("nope", currentLine);
    }
    currentLine = currentLine.replace("*", ".");
  }
}
console.log(sum);
