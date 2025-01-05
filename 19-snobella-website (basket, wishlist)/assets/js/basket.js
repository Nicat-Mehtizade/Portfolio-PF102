import { getDataFromLocal, setDataInLocal,calcBasketCount,calcFavoritesCount } from "./helpers.js";
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
const basket = getDataFromLocal("basket")||[];
const favs=getDataFromLocal("favs")||[]

const tBody = document.querySelector("tbody");
const clearBtn=document.querySelector(".clear")

const createBasket = (basketArr) => {
  tBody.innerHTML = "";
  basket.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);

    const trElem = document.createElement("tr");

    const tdPhoto = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdUnitPrice = document.createElement("td");
    const tdInc = document.createElement("td");
    const tdQuantity = document.createElement("td");
    const tdDec = document.createElement("td");
    const tdSubTotal = document.createElement("td");
    const tdRemove = document.createElement("td");

    const photo = document.createElement("img");
    photo.setAttribute("src", product.image);
    photo.setAttribute("alt", product.title);
    photo.setAttribute("width", 100);

    tdTitle.textContent = product.title;
    tdUnitPrice.textContent = `${product.price}$`;

    const incBtn = document.createElement("button");
    incBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    incBtn.className = "btn btn-outline-warning";

    incBtn.addEventListener("click", (e) => {
      const found = basket.find((q) => q.productId == item.productId);
      found.quantity++;
      setDataInLocal("basket", basket);
      calcTotalPrice(basket);
      createBasket(basket);
    });

    const decBtn = document.createElement("button");
    decBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
    decBtn.className = "btn btn-outline-warning";

    decBtn.addEventListener("click", (e) => {
      const found = basket.find((q) => q.productId == item.productId);
      if(found.quantity>1){
        found.quantity--;
      }
      setDataInLocal("basket", basket);
      calcTotalPrice(basket);
      createBasket(basket);
    });

    tdQuantity.textContent = item.quantity;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
    removeBtn.className = "btn btn-outline-danger";
    removeBtn.addEventListener("click", (e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const idx = basket.findIndex((q) => q.productId == item.productId);
                basket.splice(idx, 1);
                e.target.closest("tr").remove();
                calcTotalPrice(basket);
                setDataInLocal("basket", basket);
                calcBasketCount(basket)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    
    });

    tdSubTotal.textContent = `${(item.quantity * product.price).toFixed(2)}$`;

    tdRemove.append(removeBtn);
    tdDec.append(decBtn);
    tdInc.append(incBtn);
    tdPhoto.append(photo);
    trElem.append(
      tdPhoto,
      tdTitle,
      tdUnitPrice,
      tdInc,
      tdQuantity,
      tdDec,
      tdSubTotal,
      tdRemove
    );
    tBody.appendChild(trElem);
  });
};

clearBtn.addEventListener("click",()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            basket.length=0
            setDataInLocal("basket",basket)
            createBasket(basket);
            calcTotalPrice(basket);
            calcBasketCount(basket)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    
})

const calcTotalPrice = (basketArr) => {
  const totalPrice = document.querySelector(".total-price");
  const total = basketArr.reduce((sum, curr) => {
    const product = products.find((p) => p.id == curr.productId);
    return sum + curr.quantity * product.price;
  }, 0);
  totalPrice.textContent = `${total.toFixed(2)}$`;
};
calcTotalPrice(basket);
calcBasketCount(basket)
calcFavoritesCount(favs)
createBasket(basket);
