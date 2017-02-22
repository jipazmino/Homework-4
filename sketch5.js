function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);

  
  for (var y = 10; y <= 200; y = y + 10) {
    if (y<=200){
    for (var x = y; x<=400-y ; x = x + 10) {
      ellipse (x,y,10,10);
      }
  } 
  }
  
}
