import { input } from "./input";
// const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const redMax = 12;
const greenMax = 13;
const blueMax = 14;

const lines = input.split("\n");
let sum = 0;

for (const line in lines) {
  const parts = lines[line].split(":");
  const id = parts[0].split(" ")[1];
  const turns = parts[1].split(";").map((e) => e.trim());
  const cubes = turns
    .map((e) => e.split(","))
    .map((e) => e.map((e) => e.trim()));
  const dictPrep = cubes.map((currentTurn) =>
    currentTurn.map((pair) => pair.split(" "))
  );
  type colorsInTurn = { red: number[]; green: number[]; blue: number[] };
  const colorsInTurn: colorsInTurn = {
    red: [],
    green: [],
    blue: [],
  };
  dictPrep.map((currentTurn) =>
    currentTurn.map((pair) =>
      colorsInTurn[pair[1] as keyof colorsInTurn].push(parseInt(pair[0]))
    )
  );
  const red = colorsInTurn.red.reduce((acc, cur) => (acc > cur ? acc : cur));
  const green = colorsInTurn.green.reduce((acc, cur) =>
    acc > cur ? acc : cur
  );
  const blue = colorsInTurn.blue.reduce((acc, cur) => (acc > cur ? acc : cur));
  const power = red * green * blue;
  sum = sum + power;
}
console.log(sum);
