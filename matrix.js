
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20); // Number of columns for the matrix effect
const matrix = '101010100101ABCDEF'; // Characters used in the matrix effect

// Create an array of column positions
const columnPos = [];
for (let i = 0; i < columns; i++) {
  columnPos[i] = Math.floor(Math.random() * canvas.height);
}

function drawMatrix() {
  // Set a translucent black background to create the trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw the matrix characters
  ctx.fillStyle = '#0F0'; // Green color
  ctx.font = '15px monospace';
  for (let i = 0; i < columns; i++) {
    const char = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(char, i * 20, columnPos[i] * 20);
    
    // Move the column position downwards
    if (columnPos[i] * 20 > canvas.height && Math.random() > 0.975) {
      columnPos[i] = 0;
    }
    
    columnPos[i]++;
  }
}

// Call the drawMatrix function repeatedly to create the animation
function animateMatrix() {
  drawMatrix();
  requestAnimationFrame(animateMatrix);
}

animateMatrix();
