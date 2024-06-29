
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
function drawSquare(t, centerX, centerY, halfSize) {
  t.up();
  t.goTo([centerX - halfSize, centerY - halfSize]);
  t.down();
  
  // Draw the square
  t.goTo([centerX + halfSize, centerY - halfSize]);
  t.goTo([centerX + halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY - halfSize]);
  
  // Filling the square by drawing lines inside it
  for (let i = 1; i < squareSize; i++) {
    t.goTo([centerX - halfSize, centerY - halfSize + i]);
    t.goTo([centerX + halfSize, centerY - halfSize + i]);
  }
}

// Calling the function to draw and fill the square
drawSquare(t, centerX, centerY, halfSize);


bt.join(finalLines, t.lines());



drawLines(finalLines);