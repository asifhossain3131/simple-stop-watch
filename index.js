let second=0;
let minute=0;
let hour=0;

// dom all field 
const curSec= document.getElementById('current-second')
const curMin= document.getElementById('current-minute')
const curHour=document.getElementById('current-hour')


function startCount(){
intervalId=setInterval(()=>{
   curSec.innerText=++second
   if(second===60){
    second=0
   curMin.innerText=++minute
   if(minute===60){
    curMin.innerText=0
    minute=0
    curHour.innerText=++hour
}
}
}, 1000)
}

function stopCount(){
    clearInterval(intervalId)
}

function resetCount(){
    curSec.innerText=0
    curMin.innerText=0
    curHour.innerText=0
    minute=0
    second=0
    hour=0
    clearInterval(intervalId)
}