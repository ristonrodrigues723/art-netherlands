const width = 125;
const height = 125;
setDocDimensions(width, height);
const finalLines = [];
const t = new bt.Turtle();
const rr = bt.randInRange;
const sunSize = rr(15, 25);
const squareSize = 20; // Size of the square
const centerX = width / 2 + 10;
const centerY = height / 2 - 20;
const halfSize = squareSize / 2;

// Function to draw and fill a square
function drawAndFillSquare(t, centerX, centerY, halfSize) {
  t.up();
  t.goTo([centerX - halfSize, centerY - halfSize]);
  t.down();
  
  // Draw the square
  t.goTo([centerX + halfSize, centerY - halfSize]);
  t.goTo([centerX + halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY - halfSize]);
  
  // Fill the square by drawing lines inside it
  for (let i = 1; i < squareSize; i++) {
    t.goTo([centerX - halfSize, centerY - halfSize + i]);
    t.goTo([centerX + halfSize, centerY - halfSize + i]);
  }
}

// Call the function to draw and fill the square
drawAndFillSquare(t, centerX, centerY, halfSize);

// rect
t.up();
t.goTo([63, 63]);
t.down();
// Draw the rectangle
t.goTo([63 + 10, 63]); 
t.goTo([63 + 10, 63 - 5]); 
t.goTo([63, 63 - 5]); 
t.goTo([63, 63]); 

// Draw and fill trapezium at y = 73
const trapeziumBaseWidth = 20;
const trapeziumTopWidth = 10;
const trapeziumHeight = 10;
const trapeziumY = 53; // Set to y = 73
drawAndFillTrapezium(t, centerX, trapeziumY, trapeziumBaseWidth, trapeziumTopWidth, trapeziumHeight, 'orange');

// Draw and fill diamond at y = 83
const diamondSize = 15;
const diamondY = 63; // Set to y = 83
drawAndFillDiamond(t, centerX, diamondY, diamondSize, 'brown');

function drawAndFillTrapezium(t, centerX, centerY, baseWidth, topWidth, height, color) {
  const halfBaseWidth = baseWidth / 2;
  const halfTopWidth = topWidth / 2;
  t.up();
  t.goTo([centerX - halfBaseWidth, centerY + height]);
  t.down();
  t.goTo([centerX + halfBaseWidth, centerY + height]);
  t.goTo([centerX + halfTopWidth, centerY]);
  t.goTo([centerX - halfTopWidth, centerY]);
  t.goTo([centerX - halfBaseWidth, centerY + height]);
  // Fill the trapezium
  drawLines(t.lines(), { fill: color });
}

function drawAndFillDiamond(t, centerX, centerY, size, color) {
  t.up();
  t.goTo([centerX, centerY - size/2]);
  t.down();
  t.goTo([centerX + size/2, centerY]);
  t.goTo([centerX, centerY + size/2]);
  t.goTo([centerX - size/2, centerY]);
  t.goTo([centerX, centerY - size/2]);
  // Fill the diamond
  drawLines(t.lines(), { fill: color });
}

// Execute the drawing commands
bt.join(finalLines, t.lines());
drawLines(finalLines);