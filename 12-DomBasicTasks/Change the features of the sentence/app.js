const addBtn=document.querySelector(".add")
const decreaseBtn=document.querySelector(".decrease")
const colorInput=document.getElementById("colorInput")
const applyBtn=document.querySelector(".apply")
const sentence=document.querySelector(".sentence")

let currentFontSize=16

applyBtn.addEventListener("click",()=>{
sentence.style.color=colorInput.value
})

addBtn.addEventListener("click",()=>{
    currentFontSize+=2
    sentence.style.fontSize=`${currentFontSize}px`
})

decreaseBtn.addEventListener("click",()=>{
    currentFontSize-=2
    sentence.style.fontSize=`${currentFontSize}px`
})