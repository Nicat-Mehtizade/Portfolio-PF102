const BASE_URL = "http://localhost:3000/";

const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");
  sideBar.classList.toggle("active");
  burgerBtn.classList.toggle("burgerActive");
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

const user = JSON.parse(localStorage.getItem("userInfo"));

const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");
const sideBarRegBtn = document.querySelector(".sidebarRegisterBtn");
const sideBarLoginBtn = document.querySelector(".sidebarLoginBtn");
const userBtn = document.querySelector(".user");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");
const sideBarUserBtn = document.querySelector(".sideBarUser");
const sideBarUserMenu = document.querySelector(".sideBarUserMenu");
const sideBarLogoutBtn = document.getElementById("sideBarLogoutBtn");
const dashboard=document.querySelector(".dashboard")
if (user) {
  registerBtn.style.display = "none";
  loginBtn.style.display = "none";
  sideBarRegBtn.style.display = "none";
  sideBarLoginBtn.style.display = "none";
  axios(`${BASE_URL}users/${user.userId}`)
    .then((res) => {
      const username = res.data.username;
      userBtn.innerHTML = `<img src="${res.data.profilePictureURL}"></img><span>${username}</span><i class="fa-solid fa-arrow-down"></i>`;
      userBtn.classList.add("userBtn");
      if(res.data.role=="admin"){
        dashboard.style.display="block"
      }else{
      dashboard.style.display="none"
      }
      sideBarUserBtn.innerHTML = `<img src="${res.data.profilePictureURL}"></img><span>${username}</span><i class="fa-solid fa-arrow-down"></i>`;
      sideBarUserBtn.classList.add("userBtn");
    })
    .catch((err) => {
      console.error("User info fetch error:", err);
    });
} else {
  loginBtn.style.display = "block";
  registerBtn.style.display = "block";
  sideBarRegBtn.style.display = "block";
  sideBarLoginBtn.style.display = "block";
  userBtn.style.display = "none";
  sideBarUserBtn.style.display = "none";
}

userBtn.addEventListener("click", () => {
  userMenu.classList.toggle("show");
});
sideBarUserBtn.addEventListener("click", () => {
  sideBarUserMenu.classList.toggle("show");
});
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "login.html";
});
sideBarLogoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "login.html";
});


  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
 
  const favsMain = document.querySelector(".favsMain");
  

  const fetchFavorites = async () => {
    try {
 
      const response = await fetch(`${BASE_URL}users/${userInfo.userId}`);
      const userData = await response.json();
  
      const eventsResponse = await axios.get(`${BASE_URL}events`);
      const events = eventsResponse.data;

      const favoriteDetails = userData.favorites.map(favorite => {
        return events.find(event =>event.id ==String(favorite.eventId) );
      });

      renderFavorites(favoriteDetails);
      
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  

  const renderFavorites = (favorites) => {
 
    favsMain.innerHTML = "";
    if (favorites.length === 0) {
        const noFavoritesMessage = document.createElement("p");
        noFavoritesMessage.textContent = "You don't have any favorites yet. Start adding some!";
        noFavoritesMessage.className = "noFavoritesMessage";  
        favsMain.append(noFavoritesMessage);
        return;
      }

    console.log(favorites);
    favorites.forEach((favorite) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-12 col-md-6 col-lg-3";

    const cardLink=document.createElement("a")
    cardLink.href = `details.html?id=${favorite.id}`;
    cardLink.className="cardLink"
    
    const cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";

    const cardImgWrapper = document.createElement("div");
    cardImgWrapper.className = "cardImgWrapper";

    const cardImg = document.createElement("img");
    cardImg.className = "cardImg";
    cardImg.src = favorite.posterURL;

    const cardFavBtn = document.createElement("a");
    cardFavBtn.innerHTML = `<i class="fa-solid fa-heart""></i>`;
    cardFavBtn.className = "cardFavBtn";



    cardFavBtn.addEventListener("click",(e)=>{
      const userInfo =JSON.parse(localStorage.getItem("userInfo"))
      e.preventDefault()
      if(!userInfo){
        Swal.fire(
          {
          icon: "error",
          title: "Oops...",
          text: "Please sign in and try again later!",
        },
      );
      setTimeout(() => {
      window.location.href="login.html"
      }, 1000);
      return
      }else{
        handleToggleWishlist(favorite.id)

      }
    })

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "buttonWrapper";

    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";

    const cardLeftSide = document.createElement("div");
    cardLeftSide.className = "cardLeftSide";

    const cardTitle = document.createElement("p");
    cardTitle.textContent = favorite.name;
    cardTitle.className = "cardTitle";

    const cardAge = document.createElement("p");
    cardAge.innerHTML = `<span class="label">Age Limit</span>: ${favorite.ageRestriction}`;
    cardAge.className = "cardAge";

    const cardCategory = document.createElement("p");
    cardCategory.innerHTML = `<span class="label">Category:</span> ${favorite.category}`;
    cardCategory.className = "cardCategory";

    const cardPrice = document.createElement("p");
    cardPrice.innerHTML = `<span class="label">Price:</span> ${favorite.price} $`;

    cardLeftSide.append(cardTitle, cardAge, cardCategory, cardPrice);
    cardContent.append(cardLeftSide);
    buttonWrapper.append(cardFavBtn);
    cardImgWrapper.append(cardImg, buttonWrapper);
    cardDiv.append(cardImgWrapper, cardContent);
    cardLink.append(cardDiv)
    cardWrapper.append(cardLink);
    favsMain.append(cardWrapper);
    });
  }; 

const handleToggleWishlist=async(cardId)=>{
  // console.log(cardId);
  axios(`${BASE_URL}users/${user.userId}`)
  .then((res)=>{
    // console.log(res.data.favorites);
    const {userId}=JSON.parse(localStorage.getItem("userInfo"))
    console.log(userId);
    const bool=res.data.favorites.find((q)=>q.eventId==+cardId)
  
  let uptadedFavs= res.data.favorites.filter((q)=>q.eventId !==+cardId)

    console.log(uptadedFavs);
  
    axios.patch(`${BASE_URL}users/${userId}`,{...user, favorites: uptadedFavs})
  })
  .catch((err)=>console.log(err))
  }
  
fetchFavorites();

function favCount(){
  axios(`${BASE_URL}users`)
  .then((res)=>{
    console.log(res.data)
    const user=JSON.parse(localStorage.getItem("userInfo"))
    const bool=res.data.filter((q)=>q.id==user.userId)
  let favCount=document.querySelector(".favCount")
  favCount.textContent=`(${bool[0].favorites.length})`
  })
  .catch((err)=>console.log(err))
}

favCount()
