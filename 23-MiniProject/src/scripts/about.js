const BASE_URL="http://localhost:3000/"

const burgerBtn=document.querySelector(".burger")

burgerBtn.addEventListener("click",()=>{
const sideBar=document.querySelector(".sideBar")
sideBar.classList.toggle("active")
burgerBtn.classList.toggle("burgerActive")
})

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })
  })

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