function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);

var z = 10
var v = 390
  
for (x=10;x<=400;x=x+10){
  line (x,z,x,v);
    line (z,x,v,x);

}}
