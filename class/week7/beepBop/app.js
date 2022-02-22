let dvBeepBop = document.getElementById("beepBop");
for(i=0;i<25;i++){
    text=''
    if(i%3==0){
        text += "beep"
    }
    if(i%5==0){
        text+="bop"
    }
    if(i%3!=0 && i%5!=0){
        text = i
    }
    dvBeepBop.innerHTML += text + "<br>"
}