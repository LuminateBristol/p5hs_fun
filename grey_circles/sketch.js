function setup() {
  createCanvas(1000,4000);
  i = 0;
}

function draw() {
  if (mouseIsPressed) {
    fill(50);
  } else {
    fill(i)
  }
  ellipse(mouseX, mouseY, 80, 80);
  i=i+1;
  if (i==255) {
    i=50;
  }
}