//creates a variable for the frame size which is referenced many times for calculations.
var framesize = 800
//creates a frame based on the value in variable "framesize"
function setup() {
    createCanvas(framesize,framesize)
}


function draw(){
    background('White')
    drawWeb(mouseX-400,mouseY-400)
}

function drawWeb(x,y){
    //this initializes the 3 variables needed for the program.
    //x1 is a number starting from 0 that will go up by the rate of change.
    var x1 = 0
    //y2 will start at the value of framesize and go down
    var y2 = framesize
    var change = 20
    
    while (x1<framesize){
        //These first 4 lines create the 4 curves that surround the image.
        //bottom left
        line(0+x,x1+y,x1+x,framesize+y)
        //top right
        line(framesize+x,x1+y,x1+x,0+y)
        //top left
        line(x1+x,0+y,0+x,y2+y)
        //bottom right
        line(x1+x,framesize+y,framesize+x,y2+y)
            
        //these 2 lines create the lines that go through the center of the image.
        line(x1+x,0+y,y2+x,framesize+y)
        line(0+x,x1+y,framesize+x,y2+y)
        //This if statement first checks to see if the x1 variable is within a usable range because if it goes too high it will mess up the lines that go through the center of the image.
            
        if(x1<framesize){
            //This increments the x1 and y1 variables by the rate of change.
            x1 = x1 + change
            y2 = y2 - change
        }
    }
}