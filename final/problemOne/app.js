//import data
let inUser = document.getElementById("user")
let dvGreeting = document.getElementById("greeting")

//if the input is 'Mary' access is granted. if not access is denied.
function login(){
    if(inUser.value == 'Mary'){
        dvGreeting.innerHTML = "Welcome Home"
    }else{
        dvGreeting.innerHTML = "Entry not allowed"
    }
}