import { setDataInLocal, getDataFromLocal } from "./helpers.js";
import { calcFavoritesCount,calcBasketCount } from "./helpers.js";
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
const cardMain = document.querySelector(".discProductCardsMain");

const favs = getDataFromLocal("favs") || [];
const basket=getDataFromLocal("basket") || []

const prevBtn = document.querySelector(".discproduct-prev-btn");
const nextBtn = document.querySelector(".discproduct-next-btn");

function createDiscProductCard(arr) {
  arr.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "cards";

    const cardHeader = document.createElement("div");
    cardHeader.className = "cardHeader";
    cardHeader.style.justifyContent =
      elem.isNew || elem.discount ? "space-between" : "end";

    if (elem.isNew) {
      const newProduct = document.createElement("div");
      newProduct.textContent = "New";
      newProduct.className = "newProduct";
      cardHeader.append(newProduct);
    }

    if (elem.discount) {
      const discount = document.createElement("div");
      discount.textContent = `${elem.discount}%`;
      discount.className = "cardDiscount";
      cardHeader.append(discount);
    }

    const heartBtn = document.createElement("i");
    heartBtn.className = favs.includes(elem.id)
      ? "fa-solid fa-heart fa-xl"
      : "fa-regular fa-heart fa-xl";
    heartBtn.style.color = "#DF4244";

    heartBtn.addEventListener("click", () => {
      const index = favs.indexOf(elem.id);

      if (index === -1) {
        favs.push(elem.id);
      } else {
        favs.splice(index, 1);
      }
      setDataInLocal("favs", favs);
      heartBtn.className = heartBtn.classList.contains("fa-regular")
        ? "fa-solid fa-heart fa-xl"
        : "fa-regular fa-heart fa-xl";

        calcFavoritesCount(favs)
    });

    cardHeader.append(heartBtn);

    const cardImgBar = document.createElement("div");
    cardImgBar.className = "cardImgBar";

    const img = document.createElement("img");
    img.src = elem.image;
    cardImgBar.append(img);

    const starBar = document.createElement("div");
    starBar.className = "starBar";

    const fullStars = Math.floor(elem.rating);
    const halfStar = elem.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement("i");
      star.className = "fa-solid fa-star";
      star.style.color = "#FFD700";
      starBar.append(star);
    }

    if (halfStar) {
      const halfStarElem = document.createElement("i");
      halfStarElem.className = "fa-solid fa-star-half-stroke";
      halfStarElem.style.color = "#FFD700";
      starBar.append(halfStarElem);
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      const emptyStar = document.createElement("i");
      emptyStar.className = "fa-regular fa-star";
      emptyStar.style.color = "#FFD700";
      starBar.append(emptyStar);
    }

    const cardTitle = document.createElement("h3");
    cardTitle.className = "cardTitle";
    cardTitle.textContent = elem.title;

    const priceBar = document.createElement("div");
    priceBar.className = "cardpriceBar";

    const newPrice = document.createElement("h2");
    newPrice.textContent = `$${elem.price}`;

    const oldPrice = document.createElement("p");
    oldPrice.textContent = `From $${elem.oldPrice}`;

    priceBar.append(newPrice, oldPrice);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "cardsBtn";
           if(!basket.find((q)=>q.productId==elem.id)){
            addToCartBtn.textContent="Add to cart"
           }else{
            addToCartBtn.textContent="Already in Card"
            addToCartBtn.style.backgroundColor="yellow"
           }
   
           addToCartBtn.addEventListener("click",()=>{
               const found=basket.find((q)=>q.productId==elem.id)
               addToCartBtn.textContent="Already in Card"
               addToCartBtn.style.backgroundColor="yellow"
               if(!found){
                 basket.push({productId: elem.id, quantity: 1})
               }
               else{
                 found.quantity=found.quantity +1
               }
               calcBasketCount(basket)
              setDataInLocal("basket",basket)
           })

    card.append(
      cardHeader,
      cardImgBar,
      starBar,
      cardTitle,
      priceBar,
      addToCartBtn
    );
    cardMain.append(card);
  });
}

createDiscProductCard(products);
calcBasketCount(basket)
calcFavoritesCount(favs)

let currentIndex = 0;
const cardWidth = cardMain.querySelector(".cards").offsetWidth;
const totalCards = products.length;

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
    cardMain.style.transform = `translateX(-${
      currentIndex * (cardWidth + 24)
    }px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    cardMain.style.transform = `translateX(-${
      currentIndex * (cardWidth + 24)
    }px)`;
  }
});
