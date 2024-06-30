const t = new bt.Turtle();
const width = 125;
const height = 125;

setDocDimensions(width, height);

function drawKiteWithTailAtBottom(t, centerX, centerY, size) {
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

drawKiteWithTailAtBottom(t, width / 2, height / 2, 40);

drawLines(t.lines());