const leftBar=document.querySelector(".leftBar")
const closeBtn = document.querySelector(".close")
const openBtn = document.querySelector(".open")

closeBtn.addEventListener("click",()=>{
    leftBar.classList.add("transform")
    openBtn.style.display="block"
    
})

openBtn.addEventListener("click",()=>{
    leftBar.classList.remove("transform")
    openBtn.style.display="none"
    leftBar.style.transition="0.3s"
})