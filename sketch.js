function setup() {
  createCanvas(900, 1200);
  background(0);
}

function draw() {
  noStroke();
  fill(random(0,255),random(0,255),random(0,255),5);


  let xPos = [];
  let yPos = [];

  for (let i = 0; i < 1000; i++)
  {
    xPos[i] = random(0,width);
    yPos[i] = random(0,height);
  }
  for (let i = 0; i < 1000; i++)
  {
    circle(xPos[i],yPos[i], random(10,90));
  }


}