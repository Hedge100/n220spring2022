let dvmcDiv = document.getElementById("mcDiv");
let text = "lovin it!"
dvmcDiv.innerHTML = text
counter = 0

function addMc(){
    if (counter<2){
        dvmcDiv.innerHTML = "Mc" + dvmcDiv.innerHTML
        counter++
    }else{
        dvmcDiv.innerHTML = "divdivdiv"
    }
}


console.log(dvmcDiv.innerHTML)