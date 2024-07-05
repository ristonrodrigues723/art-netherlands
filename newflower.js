const t = new bt.Turtle();
const width = 125;
const height = 125;
setDocDimensions(width, height);

function drawTinyFlower(t, centerX, centerY, size, color) {
  const halfWidth = size / 2;
  const halfHeight = size * 0.75;
  const tailLength = size * 0.5;

  // Create a single path for the entire flower
  const flowerPath = [
    [centerX, centerY - halfHeight],
    [centerX - halfWidth, centerY],
    [centerX, centerY + halfHeight],
    [centerX + halfWidth, centerY],
    [centerX, centerY - halfHeight],
    [centerX, Math.max(0, centerY - halfHeight - tailLength)]
  ];

  // Draw and fill the flower in one step
  drawLines([flowerPath], { fill: color, stroke: color });
}

function drawRandomColorFlowers(count) {
  const tinyFlowerSize = 3.2;
  const colors = ['red', 'blue', 'pink', 'purple', 'white'];
  for (let i = 0; i < count; i++) {
    const randomX = bt.randInRange(10, 115); // Adjusted x-coordinate range
    const randomY = bt.randInRange(10, 63);  // Adjusted y-coordinate range
    const randomColor = colors[Math.floor(bt.randInRange(0, colors.length))];
    
    drawTinyFlower(t, randomX, randomY, tinyFlowerSize, randomColor);
  }
}

// Draw the background layers
const ground = [
  [
    [0, 3 * 0],
    [125, 3 * 0],
    [125, height],
    [0, height]
  ]
];
const top = [
  [
    [0, 3 * height / 4],
    [125, 3 * height / 4],
    [125, height],
    [0, height]
  ]
];
const middle2 = [
  [
    [0, 4.25 * height / 6],
    [125, 4.25 * height / 6],
    [125, height],
    [0, height]
  ]
];
const middle1 = [
  [
    [0, 4 * height / 6],
    [125, 4 * height / 6],
    [125, height],
    [0, height]
  ]
];
const down = [
  [
    [0, 3 * height / 6],
    [125, 3 * height / 6],
    [125, height],
    [0, height]
  ]
];

drawLines(ground, { fill: "#32a467", stroke: "#29636A" });
drawLines(down, { fill: "#dfecf6", stroke: "#F4CA90" });
drawLines(middle1, { fill: "#72aee0", stroke: "#C7B087" });
drawLines(middle2, { fill: "#5693dc", stroke: "#99977E" });
drawLines(top, { fill: "#0149aa", stroke: "#83c0ea" });

// Draw the flowers
drawRandomColorFlowers(125);