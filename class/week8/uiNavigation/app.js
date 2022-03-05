let dvFirst=document.getElementById("first")
let dvSecond=document.getElementById("second")
let dvThird=document.getElementById("third")
let dvFourth=document.getElementById("fourth")
let dvFifth=document.getElementById("fifth")
let dvSixth=document.getElementById("sixth")
let dvSelected=document.getElementById("selected")
let oldName = ""
function highlight(name){
    if (oldName!=""){
        oldName.style.fontWeight = "normal"
    oldName.style.backgroundColor = "lightblue"
    }
    name.style.fontWeight = "bold"
    name.style.backgroundColor= "blue"
    dvSelected.innerHTML = name.innerHTML
    oldName = name
}