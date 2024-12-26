const timer=document.querySelector("#timer")
const startBtn=document.querySelector("#start-button")
const stopBtn=document.querySelector("#stop-button")
const resetBtn=document.querySelector("#reset-button")

let counterInterval=null;
let time=0

startBtn.addEventListener("click",(e)=>{
    e.target.disabled=true
    stopBtn.disabled=false
    resetBtn.disabled=true

    counterInterval=setInterval(() => {
        time++
        timer.textContent=time
    }, 1000);
})

stopBtn.addEventListener("click",(e)=>{
    e.target.disabled=true
    startBtn.disabled=false
    resetBtn.disabled=false

    clearInterval(counterInterval)
})

resetBtn.addEventListener("click",(e)=>{
    e.target.disabled=true
    startBtn.disabled=false
    stopBtn.disabled=true
    time=0
    timer.textContent=time
    clearInterval(counterInterval)
})

