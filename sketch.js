let myFont;

function preload() {
  myFont = loadFont('Roboto-Black.ttf');
}

function setup() {
  createCanvas(1200, 1800);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER);
  background(0);
}

function mousePressed()
{
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < 100)
  {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw()
{
  
  //button
  rect(0,0,width,100);
  fill(random(0, 255), random(0, 255), random(0, 255),6);
  text('FULLSCREEN',600,87);
  
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