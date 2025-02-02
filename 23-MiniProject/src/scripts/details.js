const BASE_URL = "http://localhost:3000/";
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("id");

function formatDateTime(dateTimeString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateTimeString).toLocaleDateString("en-US", options);
}
function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

function createEventDetails(event) {
  const eventDetails = document.getElementById("eventDetails");
  eventDetails.className = "eventDiv";
  eventDetails.innerHTML = "";

  const eventImage = createElement("div", "event-image");
  const img = createElement("img");
  img.className = "eventImg";
  img.src = event.posterURL;
  img.alt = event.name;
  eventImage.appendChild(img);

  const eventInfo = createElement("div", "event-info");
  eventInfo.className = "BigDiv";
  const title = createElement("h1", "", event.name);
  eventInfo.appendChild(title);

  const infoItems = [
    { label: "Date & Time", value: formatDateTime(event.dateTime) },
    { label: "Duration", value: event.duration },
    { label: "Venue", value: event.venueName },
    { label: "Address", value: event.venueAddress },
    { label: "Organizer", value: event.organizer },
    { label: "Category", value: event.category },
    { label: "Age Restriction", value: event.ageRestriction },
    { label: "Price", value: `$${event.price}` },
  ];

  infoItems.forEach((item) => {
    const infoItem = createElement("div", "info-item");
    const label = createElement("span", "label", `${item.label}: `);
    infoItem.appendChild(label);
    infoItem.appendChild(document.createTextNode(item.value));
    eventInfo.appendChild(infoItem);
  });

  const description = createElement("div", "description");
  const descLabel = createElement("span", "label", "Description:");
  const descText = createElement("p", "", event.description);
  description.appendChild(descLabel);
  description.appendChild(descText);
  eventInfo.appendChild(description);

  const ticketInfo = createElement("div", "ticket-info");
  const ticketTitle = createElement("h2", "", "Ticket Information");
  const availableTickets = createElement("p", "", `Tickets Available: `);
  const availableSpan = createElement("span", "", event.ticketsAvailable);
  availableSpan.id = "ticketsAvailable";
  availableTickets.appendChild(availableSpan);
  const soldSpan = createElement("span", "", event.soldTickets);
  soldSpan.id = "soldTickets";

  const ticketCountWrapper = createElement("div", "ticket-count-wrapper");
  
  const ticketCountLabel = createElement("span", "ticket-count-label", "Quantity: ");
  const minusButton = createElement("button", "ticket-minus", "-");
  const ticketCount = createElement("span", "ticket-count", "1");
  const plusButton = createElement("button", "ticket-plus", "+");

  ticketCountWrapper.appendChild(ticketCountLabel);
  ticketCountWrapper.appendChild(minusButton);
  ticketCountWrapper.appendChild(ticketCount);
  ticketCountWrapper.appendChild(plusButton);

  let selectedQuantity = 1;

  minusButton.addEventListener("click", () => {
    if (selectedQuantity > 1) {
      selectedQuantity--;
      ticketCount.textContent = selectedQuantity;
    }
  });

  plusButton.addEventListener("click", () => {
    if (selectedQuantity < event.ticketsAvailable) {
      selectedQuantity++;
      ticketCount.textContent = selectedQuantity;
    }
  });


  const buyButton = createElement("button", "", "Buy Ticket");
  buyButton.id = "buyTicketBtn";

  buyButton.addEventListener("click", function () {
    const userId = JSON.parse(localStorage.getItem("userInfo")).userId;
    
    axios.get(`${BASE_URL}users/${userId}`)
      .then((userRes) => {
        const user = userRes.data;
        const totalPrice = selectedQuantity * event.price;
  
        if (user.balance >= totalPrice) {
          Swal.fire({
            title: "Are you sure?",
            text: `You are about to purchase ${selectedQuantity} tickets for $${totalPrice}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I buy it!"
          }).then((result) => {
            if (result.isConfirmed) {
              event.ticketsAvailable -= selectedQuantity;
              event.soldTickets += selectedQuantity;
              
              axios.get(`${BASE_URL}tickets`)
                .then((res) => {
                  const tickets = res.data;
  
                  function generateRandomString(length) {
                    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    let result = "";
                    for (let i = 0; i < length; i++) {
                      result += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    return result;
                  }
  
                  function generateTicketCode() {
                    const nextNumber = String(tickets.length + 1).padStart(3, "0");
                    const randomPart = generateRandomString(5);
                    return `${event.name.slice(0, 2).toUpperCase()}-${nextNumber}-${randomPart}`;
                  }
  
                  const newTicket = {
                    userId: userId,
                    eventId: +event.id,
                    quantity: selectedQuantity,
                    price: totalPrice,
                    purchaseDate: new Date().toISOString(),
                    ticketCode: generateTicketCode(),
                  };
  
                  const updatedBalance = user.balance - totalPrice;
  
                  axios.patch(`${BASE_URL}users/${userId}`, { balance: updatedBalance })
                    .then(() => {
                      axios.post(`${BASE_URL}tickets`, newTicket)
                        .then(() => {
                          axios.patch(`${BASE_URL}events/${event.id}`, {
                            ...event,
                            ticketsAvailable: event.ticketsAvailable,
                            soldTickets: event.soldTickets
                          });
  
                          document.getElementById("ticketsAvailable").textContent = event.ticketsAvailable;
  
                          Swal.fire({
                            title: "Purchased!",
                            text: `${selectedQuantity} tickets have been successfully purchased. Your new balance is $${updatedBalance}.`,
                            icon: "success",
                          });
                        }).catch((err) => console.log(err));
                    }).catch((err) => console.log(err));
                });
            }
          });
        } else {
          Swal.fire({
            title: "Insufficient Balance",
            text: "You don't have enough balance to purchase these tickets.",
            icon: "error",
          });
        }
      }).catch((err) => console.log(err));
  });
  
  ticketInfo.appendChild(ticketTitle);
  ticketInfo.appendChild(availableTickets);
  ticketInfo.appendChild(ticketCountWrapper);
  ticketInfo.appendChild(buyButton);


  eventInfo.appendChild(ticketInfo);

  eventDetails.appendChild(eventImage);
  eventDetails.appendChild(eventInfo);
}

axios(`${BASE_URL}events?id=${eventId}`)
  .then((res) => {
    createEventDetails(res.data[0]);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

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