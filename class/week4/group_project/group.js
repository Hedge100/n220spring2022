let aou = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    aou.x = mouseX;
    aou.y = mouseY;
  }

  function distance(p1, p2) {
  
    let dx = p1.x - p2.x;
    let dy = p1.y - p2.y;
    
    //return the distance
     return (Math.sqrt(dx*dx + dy*dy));
  }
  let zah = distance( aou,{ x: mouseX, y: mouseY });
  
  if(zah > 120){ 
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  
  line(aou.x, aou.y, mouseX, mouseY);
}

