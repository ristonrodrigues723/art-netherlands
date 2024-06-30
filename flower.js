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

function drawMultiColorFlowers(count) {
  const tinyFlowerSize = 5; // Small size for the flowers
  const colors = ['red', 'blue', 'pink', 'purple', 'white'];

  for (let i = 0; i < count; i++) {
    const randomX = bt.randInRange(10, width - 10);
    const randomY = bt.randInRange(10, height - 10);
    const randomColor = colors[Math.floor(bt.randInRange(0, colors.length))];
    
    drawTinyFlower(t, randomX, randomY, tinyFlowerSize, randomColor);
  }
}

// Draw 20 random tiny flowers with different colors
drawMultiColorFlowers(20);