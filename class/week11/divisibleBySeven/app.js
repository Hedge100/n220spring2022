let inNumber = document.getElementById("number")
let dvResult = document.getElementById("result")

function divisibleBySeven(){
    if (inNumber.value % 7 == 0){
        dvResult.innerHTML = "True"
    }else{
        dvResult.innerHTML = "False"
    }
}