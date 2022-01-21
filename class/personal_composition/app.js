//Ryan Butler
//01.20.2020
//Geometric line art


//creates a variable for the frame size which is referenced many times for calculations.
var framesize = 900
//creates a frame based on the value in variable "framesize"
function setup() {
    createCanvas(framesize,framesize)
}
//this initializes the 3 variables needed for the program.
//x1 is a number starting from 0 that will go up by the rate of change.
var x1 = 0
//y2 will start at the value of framesize and go down
var y2 = framesize
var change = 20
//This function will create 4 curves created with many lines that start and and points slightly change with each iteration. It also will dra lines that go around the image but all go through the center point.
function draw() {
    //These first 4 lines create the 4 curves that surround the image.
    line(0,x1,x1,framesize)
    line(framesize,x1,x1,0)
    line(x1,0,0,y2)
    line(x1,framesize,framesize,y2)
    //these 2 lines create the lines that go through the center of the image.
    line(x1,0,y2,framesize)
    line(0,x1,framesize,y2)
    //This if statement first checks to see if the x1 variable is within a usable range because if it goes too high it will mess up the lines that go through the center of the image.
    if(x1<framesize){
        //This increments the x1 and y1 variables by the rate of change.
        x1 = x1 + change
        y2 = y2 - change
    }
}