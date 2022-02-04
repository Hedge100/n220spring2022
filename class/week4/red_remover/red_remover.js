function red_remover(color){
    color.setRed(0)
    return (color)
}
function setup(){
    createCanvas(800,800)
    fill(red_remover(color(170,200,150)));
    circle(400,400,80)
}