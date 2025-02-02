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
const dashboard = document.querySelector(".dashboard");
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
      if (res.data.role == "admin") {
        dashboard.style.display = "block";
      } else {
        dashboard.style.display = "none";
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

function favCount() {
  axios(`${BASE_URL}users`)
    .then((res) => {
      //   console.log(res.data);
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const bool = res.data.filter((q) => q.id == user.userId);
      let favCount = document.querySelector(".favCount");
      favCount.textContent = `(${bool[0].favorites.length})`;
    })
    .catch((err) => console.log(err));
}

favCount();

const mainCard = document.querySelector(".event");

axios(`${BASE_URL}events`)
  .then((res) => {
    // console.log(res.data);
    createCard(res.data);
  })
  .catch((err) => console.log(err));

function createCard(arr) {
  mainCard.innerHTML = "";
  arr.forEach((card) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-12 col-md-6 col-lg-3";

    const cardLink=document.createElement("a")
    cardLink.href = `details.html?id=${card.id}`;
    cardLink.className="cardLink"

    const cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";

    const cardImgWrapper = document.createElement("div");
    cardImgWrapper.className = "cardImgWrapper";

    const cardImg = document.createElement("img");
    cardImg.className = "cardImg";
    cardImg.src = card.posterURL;

    const cardFavBtn = document.createElement("a");
    cardFavBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    cardFavBtn.className = "cardFavBtn";
    cardFavBtn.setAttribute("data-id", card.id);


    cardFavBtn.addEventListener("click", (e) => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      e.preventDefault()
      if (!userInfo) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please sign in and try again later!",
        });
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
        return;
      } else {
        handleToggleWishlist(card.id);
      }
    });

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "buttonWrapper";

    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";

    const cardLeftSide = document.createElement("div");
    cardLeftSide.className = "cardLeftSide";

    const cardTitle = document.createElement("p");
    cardTitle.textContent = card.name;
    cardTitle.className = "cardTitle";

    const cardAge = document.createElement("p");
    cardAge.innerHTML = `<span class="label">Age Limit</span>: ${card.ageRestriction}`;
    cardAge.className = "cardAge";

    const cardCategory = document.createElement("p");
    cardCategory.innerHTML = `<span class="label">Category:</span> ${card.category}`;
    cardCategory.className = "cardCategory";

    const cardPrice = document.createElement("p");
    cardPrice.innerHTML = `<span class="label">Price:</span> ${card.price} $`;

    cardLeftSide.append(cardTitle, cardAge, cardCategory, cardPrice);
    cardContent.append(cardLeftSide);
    buttonWrapper.append(cardFavBtn);
    cardImgWrapper.append(cardImg, buttonWrapper);
    cardDiv.append(cardImgWrapper, cardContent);
    cardLink.append(cardDiv)
    cardWrapper.append(cardLink);
    mainCard.append(cardWrapper);
  });
}

const handleToggleWishlist = async (cardId) => {
  // console.log(cardId);
  axios(`${BASE_URL}users/${user.userId}`)
    .then((res) => {
      const { userId } = JSON.parse(localStorage.getItem("userInfo"));
      console.log(userId);
      const bool = res.data.favorites.find((q) => q.eventId == +cardId);

      let uptadedFavs;
      if (!bool) {
        uptadedFavs = [
          ...res.data.favorites,
          { id: res.data.favorites.length + 1, eventId: +cardId },
        ];
      } else {
        uptadedFavs = res.data.favorites.filter((q) => q.eventId !== +cardId);
      }
      console.log(uptadedFavs);

      axios.patch(`${BASE_URL}users/${userId}`, {
        ...user,
        favorites: uptadedFavs,
      });
    })
    .catch((err) => console.log(err));
};
const select = document.getElementById("select");

select.addEventListener("change", (e) => {
  axios(`${BASE_URL}events`)
    .then((res) => {
      let sortedCards = res.data;
      if (e.target.value !== "all") {
        sortedCards = res.data.filter(
          (c) => c.category.toLowerCase() == e.target.value.toLowerCase()
        );
      }
      createCard(sortedCards);
    })
    .catch((err) => console.log(err));
});

function fillSelectOptions() {
  axios(`${BASE_URL}events`)
    .then((res) => {
      const eventData = res.data;
      select.innerHTML = `<option value="all">All Categories</option>`;
      eventData.forEach((event) => {
        const option = document.createElement("option");
        option.textContent = event.category;
        option.value = event.category;
        select.append(option);
      });
    })
    .catch((err) => console.log(err));
}

fillSelectOptions();

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const searchIcon = document.querySelector(".searchBar i");
  const selectIcon = document.querySelector(".selectWrapper i");

  searchInput.addEventListener("focus", () => {
    searchIcon.style.color = "#6366f1";
  });

  searchInput.addEventListener("blur", () => {
    if (!searchInput.value) {
      searchIcon.style.color = "#999";
    }
  });

  categorySelect.addEventListener("focus", () => {
    selectIcon.style.color = "#6366f1";
  });

  categorySelect.addEventListener("blur", () => {
    selectIcon.style.color = "#999";
  });

  categorySelect.addEventListener("mouseover", () => {
    selectIcon.style.transform = "translateY(-50%) rotate(180deg)";
  });

  categorySelect.addEventListener("mouseout", () => {
    selectIcon.style.transform = "translateY(-50%) rotate(0deg)";
  });

  let typingTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(typingTimer);
    searchIcon.classList.add("fa-bounce");

    typingTimer = setTimeout(() => {
      searchIcon.classList.remove("fa-bounce");
    }, 500);
  });

  let timeout;
  searchInput.addEventListener("keyup", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      axios(`${BASE_URL}events`).then((res) => {
        const searchedEvents = res.data.filter((q) =>
          q.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        );
        createCard(searchedEvents);
      });
    }, 500);  
  });
  
})


function checkFav(){
  const loggedUser=JSON.parse(localStorage.getItem("userInfo"))
  axios(`${BASE_URL}users/${loggedUser.userId}`)
  .then((res)=>{
    const user=res.data
      axios(`${BASE_URL}events`)
      .then((res)=>{
        const events=res.data

        document.querySelectorAll(".cardFavBtn").forEach((btn)=>{
          btn.innerHTML=`<i class="fa-regular fa-heart"></i>`;
        })
          user.favorites.forEach((fav)=>{
            const findFav=events.find((event)=>+event.id===fav.eventId)
            if(findFav){
              const favBtn=document.querySelector(`.cardFavBtn[data-id="${findFav.id}"]`)
              if(favBtn){
                favBtn.innerHTML = `<i class="fa-solid fa-heart""></i>`;
                
              }
            }
          })
       
      })
      .catch((err)=>console.log(err))
    
  })
  .catch((err)=>console.log(err))
}

checkFav()