var pic;
var photo;
var x=10;
var y=500;
var giantx=[300,500,600,850,1100,250];
var gianty=[400,300,600,400,300,230];
//var score =0;
var hit;
var score= 0; 
var r = 255;
var g = 0;
var b = 0;
var r1 = 255;
var g1 = 0;
var b1 = 0;
var r2 = 255;
var g2 = 0;
var b2 = 0;
var r3 = 255;
var g3 = 0;
var b3 = 0;
var r5 = 255;
var g5 = 0;
var b5 = 0;
var move = 8;
var ring = false;
var hit1;
var hit2;
var hit3;
var hit4;
var hit5;
function setup(){
	createCanvas(1200,850);
	pic = loadImage("fire.webp");
	photo = loadImage("water.jpeg");

}

function draw(){
	background(0,255,255)	
	image(photo,0,800,1500,100);
	image(pic,0,0,1200,100);
	fill(255);
	textSize(50);

	noStroke(noFill);
	text("score: " + score,600,150);
	//score=score+1;
	// if(frameCount 2==1){
	// 	x+=1;
 	//  }
// if(y==100){
// 	text("Gameover");
// }
	fill(0);
	noStroke();
	ellipse(x,y,50,50);
	 x +=2;
	 y +=4;

	
	 x=constrain( x,35,1160);
	 y=constrain( y,130,772);
	if(keyIsDown(32)){
		 		y=  y-move;
		 	}
		 	
//fIRST RING		
	noFill();	
	stroke(r,g,b);
	strokeWeight(10);
	 fill(0)
	ellipse(giantx[0],gianty[0],100,30);
		 	hit=dist(x,y,giantx[0],gianty[0])
	//console.log(hit);
	
	if(hit<=40 && y < gianty[0]){
		r = 0;
		g = 0;
		b = 255;
		y=y+20;
		ring = true;
		//console.log(ring);
	} 
	if(hit>=40 && hit <= 150 ){
		ring = false;
		move = 0;
	} else {
		ring = false;
		move = 8;
	}

//SECOND RING
	noFill();	
	stroke(r1,g1,b1);
	strokeWeight(10);
	 fill(0)
	 ellipse(giantx[1],gianty[1],100,30);
	 hit1=dist(x,y,giantx[1],gianty[1])
	//console.log(hit1);
	
	if(hit1<=37 && y < gianty[1]){
		r1 = 0;
		g1 = 0;
		b1 = 255;
		y=y+20;
		ring = true;
	} 
	if(hit1>=45 && hit1 < 60){
		ring = false;
		move = 0;
	} else{
		ring = false;
		move = 8;
	}

//THIRD RING 
	noFill();	
	stroke(r2,g2,b2);
	strokeWeight(10);
	fill(0)
	 ellipse(giantx[2],gianty[2],100,30);
	 hit2=dist(x,y,giantx[2],gianty[2])
	//console.log(hit2);
	
	if(hit2<=31 && y < gianty[2]){
		r2 = 0;
		g2 = 0;
		b2 = 255;
		y=y+20;
		ring = true;
	} 
	if(hit2=31 && hit2< 37){
		ring = false;
		move = 0;
	} else{
		ring = false;
		move = 8;

	}
//RING FOUR
	noFill();	
	stroke(r3,g3,b3);
	strokeWeight(10);
	fill(0)
	 ellipse(giantx[3],gianty[3],100,30);
	 hit3=dist(x,y,giantx[3],gianty[3])
	//console.log(hit3);
	
	if(hit3<=75 && y < gianty[3]){
		r3 = 0;
		g3 = 0;
		b3 = 255;
		y=y+20;
		ring = true;
	} 
	if(hit3>=75 && hit3 < 81){
		ring = false;
		move = 0;
	} else{
		ring = false;
		move = 8;
	}

//RING FIVE
	noFill();	
	stroke(r5,g5,b5);
	strokeWeight(10);
	fill(0)
	ellipse(giantx[4],gianty[4],100,30);
	hit4=dist(x,y,giantx[4],gianty[4])
	//      console.log(hit4);
	
	 if(hit4<=33 && y < gianty[4]){
	 	r5 = 0;
	 	g5 = 0;
	 	b5 = 255;
	 	ring = true;
	 	y=y+20;
	 } 
	 if(hit4>=33 && hit4 < 37){
		ring = false;
        move = 0;
	 } else{
	 	ring = false;
		move = 8;

	}
//score
	//if(frameCount % 20 == 0){
		if(ring == true){
			score ++;
		}
	//}
}	
