var circle = {
	x: 80, 
	y: 400,
	vx: 3,
	vy: -6,
	r: 20,
  h:80
};

var circle2 = {
	x: 140, 
	y: 400,
	vx: 3,
	vy: -4,
	r: 30,
  h:40
};



function setup() {
	createCanvas(400, 400);
}

function draw() {
  background(0);
  colorMode (HSB);
  
	paint(circle);
	paint(circle2);

	
	move(circle);
	move(circle2);

	
	bounce(circle);
	bounce(circle2);
 
}

function paint(circle) {
  colorMode(HSB);
  noStroke();
  fill(212,circle.h,100);
	ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}
function move(circle) {
	circle.x += circle.vx; // circle.x = circle.x + circle.vx
	circle.y += circle.vy;
}

function bounce(circle) {
	if (circle.x > width || circle.x < 0) {
		circle.vx = - circle.vx;
	}
	if (circle.y > height || circle.y < 0) {
		circle.vy = - circle.vy;
	}
}
