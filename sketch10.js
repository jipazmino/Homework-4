function setup() { 
  createCanvas(400, 400);
  background(220);
for (x=10;x<=400;x=x+30){
  for (y=x;y<=400;y=y+400){
    strokeWeight(6);
  line (x,400,x,random (0,390));
}}}

