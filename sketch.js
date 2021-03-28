function setup() {
  createCanvas(900, 1200);
  background(0);
}

function draw() {
  noStroke();
  fill(255, 255,255,30);
  circle(mouseX, mouseY, random(10,75));
}
