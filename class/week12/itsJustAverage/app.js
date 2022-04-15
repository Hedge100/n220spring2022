let dvOutput = document.getElementById("output")
let inNumbers = document.getElementById("numbers")

//This function splits the input int an array, converts everything to numbers,
//adds the elements of the array together, then divides the sum by the length 
//of the string giving the average back to the user.
function average(){
    let sum = 0
    let numList = inNumbers.value.split(",").map(Number)
    for(i=0;i<numList.length;i++){
        sum += numList[i]
        dvOutput.innerHTML = ("Average: " + sum/numList.length + "<br>Sum: " + sum)
    }
    inNumbers.value = ""
}