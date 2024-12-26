import { setDataInLocal,getDataFromLocal } from "./localstoragehelpers.js";



const signUpBtn=document.querySelector(".signupBtn")
const registerForm=document.querySelector(".registerForm")
const validation=document.querySelector(".validation")
const eyeBtn=document.querySelector(".fa-solid")
const loader = document.getElementById("loader");
const container = document.querySelector(".container")


const users=[]


function RegisterUser(){
    
    const username=document.querySelector("#username").value.trim()
    const email=document.querySelector("#email").value.trim()
    const password=document.querySelector("#password").value.trim()

    const users=getDataFromLocal("users") || []

    const sameUser= users.some((user)=>   
        user.username===username || user.email===email
    )
    
    if(sameUser){
        validation.textContent="username or email already exist"
        validation.style.color="red"
        resetInput()
        return
    }else{
        window.location.href="./signin.html"
    }

    const user={
        id:Date.now(),
        username,
        email,
        password,
    }


users.push(user)
setDataInLocal("users",users)
registerForm.reset()
resetInput()

}

signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    validation.textContent = "";
    RegisterUser()
    resetInput()
})

function resetInput(){
    username.value=""
    email.value=""
    password.value=""
}

eyeBtn.addEventListener("click",()=>{
    const password=document.querySelector("#password")
    if(eyeBtn.classList.contains("fa-eye")){
        eyeBtn.classList.remove("fa-eye")
        eyeBtn.classList.add("fa-eye-slash")
        password.type="text"
    }else{
        eyeBtn.classList.add("fa-eye")
        eyeBtn.classList.remove("fa-eye-slash")
        password.type="password"
    }
})
