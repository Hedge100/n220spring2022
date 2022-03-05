let buRock = document.getElementById('rock')
let buPaper = document.getElementById('paper')
let buScissors = document.getElementById('scissors')
let buGuard = document.getElementById('guard')
let dvDisplay = document.getElementById('display')
let dvScore = document.getElementById("score")
dvScore.innerHTML = 0
let outcome = ""
let game = ["rock","paper",'scissors','guard']
let cpu = 0
let score = 0

function rpsg(user){
    if(user != 4){
        cpu = Math.ceil(Math.random() * 3)
        if(cpu==user){
            outcome = "tied"
        }else if(cpu==1 && user==3){
            outcome = "CPU Wins!"
            score -= 1
        }else if(user==1 && cpu==3){
            outcome = "You Won!"
            score += 1
        }else if(user<cpu){
            outcome = "CPU Wins!"
            score -= 1
        }else if(cpu<user){
            outcome = "You Won!"
            score += 1
        }
        dvDisplay.innerHTML='You chose ' + game[user-1] +", computer chose " + game[cpu-1] + '. ' + outcome
    }else{
        score -= .5
        dvDisplay.innerHTML = "You chose guard"
    } 
    dvScore.innerHTML = score
}