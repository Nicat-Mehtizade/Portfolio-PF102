const products = [
    {
      id: 1,
      title: "Modern Desk Lamp",
      category: "Home & Decor",
      description:
        "Sleek and adjustable desk lamp with LED lighting. Perfect for reading or working late.",
      price: 49.99,
      imageUrl: "https://i.ebayimg.com/images/g/KNMAAOSw2uViCwc6/s-l1600.jpg",
    },
    {
      id: 2,
      title: "Men's Waterproof Jacket",
      category: "Fashion",
      description:
        "Durable and stylish jacket designed to withstand harsh weather conditions. Perfect for outdoor activities.",
      price: 89.99,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8P5lugrf37_DPSTvwWviDJc-Lnib5XJIOA&usqp=CAU",
    },
    {
      id: 4,
      title: "Essential Oil Diffuser",
      category: "Wellness",
      description:
        "Aromatherapy diffuser that promotes relaxation and wellness. Create a calming atmosphere at home.",
      price: 34.99,
      imageUrl: "https://i.ebayimg.com/images/g/vdMAAOSwcHxlS70H/s-l1200.webp",
    },
    {
      id: 5,
      title: "Professional Chef's Knife",
      category: "Kitchen",
      description:
        "High-quality chef's knife crafted for precision and durability. Ideal for cooking enthusiasts.",
      price: 69.99,
      imageUrl:
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      title: "Portable Bluetooth Speaker",
      category: "Electronics",
      description:
        "Compact and powerful speaker with Bluetooth connectivity. Enjoy music anywhere, anytime.",
      price: 79.99,
      imageUrl:
        "https://www.artis.in/cdn/shop/products/1_f5b3377c-c870-420f-bc6a-5cd4b3a5a7c7.jpg?v=1653639993",
    },
    {
      id: 7,
      title: "Women's Running Shoes",
      category: "Sportswear",
      description:
        "Comfortable and lightweight running shoes designed for active women. Perfect for workouts or casual wear.",
      price: 59.99,
      imageUrl:
        "https://therunhub.ie/cdn/shop/files/2_02a8e41e-fe2b-42c6-b6fb-f18306855939_360x@2x.png?v=1695040307",
    },
    {
      id: 8,
      title: "Vintage Polaroid Camera",
      category: "Photography",
      description:
        "Classic instant camera that captures timeless moments. Embrace the nostalgia of instant photography.",
      price: 129.99,
      imageUrl:
        "https://thirdmanrecords.com/cdn/shop/products/1_polaroid_camera.jpg?v=1611942552",
    },
    {
      id: 9,
      title: "Gaming Laptop",
      category: "Computers",
      description:
        "A high-performance gaming laptop designed for serious gamers.",
      price: 1299.99,
      imageUrl:
        "https://media.karousell.com/media/photos/products/2023/8/22/dell_g15_gaming_laptop_1692703264_340ce827_progressive.jpg",
    },
    {
      id: 10,
      title: "Cookware Set",
      category: "Home & Kitchen",
      description:
        "Complete cookware set with non-stick coating for effortless cooking and easy cleaning.",
      price: 149.99,
      imageUrl:
        "https://assets.tramontina.com.br/upload/tramon/imagens/USA/80110029PDM001G.jpg",
    },
  ];
  
const tBody=document.querySelector("tbody")
const searchInput=document.querySelector("#searchInput")
const ascBtn=document.querySelector(".ascBtn")
const descBtn=document.querySelector(".descBtn")
const defaultBtn=document.querySelector(".defaultBtn")
const ascTitleBtn=document.querySelector(".ascTitleBtn")
const descTitleBtn=document.querySelector(".descTitleBtn")
const sortSelect=document.getElementById("sortSelect")

creatList()

function creatList(items=products){
    tBody.innerHTML=""
    items.forEach((elem)=>{
    
    const trElem=document.createElement("tr")

    const imgTd=document.createElement("img")
    imgTd.setAttribute("src",elem.imageUrl)
    imgTd.setAttribute("width",100)

    const listIdTd=document.createElement("td")
    listIdTd.textContent=elem.id

    const titleTd=document.createElement("td")
    titleTd.textContent=elem.title

    const categoryTd=document.createElement("td")
    categoryTd.textContent=elem.category

    const descTd=document.createElement("td")
    descTd.textContent=elem.description

    const priceTd=document.createElement("td")
    priceTd.textContent=elem.price

    trElem.append(imgTd, listIdTd, titleTd, categoryTd, descTd, priceTd)
    tBody.append(trElem)

    })


}

ascBtn.addEventListener("click",()=>{
    const sortedProducts=products.toSorted((a,b)=> a.price-b.price)
    creatList(sortedProducts)
    // console.log(sortedProducts);
})

descBtn.addEventListener("click",()=>{
    const sortedProducts=products.toSorted((a,b)=>b.price-a.price)
    creatList(sortedProducts)
})

defaultBtn.addEventListener("click",()=>{
    creatList(products)
})


searchInput.addEventListener("input",(e)=>{
    const filtered=products.filter((elem)=>
        elem.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    creatList(filtered)
})

ascTitleBtn.addEventListener("click",()=>{
  const sortedProducts=products.toSorted((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
  creatList(sortedProducts)
})


  descTitleBtn.addEventListener("click",()=>{
    const sortedProducts=products.toSorted((a,b)=>b.title.toLowerCase().localeCompare(a.title.toLowerCase())
  )
  creatList(sortedProducts)

  })

  function createCategory (){
    products.forEach((elem)=>{
      const option=document.createElement("option")
      option.textContent=elem.category
      option.setAttribute("value", elem.category)

      sortSelect.append(option)
    })
  }

  createCategory()

  sortSelect.addEventListener("change",(e)=>{
    const filteredProducts=products.filter((elem)=>elem.category.toLocaleLowerCase()==e.target.value.toLocaleLowerCase())
    creatList(filteredProducts)
  })