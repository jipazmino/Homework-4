function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
 colorMode (HSB); 

    for (x = 10; x < 400; x = x + 10) {

    for ( y = 10; y < 400; y = y + 10){
      fill (y,40,80);
      ellipse (x,y,10,10);
    }
  }
}
