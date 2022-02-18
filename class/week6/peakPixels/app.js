let dvSquare = document.getElementById("square");
let dimension = 100

dvSquare.style.width = dimension + "px"
dvSquare.style.height = dimension + "px"

function grow(){
    dimension*= 1.1
    dvSquare.style.width = dimension + "px"
    dvSquare.style.height = dimension + "px"

}