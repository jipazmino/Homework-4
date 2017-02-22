function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
  y = 10 
  for (x = 10; x < 400; x = x + 10) {
  
    ellipse (x,y,10,10);
    
    y = y + 10
  }
}
