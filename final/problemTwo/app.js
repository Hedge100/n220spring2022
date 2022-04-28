//import div
let dvNo = document.getElementById("no")
//state 0 represents not been clicked, 1 means it has.
let state=0
//the first time the div is clicked it changes to 'No'. After that it adds a 'No' with each click
function no(){
    if (state == 0){
        dvNo.innerHTML = "No"
        state++
    }else{
        dvNo.innerHTML += "No"
    }
}