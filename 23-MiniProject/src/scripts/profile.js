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

function findUser(){
  axios(`${BASE_URL}users`)
  .then((res)=>{
    const user=JSON.parse(localStorage.getItem("userInfo"))
    const bool=res.data.filter((q)=>q.id==user.userId)
    console.log(bool);
    fillUserInfo(bool[0])
  })
  .catch((err)=>console.log(err))
}

findUser()

function fillUserInfo(obj){
  const profilePicture=document.querySelector(".profile-picture")
  profilePicture.src=obj.profilePictureURL
  const username=document.querySelector(".username")
  username.textContent=obj.username

  const userRole=document.querySelector(".role")
  userRole.textContent=obj.role

  const email=document.querySelector(".email")
  email.innerHTML=`<i class="fas fa-envelope"></i> ${obj.email}`

  const balance=document.getElementById("balance")
  balance.innerHTML=`${obj.balance}$`

  const AccDate=document.getElementById("accountCreation")
  AccDate.textContent=`${obj.accountCreationDate}`

  const favoriteEvents=document.getElementById("favoriteEvents")
  favoriteEvents.textContent=obj.favorites.length

  const totalSpent=document.getElementById("totalSpent")
  totalSpent.textContent=`$${(obj.totalSpentMoney).toFixed(2)}`


  const passwordElement = document.getElementById("password")
  const togglePasswordButton = document.getElementById("togglePassword")
  let isPasswordVisible = false
  passwordElement.textContent = "*".repeat(obj.password.length)
  
  togglePasswordButton.addEventListener("click", () => {
    if (isPasswordVisible) {
      passwordElement.textContent = "*".repeat(obj.password.length)
      togglePasswordButton.innerHTML = '<i class="fas fa-eye fa-lg"></i>'
    } else {
      passwordElement.textContent = obj.password
      togglePasswordButton.innerHTML = '<i class="fas fa-eye-slash fa-lg"></i>'
    }
    isPasswordVisible = !isPasswordVisible
  })

  const changeInfoBtn=document.querySelector(".changeInfo")
  const saveChangesBtn = document.getElementById("saveChangesBtn");
  const profilePictureInput=document.getElementById("profilePictureInput")

changeInfoBtn.setAttribute("data-bs-toggle","modal")
changeInfoBtn.setAttribute("data-bs-target","#exampleModal")

changeInfoBtn.addEventListener("click",()=>{
  const usernameInput=document.getElementById("username")
  usernameInput.value=obj.username

  const emailInput=document.getElementById("email")
  emailInput.value=obj.email

  const passwordInput=document.getElementById("passwordInput")
  passwordInput.value=obj.password

})
}
profilePictureInput.addEventListener("change",(e)=>{
 const file=e.target.files[0]
 const profilePicture=document.querySelector(".profile-picture")
//  profilePicture.src=""

if(file && file.type.startsWith("image")){
  const reader= new FileReader()

  reader.readAsDataURL(file)

  reader.onload=function(){
    profilePicture.src=reader.result
  }
  reader.onerror=function(){
    console.log(reader.error);
  }
}

})
saveChangesBtn.addEventListener("click",async()=>{
  const userInfo=JSON.parse(localStorage.getItem("userInfo"))
  const profilePicture=document.querySelector(".profile-picture")

  const updatedProfilePicture=profilePicture.src
  user.profilePictureURL=""
  const uptadedUser={
    ...user,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("passwordInput").value,
    profilePictureURL: updatedProfilePicture,
  }

  try {
    await axios.patch(`${BASE_URL}users/${userInfo.userId}`, uptadedUser)

  } catch (error) {
    console.log(error);
  }
})

