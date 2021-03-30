let myFont;

function preload() {
  myFont = loadFont('Roboto-Black.ttf');
}

function setup() {
  createCanvas(1200, windowHeight);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER, BOTTOM);
  background(0);
}

function mousePressed()
{
  if (mouseX > 0 && mouseX < width && mouseY > height-100 && mouseY < height)
  {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw()
{
  
  //button
  rect(0,height-100,width,100);
  fill(random(0, 255), random(0, 255), random(0, 255),6);
  text('FULLSCREEN',600,height);
  
  let xPos = [];
  let yPos = [];
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255),6);

  for (let i = 0; i < 360; i++)
  {
    xPos[i] = random(0, width);
    yPos[i] = random(0, height);
  }
  for (let i = 0; i < 360; i++)
  {
    circle(xPos[i], yPos[i], random(6, 93));
  }
}