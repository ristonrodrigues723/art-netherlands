const t = new bt.Turtle();
const width = 125;
const height = 125;

setDocDimensions(width, height);

function drawTinyFlower(t, centerX, centerY, size, color) {
  const halfWidth = size / 2;
  const halfHeight = size * 0.75;
  const tailLength = size * 0.5;

  t.up();
  t.goTo([centerX, centerY - halfHeight]);
  t.down();
  t.goTo([centerX - halfWidth, centerY]);
  t.goTo([centerX, centerY + halfHeight]);
  t.goTo([centerX + halfWidth, centerY]);
  t.goTo([centerX, centerY - halfHeight]);

  // Draw tail at the bottom
  t.goTo([centerX, Math.max(0, centerY - halfHeight - tailLength)]);

  // Fill the flower
  drawLines(t.lines(), { fill: color });
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

// Initialize the drawing
drawRandomColorFlowers(100);