function loadPurchasedTickets() {
  const ticketContainer = document.getElementById("ticketContainer");
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) return; 

  axios
    .get(`${BASE_URL}tickets`) 
    .then((ticketResponse) => {
      const userTickets = ticketResponse.data.filter(ticket => ticket.userId === user.userId); 

      if (userTickets.length === 0) {
        ticketContainer.innerHTML = "<p>You haven't purchased any tickets yet.</p>";
        return;
      }

      axios.get(`${BASE_URL}events`).then((eventResponse) => {
        const events = eventResponse.data;

        ticketContainer.innerHTML = ""; 

        userTickets.forEach((ticket) => {
          const event = events.find(event => event.id == ticket.eventId);

          if (event) {
            const ticketElement = createTicketElement(ticket, event);
            ticketContainer.appendChild(ticketElement);
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching tickets:", error);
    });
}


function createTicketElement(ticket, event) {
  const ticketDiv = document.createElement("div");
  ticketDiv.className = "ticket";
  ticketDiv.innerHTML = `
    <h3>${event.name}</h3>
    <p><strong>Date:</strong> ${new Date(event.dateTime).toLocaleDateString()}</p>
    <p><strong>Time:</strong> ${new Date(event.dateTime).toLocaleTimeString()}</p>
    <p><strong>Price:</strong> $${ticket.price}</p>
    <p><strong>Quantity:</strong> ${ticket.quantity}</p>
    <p><strong>Total Price:</strong>$${ticket.price*ticket.quantity}</p>
    <div class="qr-code">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(ticket.ticketCode)}" alt="QR Code">
    </div>
  `;
  return ticketDiv;
}
document.addEventListener("DOMContentLoaded", () => {
  loadPurchasedTickets(); 
});

document.addEventListener("DOMContentLoaded", () => {
  const addCashBtn = document.getElementById("addCashBtn")
  const confirmAddCashBtn = document.getElementById("confirmAddCash")
  const addCashModal = new bootstrap.Modal(document.getElementById("addCashModal"))
  const creditCard = document.querySelector(".credit-card")

  const cardNumberInput = document.getElementById("cardNumber")
  const cardNameInput = document.getElementById("cardName")
  const expirationDateInput = document.getElementById("expirationDate")
  const cvvInput = document.getElementById("cvv")

  addCashBtn.addEventListener("click", () => {
    addCashModal.show()
  })

  cardNumberInput.addEventListener("input", (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    let formattedValue = "";
  
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }
  
    e.target.value = formattedValue;
  
    const cardNumberGroups = document.querySelectorAll(".number-group");
    const valueGroups = formattedValue.split(" ");
    cardNumberGroups.forEach((group, index) => {
      group.textContent = valueGroups[index] || "####";
    });
  });
  

  cardNameInput.addEventListener("input", (e) => {
    document.getElementById("cardHolderName").textContent = e.target.value.toUpperCase() || "FULL NAME"
  })

  expirationDateInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2)
    }
    e.target.value = value
    document.getElementById("cardExpiry").textContent = value || "MM/YY"
  })

  cvvInput.addEventListener("focus", () => {
    creditCard.classList.add("flipped")
  })

  cvvInput.addEventListener("blur", () => {
    creditCard.classList.remove("flipped")
  })

  cvvInput.addEventListener("input", (e) => {
    document.getElementById("cardCVV").textContent = e.target.value || "***"
  })

  confirmAddCashBtn.addEventListener("click", () => {
    const cardNumber = cardNumberInput.value
    const cardName = cardNameInput.value
    const expirationDate = expirationDateInput.value
    const cvv = cvvInput.value
    const amount = document.getElementById("amount").value

    if (!cardNumber || !cardName || !expirationDate || !cvv || !amount) {
      alert("Please fill in all fields")
      return
    }
    Swal.fire({
      title: `Successfully added $${amount} to your account!`,
      icon: "success",
      draggable: true
    });
    setTimeout(() => {
      addCashModal.hide()
      updateBalance()
    }, 1000)
  })

  function updateBalance() {
    const balanceElement = document.getElementById("balance")
    const currentBalance = Number.parseFloat(balanceElement.textContent.replace("$", ""))
    const newBalance = currentBalance + Number.parseFloat(document.getElementById("amount").value)
    balanceElement.textContent = `$${newBalance.toFixed(2)}`

    const user = JSON.parse(localStorage.getItem("userInfo"));

    const updatedUser = {
      ...user,
      balance: +newBalance.toFixed(2), 
    };

    axios.patch(`${BASE_URL}users/${user.userId}`, updatedUser)
    .then((response) => {
      console.log("Balance updated successfully", response.data)
    })
    .catch((error) => {
      console.error(error);
    });
  }
})


