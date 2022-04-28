let dvbadWordCount = document.getElementById('badWordCount')
let inText = document.getElementById('text')

//establishes the bad words
let badWords = ['clear','water','tires']
//This function splits the input into an array then checks to see if any of the words within it are on the bad word list. If so it adds one to the counter.
function badWordChecker(){
    counter= 0
    let textArr = inText.value.split(' ')
    inText.value = ""
    for(i=0;i<textArr.length;i++){
        if(badWords.includes(textArr[i].toLowerCase())){
            counter += 1
        }
    }
    //output to user
    if(counter>=1){
        dvbadWordCount.innerHTML = "Bad words were found<br>" + counter + " bad words found."
    }else{
      dvbadWordCount.innerHTML = "Bad words were not found. <br>"
    } 
}