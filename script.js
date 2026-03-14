let ms=0
let sec=0
let min=0
let hr=0
let timer = null;
let startTime=0
let elapsedtime=0     

const start_btn = document.getElementById("Start");
const stop_btn = document.getElementById("Stop");
const reset_btn = document.getElementById("Reset");

function pad(number) {
    return number < 10 ? "0" + number : number;
}

start_btn.addEventListener("click",function(){
    if(timer==null){
        startTime=Date.now()-elapsedtime
        timer=setInterval(()=>{
            elapsedtime=Date.now()-startTime
            displayTime()
        },10)
}
})

function displayTime(){
     ms=Math.floor((elapsedtime%1000)/10)
     sec=Math.floor((elapsedtime/1000)%60)
     min=Math.floor((elapsedtime/60000)%60)
     hr=Math.floor((elapsedtime/3600000)%60)
     document.getElementById("time").innerText = `${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(ms)}`
}

stop_btn.addEventListener("click",function(){
    clearInterval(timer)
    timer=null

})

reset_btn.addEventListener("click",function(){
    clearInterval(timer)
    timer=null
    elapsedtime=0
    displayTime()
})