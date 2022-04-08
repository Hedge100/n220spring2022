let dvClean = document.getElementById("cleanWord")
let inDirty = document.getElementById("dirtyWord")

function filter(){
    let clean=""
    let dirty = inDirty.value
    for (i=0;i<dirty.length;i++){
        if ('#' != dirty[i]){
            clean += dirty[i]
        }
    }
    dvClean.innerHTML = clean
}