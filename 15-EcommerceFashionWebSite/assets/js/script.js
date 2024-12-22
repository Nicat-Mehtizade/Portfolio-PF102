const mainPhoto=document.querySelector(".mainPhoto")
const miniImg1=document.querySelector(".miniImg1")
const miniImg2=document.querySelector(".miniImg2")
const miniImg3=document.querySelector(".miniImg3")
const photoName=document.querySelector(".photoName")
const payDaySwitchBtn=document.querySelector(".payDaySwitchBtn")
const padDayLeftSide=document.querySelector(".padDayLeftSide")
const padDayRightSide=document.querySelector(".padDayRightSide")

miniImg1.addEventListener("click",()=>{
    if(miniImg1.classList.contains("photoChecked")){
        miniImg1.classList.remove("photoChecked")
    }
    else{
        miniImg1.classList.add("photoChecked")
        mainPhoto.setAttribute("src","./assets/photos/static/girl 1.png")
        photoName.textContent="Hoodies & Sweetshirt"
        if(miniImg2.classList.contains("photoChecked") || miniImg3.classList.contains("photoChecked")){
            miniImg2.classList.remove("photoChecked")
            miniImg3.classList.remove("photoChecked")
        }
    }
})

miniImg2.addEventListener("click",()=>{
    if(miniImg2.classList.contains("photoChecked")){
        miniImg2.classList.remove("photoChecked")
    }
    else{
        miniImg2.classList.add("photoChecked")
        mainPhoto.setAttribute("src","./assets/photos/static/girl 2.png")
        photoName.textContent="Tees & T-Shirt"
        if(miniImg1.classList.contains("photoChecked") || miniImg3.classList.contains("photoChecked")){
            miniImg1.classList.remove("photoChecked")
            miniImg3.classList.remove("photoChecked")
        }
    }
})

miniImg3.addEventListener("click",()=>{
    if(miniImg3.classList.contains("photoChecked")){
        miniImg3.classList.remove("photoChecked")
    }
    else{
        miniImg3.classList.add("photoChecked")
        mainPhoto.setAttribute("src","./assets/photos/static/girl 3.png")
        photoName.textContent="Coats & Parkas"
        if(miniImg1.classList.contains("photoChecked") || miniImg2.classList.contains("photoChecked")){
            miniImg1.classList.remove("photoChecked")
            miniImg2.classList.remove("photoChecked")
        }
    }
})

payDaySwitchBtn.addEventListener("click",()=>{
    if(padDayLeftSide.classList.contains("switchRight")||padDayRightSide.classList.contains("switchLeft")){
        padDayLeftSide.classList.remove("switchRight")
        padDayLeftSide.style.transition="0.3s"
        padDayRightSide.classList.remove("switchLeft")
        padDayRightSide.style.transition="0.3s"
        padDayRightSide.style.alignItems="start"
    }else{
    padDayLeftSide.classList.add("switchRight")
    padDayRightSide.classList.add("switchLeft")
    padDayRightSide.style.alignItems="end"

}
})