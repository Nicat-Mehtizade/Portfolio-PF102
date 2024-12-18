const result=document.querySelector(".result")
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
const sum=document.querySelector(".sum")
const substract=document.querySelector(".substract")
const multiply=document.querySelector(".multiply")
const division=document.querySelector(".division")
const reset=document.querySelector(".reset")

sum.addEventListener("click",()=>{
    result.textContent=+number1.value + +number2.value
})

substract.addEventListener("click",()=>{
    result.textContent= +number1.value - +number2.value
})

multiply.addEventListener("click",()=>{
    result.textContent= +number1.value * +number2.value
})

division.addEventListener("click", ()=>{
    result.textContent= +number1.value / +number2.value
})

reset.addEventListener("click", ()=>{
    number1.value=""
    number2.value=""
    result.textContent="0"
})