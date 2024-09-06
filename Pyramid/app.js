const reset =document.getElementById('reset');
const submit =document.getElementById('submit');
let pyramid = document.getElementById('pyramid');
const char = document.getElementById('char');
const rows = document.getElementById("height");


submit.addEventListener("click",function(){
    event.preventDefault();
    buildPyramid(char,rows);
})


function buildPyramid(character, numOfRows){
    character=char.value;
    numOfRows=rows.value;
    pyramid.innerHTML='';
    
    for(let i=0;i<numOfRows;i++){
        let spaces = "&nbsp".repeat(numOfRows-i);
        let row=character.repeat(2 * i+1);
        pyramid.innerHTML += spaces + row +"<br>";
    }
}


//Resets the current pyramid so that it can't be utilized, does not save to memory
reset.addEventListener("click",function(){
    resetPyramid();
})

function resetPyramid(){
    pyramid.innerHTML=' ';
}
