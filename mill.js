const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const t = new bt.Turtle();
const rr = bt.randInRange;
const sunSize = rr(15, 25);

const squareSize = 20; // Size of the big square
const centerX = width / 2 + 10;
const centerY = height / 2 - 20;
const halfSize = squareSize / 2;

// Size of the small rectangle
const smallRectWidth = 10;
const smallRectHeight = 5;

// Function to draw a rectangle
function drawRectangle(t, centerX, centerY, halfWidth, halfHeight) {
  t.up();
  t.goTo([centerX - halfWidth, centerY - halfHeight]);
  t.down();

  // Draw the rectangle
  t.goTo([centerX + halfWidth, centerY - halfHeight]);
  t.goTo([centerX + halfWidth, centerY + halfHeight]);
  t.goTo([centerX - halfWidth, centerY + halfHeight]);
  t.goTo([centerX - halfWidth, centerY - halfHeight]);
}

// Function to draw and fill the square (modified)
function drawSquare(t, centerX, centerY, halfSize) {
  t.up();
  t.goTo([centerX - halfSize, centerY - halfSize]);
  t.down();

  // Draw the square
  t.goTo([centerX + halfSize, centerY - halfSize]);
  t.goTo([centerX + halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY - halfSize]);

  const smallRectCenterX = centerX;
  const smallRectCenterY = centerY;
  const smallRectHalfWidth = smallRectWidth / 2;
  const smallRectHalfHeight = smallRectHeight / 2;

  


  drawRectangle(t, smallRectCenterX, smallRectCenterY, smallRectHalfWidth, smallRectHalfHeight);
}


drawSquare(t, centerX, centerY, halfSize);


bt.join(finalLines, t.lines());

drawLines(finalLines);
