import { input } from "./input";
// const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const lines = input.split("\n");
const cards = new Array(212).fill(1, 0, 212);

for (const line in lines) {
  const instances = cards[line];
  let matches = 0;
  const splits = lines[line].split(":")[1].split("|");
  const winner = splits[0]
    .trim()
    .split(" ")
    .filter((x) => x !== "")
    .map((x) => parseInt(x));
  const mine = splits[1]
    .trim()
    .split(" ")
    .filter((x) => x !== "")
    .map((x) => parseInt(x));
  for (const num of winner) {
    if (mine.includes(num)) {
      matches++;
    }
  }
  for (let iter = 1; iter <= matches; iter++) {
    cards[parseInt(line) + iter] = cards[parseInt(line) + iter] + instances;
  }
}

console.log(
  cards,
  cards.reduce((a, b) => a + b, 0)
);
