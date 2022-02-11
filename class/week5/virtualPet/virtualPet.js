//creates an object with the properties for a ball with an Xoffset
let pet = {x:200,y:300,size:20,offsetX:0}

function setup(){
    createCanvas(windowWidth,windowHeight-10)
    background(100)
}
//takes the pet object and if the mouse is not pressed it will move away from the mouse's position and if it is pressed it moves towards the mouse.
function draw(){
    background(100)
    if(mouseIsPressed){
        if(pet.offsetX>0){
            pet.offsetX -=1
        }
    }else{
        pet.offsetX += 1
    }
    circle(mouseX+pet.offsetX,mouseY,pet.size)
}