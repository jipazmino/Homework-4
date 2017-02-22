function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);

  
for (x=0;x<=400;x=x+10){
  for (y=x;y<=400;y=y+10){
  line (x,y,y,x);
    line (y,x,x,y);

}}}
