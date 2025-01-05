const heroMainLeftSide=document.querySelector(".heroMainLeftSide")
const heroImg=document.querySelector(".heroPhoto")
const heroDisc=document.querySelector(".heroDisc")
const heroTitle=document.querySelector(".heroTitle")
const heroDesc=document.querySelector(".heroDesc")

const circlesDiv=document.createElement("div")

circlesDiv.className="circleContainer"
const circle1=document.createElement("div")
circle1.className="circleChosen"

const circle2=document.createElement("div")
circle2.className="circle"

const circle3=document.createElement("div")
circle3.className="circle"

circlesDiv.append(circle1, circle2,circle3)
heroMainLeftSide.append(circlesDiv)

circle1.addEventListener("click",()=>{
    circle1.classList.add("circleChosen")
  if(circle2.classList.contains("circleChosen")||circle3.classList.contains("circleChosen")){
    circle2.classList.replace("circleChosen","circle")
    circle3.classList.replace("circleChosen","circle")
  }
  circle1.style.transition="0.3s"
    heroDisc.textContent="30% off"
    heroImg.src= "./assets/photos/static/hero section bag photo.png"

})
circle2.addEventListener("click",()=>{
    circle2.classList.add("circleChosen")
    if(circle1.classList.contains("circleChosen")||circle3.classList.contains("circleChosen")){
        circle1.classList.replace("circleChosen","circle")
        circle3.classList.replace("circleChosen","circle")
      }
  circle2.style.transition="0.3s"
    heroDisc.textContent="20% off"
    heroImg.src= "./assets/photos/static/bag1.png"

})
circle3.addEventListener("click",()=>{
    circle3.classList.add("circleChosen")
    if(circle1.classList.contains("circleChosen")||circle2.classList.contains("circleChosen")){
        circle1.classList.replace("circleChosen","circle")
        circle2.classList.replace("circleChosen","circle")
      }
  circle3.style.transition="0.3s"
    heroDisc.textContent="35% off"
    heroImg.src= "./assets/photos/static/bag2.png"
})