function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(var i = 0; i < 5; i++)
  {
      ellipse(mouseX,mouseY,50-i*5,50-i*5);
  }
  
}