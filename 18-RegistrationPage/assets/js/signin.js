import { setDataInLocal,getDataFromLocal } from "./localstoragehelpers.js";

const signInBtn=document.querySelector(".signInBtn")
const eyeBtn=document.querySelector(".fa-solid")
const errorMessage=document.querySelector(".validation")

function logInUser(){
    const usernameOrEmail=document.querySelector("#usernameOrEmail").value.trim()
    const password=document.querySelector("#password").value.trim() 

    const users=getDataFromLocal("users") || []

    const checkUser=users.some((user)=>(user.username==usernameOrEmail || user.email==usernameOrEmail) && user.password==password)
const activeUser=users.find((user)=>user.username==usernameOrEmail || user.email==usernameOrEmail)
    if(checkUser){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You have successfully logged in.",
            showConfirmButton: false,
            timer: 1500, 
          }).then((result)=>{
            window.location.href="./index.html"
            activeUser.isLogged=true
            setDataInLocal("users",users)
          });
    }else{
        errorMessage.textContent="Account information is incorrect"
        errorMessage.style.color="red"
    }
console.log(activeUser);

}


signInBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    logInUser()
})

eyeBtn.addEventListener("click",()=>{
    const password=document.querySelector("#password")
    if(eyeBtn.classList.contains("fa-eye")){
        eyeBtn.classList.remove("fa-eye")
        eyeBtn.classList.add("fa-eye-slash")
        password.type="text"
    }
    else{
        eyeBtn.classList.add("fa-eye")
        eyeBtn.classList.remove("fa-eye-slash")
        password.type="password"
    }
})