const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const t = new bt.Turtle();
const rr = bt.randInRange;
const sunSize = rr(15, 25);

// Draw a horizontal line at y = 73
const line = [
  [0, 73],
  [width, 73]
];

drawLines([line], { stroke: 'blue' }); // Change the color if desired



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

  // Fill the square
  drawLines(t.lines(), { fill: 'rgb(210, 180, 140)' }); // Light brown color
}

// Draw and fill the square
const squareSize = 20;
const centerX = width / 2 + 10;
const centerY = height / 2 - 20;
const halfSize = squareSize / 2;
drawAndFillSquare(t, centerX, centerY, halfSize);

// Draw the small rectangle
const rectangleWidth = 4;
const rectangleLength = 4;
const halfRectangleWidth = rectangleWidth / 2;
const halfRectangleLength = rectangleLength / 2;
t.up();
t.goTo([centerX - halfRectangleLength, centerY - halfRectangleWidth]);
t.down();
t.goTo([centerX + halfRectangleLength, centerY - halfRectangleWidth]);
t.goTo([centerX + halfRectangleLength, centerY + halfRectangleWidth]);
t.goTo([centerX - halfRectangleLength, centerY + halfRectangleWidth]);
t.goTo([centerX - halfRectangleLength, centerY - halfRectangleWidth]);
drawLines(t.lines(), { fill: 'rgb(210, 180, 140)' });

// Draw the isosceles trapezium
const baseWidth = 20;
const topWidth = 10;
const centerX1 = width / 2 + 10;
const centerY1 = height / 2;
const halfBaseWidth = baseWidth / 2;
const halfTopWidth = topWidth / 2;

t.up();
t.goTo([centerX1 - halfBaseWidth, centerY1 - halfBaseWidth]);
t.down();
t.goTo([centerX1 + halfBaseWidth, centerY1 - halfBaseWidth]);
t.goTo([centerX1 + halfTopWidth, centerY1 + halfTopWidth]);
t.goTo([centerX1 - halfTopWidth, centerY1 + halfTopWidth]);
t.goTo([centerX1 - halfBaseWidth, centerY1 - halfBaseWidth]);
drawLines(t.lines(), { fill: 'rgb(210, 180, 140)' });

// Function to draw rotated square with rectangles
function drawRotatedSquareWithRectangles(t, squareX, squareY, sideLength, angle) {
  const radians = angle * (Math.PI / 180);
  const points = [];

  // Calculate the square's vertices
  for (let i = 0; i < 4; i++) {
    points.push([
      squareX + sideLength * Math.cos(radians + i * Math.PI / 2),
      squareY + sideLength * Math.sin(radians + i * Math.PI / 2)
    ]);
  }

  // Draw the square
  t.up();
  t.goTo(points[0]);
  t.down();
  for (let i = 1; i <= points.length; i++) {
    t.goTo(points[i % points.length]);
  }
  drawLines(t.lines(), { fill: 'rgb(210, 180, 140)' });

  // Draw rectangles on each vertex of the square
  const rectangleWidth = 4;
  const rectangleLength = 15;
  points.forEach((vertex, index) => {
    const rectanglePoints = [
      vertex,
      [vertex[0] + rectangleLength * Math.cos(radians + index * Math.PI / 2), vertex[1] + rectangleLength * Math.sin(radians + index * Math.PI / 2)],
      [vertex[0] + rectangleLength * Math.cos(radians + index * Math.PI / 2) + rectangleWidth * Math.sin(radians + index * Math.PI / 2), vertex[1] + rectangleLength * Math.sin(radians + index * Math.PI / 2) - rectangleWidth * Math.cos(radians + index * Math.PI / 2)],
      [vertex[0] + rectangleWidth * Math.sin(radians + index * Math.PI / 2), vertex[1] - rectangleWidth * Math.cos(radians + index * Math.PI / 2)],
      vertex
    ];

    t.up();
    t.goTo(rectanglePoints[0]);
    t.down();
    for (let i = 1; i <= rectanglePoints.length; i++) {
      t.goTo(rectanglePoints[i % rectanglePoints.length]);
    }
    drawLines(t.lines(), { fill: 'rgb(210, 180, 140)' });
  });
}

// Draw the rotated square with rectangles
const squareSide = 5;
const squareX = 72;
const squareY = 70;
const angles = [0, 15, 30, 45, 60, 75, 90];
const randomAngle = angles[Math.floor(Math.random() * angles.length)];
drawRotatedSquareWithRectangles(t, squareX, squareY, squareSide, randomAngle);




bt.join(finalLines, t.lines());

drawLines(finalLines);