function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
  for (x = 10; x < 400; x = x + 10) {
    for ( y = 10; y < 400; y = y + 10){
      ellipse (x,y,10,10);
}
  }
}
