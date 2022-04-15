let dvOutcome = document.getElementById('outcome')
let inNumbers = document.getElementById('numbers')

//this function splits the input into an array of strings then loops through and checks if it is a 1. if 3 1'sa are found in a row it announces a win.
function checkWin(){
    let counter = 0
    let winner = false
    let numList = inNumbers.value.split(',')
    for(i=0;i<numList.length;i++){
        if(numList[i]=='1'){
            counter +=1
            //if win condition is met it switches the winner bool to true and breaks to conserve resources
            if(counter == 3){
               winner = true
               break
            }
            //if its not a 1 it resets the counter
        }else{
            counter = 0
        }
    }
    //output to user
    if (winner == true){
        dvOutcome.innerHTML = 'Winner!!!'
    }else{
       dvOutcome.innerHTML = "Not Winner."  
    }
    
}