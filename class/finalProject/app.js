//bring in all global variables
let dvScore1 = document.getElementById("score1")
let dvScore2 = document.getElementById("score2")
let dvTurn = document.getElementById("turn")
let dvMessage = document.getElementById("message")
let p1score=0
let p2score=0

//import 9 divs using a loop for the squares in a 3x3 grid
let grid = [
        ['','',''],
        ['','',''],
        ['','','']
]
let boxes = document.getElementsByClassName("square")
for(i=0;i<9;i++){
    let square = "sq" + i
    window[square]=document.getElementById("sq"+i)
}

for(i=0;i<9;i++){
    if(i<3){
        grid[0][i]=document.getElementById("sq"+i).innerHTML
    }else if(i<6){
        grid[1][i-3]=document.getElementById("sq"+ i).innerHTML
    }else if(i<9){
        grid[2][i-6]=document.getElementById("sq"+ i).innerHTML
    }
}
//create a way to show whos turn it is and alternate it each time someone makes a move
turn = 0
switchPlayer()
function switchPlayer(){
    if (turn=="1"){
        turn = "2"
    }else{
        turn = "1"
    }
    dvTurn.innerHTML = "It's Player " + turn + "'s Turn"
}
    

//have each onClick reference an array position and update its value and color.
let color=["blue", "green", "red"]
//counter tracks number of moves made
let counter = 0
//move is the main function that assembles the functions to create the flow of the game.
function move(event){
    let col = event.target.dataset.col
    let row = event.target.dataset.row
    if(grid[row][col]!=1 && grid[row][col]!=2){
        grid[row][col]=turn
    event.target.innerHTML=turn
    event.target.style.backgroundColor=color[turn]
    dvMessage.innerHTML=" "
    counter++
    checkWin()
    switchPlayer()
    dvScore1.innerHTML = "Player 1: "+ p1score 
    dvScore2.innerHTML = "Player 2: "+ p2score 
    }else{
        dvMessage.innerHTML="Invalid Move"
    }

}
//this function checks the grid for if there is a win and if so it reports it and increments the score.
function checkWin(){
    let filteredGrid = []
    let winnerFound = false
    console.log(grid)
    //player loop
    for(i=0;i<2;i++){
        //horizonatal win check
        for(x=0;x<3;x++){
            filteredGrid = []
            filteredGrid[0] = grid[x].filter(function(square){return square == i+1})
            if (filteredGrid[0].length == 3){
                winnerFound = true
                break
            }
            //vertical win check
            filteredGrid = []
            for(y=0;y<3;y++){
                filteredGrid[0] = grid.filter(function(row){return row[x]==i+1})
                if (filteredGrid[0].length == 3){
                    winnerFound = true
                    //break out of verticle loop
                    break
                } 
            }
            //break out of horizontal loop
            if(winnerFound){
                break
            }
        }
        //diagonal win
        if ((grid[0][0]==grid[1][1] && grid[0][0]==grid[2][2])  ||(grid[1][1]==grid[2][0] && grid[1][1]==grid[0][2]) && (grid[1][1]!=0)){
            if (grid[1][1]==i+1){
                winnerFound = true
                //break out of horizontal loop
            }   
        }
        //break out of player loop
        if(winnerFound){
            dvMessage.innerHTML= 'player ' + [i+1] + ' Wins!'
            if(i==0){
                p1score++
            }else{
                p2score++
            }
            break
        }
    }
    if (counter == 9 && !winnerFound){
        dvMessage.innerHTML = "Nobody Won!"
    }
}
//reset button resets the critical values back to their initial state.
function reset(){
    grid = [[0,0,0],
            [0,0,0],
            [0,0,0]]
    for (i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="blue"
        boxes[i].innerHTML=0
        turn="1"
        counter=0
    }
    
} 