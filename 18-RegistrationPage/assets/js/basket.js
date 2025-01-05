import { getDataFromLocal, setDataInLocal ,products} from "./localstoragehelpers.js"

const users=getDataFromLocal("users") || []
const userName=document.querySelector(".user")


const activeUser=users.find((user)=>user.isLogged==true)
const loginBtn=document.querySelector(".login")
const registerBtn=document.querySelector(".register")
const logoutBtn=document.querySelector(".logout")


if(activeUser){
    loginBtn.style.display="none"
    registerBtn.style.display="none"
    logoutBtn.style.display="block"
    userName.textContent=`USER: ${activeUser.username}`
  }else{
    loginBtn.style.display = "block";
    registerBtn.style.display = "block";
    logoutBtn.style.display = "none";
    userName.textContent = "USER: GUEST";
  }
  
  logoutBtn.addEventListener("click",()=>{
    if(activeUser){
      activeUser.isLogged=false
      setDataInLocal("users",users)
    }
    window.location.href="./signin.html"
  })

    const basketCardContainer=document.querySelector(".basketMain")

  // function createBasket(arr){
  //   arr.forEach((elem)=>{
  //       const basketCard=document.createElement("div")

  //       const basketImg=document.createElement("img")
  //       basketImg.setAttribute("src",elem.image)

  //       const basketTitle=document.createElement("p")
  //       basketTitle.textContent=elem.title

         

  //   })

    
  // }

  // createBasket(basket)