import { setDataInLocal, getDataFromLocal, calcFavoritesCount, calcBasketCount } from "./helpers.js";

const products = [
    {
      id: 1,
      title: "Backpack Leather Bag",
      description: "Leather Bag with luxurious physical design",
      price: 130.0,
      oldPrice: 340.0,
      isNew: true,
      discount: null,
      rating: 4.8,
      image: "./assets/photos/static/bag2.png",
    },
    {
      id: 2,
      title: "Shoulder Bag",
      description: "Leather Bag for everyday use",
      price: 130.0,
      oldPrice: 340.0,
      isNew: false,
      discount: 30,
      rating: 4, 
      image: "./assets/photos/static/bag3.png",
    },
    {
      id: 3,
      title: "Classic Shoulder Bag",
      description: "Stylish leather bag for daily use",
      price: 130.0,
      oldPrice: 340.0,
      isNew: false,
      discount: 30,
      rating: 4.7,
      image: "./assets/photos/static/bag1.png",
    },
    {
      id: 4,
      title: "Luxury Shoulder Bag",
      description: "Elegant leather bag with luxurious design",
      price: 130.0,
      oldPrice: 340.0,
      isNew: true,
      discount: null,
      rating: 5.0, 
      image: "./assets/photos/static/bag4.png",
    },
    {
      id: 5,
      title: "Handmade Clutch Bag",
      description: "Luxurious clutch bag made from leather",
      price: 130.0,
      oldPrice: 340.0,
      isNew: false,
      discount: 30,
      rating: 4.6,
      image: "./assets/photos/static/bag 5.png",
    },
    {
      id: 6,
      title: "Classic Backpack",
      description: "Durable and stylish leather backpack",
      price: 130.0,
      oldPrice: 340.0,
      isNew: true,
      discount: null,
      rating: 4.9, 
      image: "./assets/photos/static/bag 6.png",
    },
  ];

const cardMain=document.querySelector(".feProductsCardsMain")

const favs=getDataFromLocal("favs") || []
const basket=getDataFromLocal("basket") || []

const basketObj={
  productId: 2,
  quantity: 5
}

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

  function creatCard(arr){
    arr.forEach((elem)=>{
        const card=document.createElement("div")
        card.className="cards"

        const cardHeader=document.createElement("div")
        cardHeader.className="cardHeader"
        cardHeader.style.justifyContent="end"
        if(elem.isNew){
            const cardNew=document.createElement("div")
            cardNew.textContent="New"
            cardNew.className="newProduct"
            cardHeader.style.justifyContent="space-between"
            cardHeader.append(cardNew)
        }
        if(elem.discount){
          const cardDisc=document.createElement("div")
          cardDisc.textContent=`${elem.discount}%`
          cardDisc.className="cardDiscount"
          cardHeader.style.justifyContent="space-between"
          cardHeader.append(cardDisc)
        }

        const heartBtn=document.createElement("i")
        heartBtn.className="fa-regular fa-heart fa-xl"
        heartBtn.style.color="#DF4244"

     
        if(favs.includes(elem.id)){
             heartBtn.className="fa-solid fa-heart fa-xl"
        }else{
             heartBtn.className="fa-regular fa-heart fa-xl"
        }

        heartBtn.addEventListener("click",()=>{
            const found=favs.findIndex((p)=>p==elem.id)

            if(found==-1){
                favs.push(elem.id)
            }else{
                favs.splice(found,1) 
            }
            setDataInLocal("favs",favs)
            if(heartBtn.classList.contains("fa-regular")){
                heartBtn.classList.remove("fa-regular")
                heartBtn.classList.add("fa-solid")
            }else{
                heartBtn.classList.remove("fa-solid")
                heartBtn.classList.add("fa-regular")
            }
            calcFavoritesCount(favs)
        })

        cardHeader.append(heartBtn)

        const cardImgBar=document.createElement("div")
        cardImgBar.className="cardImgBar"
        const cardImg=document.createElement("img")
        cardImg.style.minHeight="120px"
        cardImg.style.minWidth="220px"
        cardImg.src=elem.image

        cardImgBar.append(cardImg)

        const starBar=document.createElement("div")
        starBar.className="starBar"
       
        const fullStars = Math.floor(elem.rating); 
        const halfStar = elem.rating % 1 >= 0.5;
    
       
        for (let i = 0; i < fullStars; i++) {
          const star = document.createElement("i");
          star.className = "fa-solid fa-star"; 
          star.style.color = "#FFD700"; 
          starBar.append(star);
        }
    
        if (halfStar) {
          const halfStarIcon = document.createElement("i");
          halfStarIcon.className = "fa-solid fa-star-half-stroke"; 
          halfStarIcon.style.color = "#FFD700"; 
          starBar.append(halfStarIcon);
        }
    
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 
        for (let i = 0; i < emptyStars; i++) {
          const emptyStar = document.createElement("i");
          emptyStar.className = "fa-regular fa-star"; 
          emptyStar.style.color = "#FFD700"; 
          starBar.append(emptyStar);
        }

        const cardTitle=document.createElement("h3")
        cardTitle.className="cardTitle"
        cardTitle.textContent=elem.title

        const cardpriceBar=document.createElement("div")
        cardpriceBar.className="cardpriceBar"
        const newPrice=document.createElement("h2")
        newPrice.textContent=`$${elem.price}`

        const oldPrice=document.createElement("p")
        oldPrice.textContent=`From $${elem.oldPrice}.00`

        cardpriceBar.append(newPrice,oldPrice)

        const cardsBtn=document.createElement("button")
        cardsBtn.className="cardsBtn"
        if(!basket.find((q)=>q.productId==elem.id)){
          cardsBtn.textContent="Add to cart"
        }else{
        cardsBtn.textContent="Already in Card"
        cardsBtn.style.backgroundColor="yellow"
        }

        cardsBtn.addEventListener("click",()=>{
            const found=basket.find((q)=>q.productId==elem.id)
            cardsBtn.textContent="Already in Card"
        cardsBtn.style.backgroundColor="yellow"
            if(!found){
              basket.push({productId: elem.id, quantity: 1})
            }
            else{
              found.quantity=found.quantity +1
            }
            calcBasketCount(basket)
           setDataInLocal("basket",basket)
        })

        card.append(cardHeader,cardImgBar,starBar,cardTitle,cardpriceBar,cardsBtn)
        cardMain.append(card)
    })
  }
creatCard(products)
calcBasketCount(basket)
calcFavoritesCount(favs)

  let currentIndex = 0;
const cardWidth = cardMain.querySelector(".cards").offsetWidth;
const totalCards = products.length;

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
    cardMain.style.transform = `translateX(-${currentIndex * (cardWidth + 24)}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    cardMain.style.transform = `translateX(-${currentIndex * (cardWidth + 24)}px)`;
  }
});