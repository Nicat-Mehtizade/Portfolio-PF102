const hour=document.querySelector(".hour")
const minute=document.querySelector(".minute")
const second=document.querySelector(".second")
const dot=document.querySelectorAll(".dot")
const clockBtn=document.querySelector(".clock-button")

let clockWorks=true
let clockInterval;

window.addEventListener("load", () => {
    getCurrentTime();
    clockInterval=setInterval(getCurrentTime,1000)
  });

  clockBtn.addEventListener("click",()=>{
    if(clockWorks){
        clearInterval(clockInterval)
        second.textContent="88"
        second.style.color="#2d2d2d"
        minute.textContent="88"
        minute.style.color="#2d2d2d"
        hour.textContent="88"
        hour.style.color="#2d2d2d"
        
        dot.forEach(d => d.style.color = "#2d2d2d");
    }
    else{
        clockInterval=setInterval(getCurrentTime,1000)
        second.style.color="white"
        minute.style.color="white"
        hour.style.color="white"

        dot.forEach(d => d.style.color = "white");

    }
    clockWorks=!clockWorks
})

function getCurrentTime(){
    const date=new Date()
    if(date.getSeconds()<10){
        second.textContent=`0${date.getSeconds()}`
    }else{
        second.textContent=`${date.getSeconds()}`

    }
    if(date.getMinutes()<10){
        minute.textContent=`0${date.getMinutes()}`
    }else{
        minute.textContent=`${date.getMinutes()}`

    }
    if(date.getHours()<10){
        hour.textContent=`0${date.getHours()}`
    }else{
        hour.textContent=`${date.getHours()}`

    }
}



