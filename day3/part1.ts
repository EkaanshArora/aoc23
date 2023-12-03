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
  while (currentLine.length > 0) {
    const dIndex = currentLine.search(/\d+/);
    const d = currentLine.match(/\d+/);
    if (dIndex === -1 || d === null) {
      break;
    }
    let prevStr;
    if (previous !== undefined) {
      prevStr = previous.slice(
        dIndex - 1 < 0 ? 0 : dIndex - 1,
        dIndex + d[0].length + 1 > previous.length
          ? previous.length
          : dIndex + d[0].length + 1
      );
    }
    let nextStr;
    if (next !== undefined) {
      nextStr = next.slice(
        dIndex - 1 < 0 ? 0 : dIndex - 1,
        dIndex + d[0].length + 1 > next.length
          ? next.length
          : dIndex + d[0].length + 1
      );
    }
    const previousEle = currentLine[dIndex - 1];
    const nextEle = currentLine[dIndex + d[0].length];
    // console.log(previousEle, nextEle, d[0], prevStr, nextStr);
    // console.log(currentLine);
    const searchStr =
      (prevStr ?? "") + (nextStr ?? "") + (previousEle ?? "") + (nextEle ?? "");
    const search = searchStr.replaceAll(".", "");
    console.log(searchStr, d[0], search.length > 0);
    if (search.length > 0) {
      num.push(d[0]);
      sum = sum + parseInt(d[0]);
    }
    currentLine = currentLine.replace(d[0], ".".repeat(d[0].length));
  }
}
console.log(sum);
