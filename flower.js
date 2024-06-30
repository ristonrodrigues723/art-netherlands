const t = new bt.Turtle();
const width = 125;
const height = 125;

setDocDimensions(width, height);

function drawTinyFlower(t, centerX, centerY, size) {
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
}

function drawRandomFlowers(count) {
  const tinyFlowerSize = 3; // Even smaller size

  for (let i = 0; i < count; i++) {
    const randomX = bt.randInRange(0, width);
    const randomY = bt.randInRange(0, height);
    
    drawTinyFlower(t, randomX, randomY, tinyFlowerSize);
  }
}

// Draw random flowers -multiple times
drawRandomFlowers(25);

drawLines(t.lines());