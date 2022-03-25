let inTotal = document.getElementById("total")

function calculateTotal(){
    console.log("Tip: $" + ((inTotal.value*.2).toFixed(2)) + " Total: $" + (inTotal.value*1.2).toFixed(2))
}