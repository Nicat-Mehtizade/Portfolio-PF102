const searchInput=document.querySelector(".search")
const searchBtn=document.querySelector(".searchBtn")
const result=document.querySelector(".results")


searchBtn.addEventListener("click",(e)=>{
    const seacrhValue=searchInput.value
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${seacrhValue}`)
    .then((res)=>{
        console.log(res.data.meals)
        createCard(res.data.meals)
    })
    .catch((err)=>console.log(err))
})

function createCard(arr){
    result.innerHTML=""
    arr.forEach((meal)=>{
        const mealWrapper=document.createElement("div")
        mealWrapper.className="col-12 col-md-6 col-lg-4"

        const mealCard=document.createElement("div")
        mealCard.className="mealDiv"
        

        const mealImg=document.createElement("img")
        mealImg.src=meal.strMealThumb
        mealImg.className="mealImg"

        const mealTitle=document.createElement("p")
        mealTitle.textContent=meal.strMeal
        mealTitle.className="mealTitle"

        const mealBtn=document.createElement("button")
        mealBtn.textContent="Get Recipe"
        mealBtn.className="mealBtn"
        mealBtn.setAttribute("data-bs-toggle","modal")
        mealBtn.setAttribute("data-bs-target","#exampleModal")

        mealBtn.addEventListener("click",(e)=>{
            console.log(e.target);
            getMealDetails(meal.idMeal)
        })

        mealCard.append(mealImg,mealTitle,mealBtn)
        mealWrapper.append(mealCard)
        result.append(mealWrapper)
    })
}

function getMealDetails(mealID){
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res)=>{
        console.log(res.data.meals);
        const meal = res.data.meals[0];
        showDetail(meal)
    })
    .catch((err)=>console.log(err))
}
const modalBody=document.querySelector(".modal-body")

function showDetail(meal){
    modalBody.innerHTML=""

    const mealDetailDiv=document.createElement("div")
    mealDetailDiv.className="mealDetailDiv"

    const mealTitle=document.createElement("p")
    mealTitle.textContent=meal.strMeal
    mealTitle.className="detailTitle"

    const mealCategory=document.createElement("p")
    mealCategory.textContent=meal.strCategory
    mealCategory.className="detailCategory"

    const instructions=document.createElement("p")
    instructions.textContent="Instructions:"
    instructions.className="instructions"

    const mealIns=document.createElement("p")
    mealIns.textContent=meal.strInstructions
    mealIns.className="detailIns"

    const mealImg=document.createElement("img")
    mealImg.src=meal.strMealThumb
    mealImg.className="detailImg"

    const watchBtn=document.createElement("a")
    watchBtn.textContent="Watch Video"
    watchBtn.href=meal.strYoutube
    watchBtn.target="_blank"
    watchBtn.className="watchBtn"

    mealDetailDiv.append(mealTitle,mealCategory,instructions,mealIns,mealImg,watchBtn)
    modalBody.append(mealDetailDiv)
}

const searchMealİnput=document.querySelector(".searchMealName")
const searchMealNameBtn=document.querySelector(".searchMealNameBtn")

searchMealİnput.addEventListener("keyup",(e)=>{
    const mealCards=document.querySelectorAll(".mealDiv")
    mealCards.forEach((mealCard)=>{
        const mealTitle=mealCard.querySelector(".mealTitle").textContent.toLowerCase()
        if(mealTitle.includes(e.target.value.toLowerCase())){
            mealCard.parentElement.style.display="block"
        }
        else{
            mealCard.parentElement.style.display="none"
        }
    })
})

