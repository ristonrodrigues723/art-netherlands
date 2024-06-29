const width = 125;
const height = 125;

const squareSize = 20; // Size of the square
const centerX = width / 2 + 10;
const centerY = height / 2 - 20;
const halfSize = squareSize / 2;

// Function to draw and fill a square
function drawAndFillSquare(t, centerX, centerY, halfSize) {
  t.up();
  t.goTo([centerX - halfSize, centerY - halfSize]);
  t.down();
  
  // Drawing the square
  t.goTo([centerX + halfSize, centerY - halfSize]);
  t.goTo([centerX + halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY + halfSize]);
  t.goTo([centerX - halfSize, centerY - halfSize]);

  for (let i = 1; i < squareSize; i++) {
    t.goTo([centerX - halfSize, centerY - halfSize + i]);
    t.goTo([centerX + halfSize, centerY - halfSize + i]);
  }
}



// Calling the function to draw and fill the square
drawAndFillSquare(t, centerX, centerY, halfSize);


