function setup() { 
  createCanvas(400, 400);
  frameRate (10);
  
} 



function draw() { 
  background(220);


  
for (x=10;x<=400;x=x+20){
    strokeWeight(4);
  line (x,400,x,mouseY);
}
  
}

