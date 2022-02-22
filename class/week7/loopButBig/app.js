let dvNumbers = document.getElementById("numbers");
let numbers=[]
for(i=0; i<5; i++){
    numbers[i] = (i+1)*1000
}
dvNumbers.innerHTML = numbers.toString()