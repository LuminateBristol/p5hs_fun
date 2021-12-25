function setup() {
  createCanvas(1000,4000);
  i = 0;
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fill(50);
  } else {
    fill(0,i,10,150)
  }
  ellipse(mouseX, mouseY, 80, 80);
  i=i+1;
  if (i==255) {
    i=50;
  }
}