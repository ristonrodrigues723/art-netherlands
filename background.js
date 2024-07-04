// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;


const ground = [
  [
    [0, 3 * 0],
    [125, 3 * 0],
    [125, height],
    [0, height]
  ]
]

const top = [
  [
    [0, 3 * height / 4],
    [125, 3 * height / 4],
    [125, height],
    [0, height]
  ]
]
const ndlastsky = [
  [
    [0, 4.25 * height / 6],
    [125, 4.25 * height / 6],
    [125, height],
    [0, height]
  ]
]

const midddlesky = [
  [
    [0, 4 * height / 6],
    [125, 4 * height / 6],
    [125, height],
    [0, height]
  ]
]
const down = [
  [
    [0, 3 * height / 6],
    [125, 3 * height / 6],
    [125, height],
    [0, height]
  ]
]






const finalLines = [];

const top1 = [
  [
    [0, 3 * height / 4],
    [125, 3 * height / 4],
    [125, height],
    [0, height]
  ]
]




drawLines(finalLines);


drawLines(ground, { fill: "#32a467", stroke: "#29636A" });

drawLines(down, { fill: "#dfecf6", stroke: "#F4CA90" });
drawLines(midddlesky, { fill: "#72aee0", stroke: "#C7B087" });
drawLines(ndlastsky, { fill: "#5693dc", stroke: "#99977E" });
drawLines(top, { fill: "#0149aa", stroke: "#83c0ea" });
