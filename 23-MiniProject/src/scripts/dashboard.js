const BASE_URL = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar nav a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute("data-section");

      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      sections.forEach((section) => section.classList.remove("active"));
      document.getElementById(targetSection).classList.add("active");
    });
  });

  const map = L.map("map").setView([40.4093, 49.8671], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([40.4093, 49.8671])
    .addTo(map)
    .bindPopup(
      "Tech Park Conference Hall<br>123 Silicon Avenue, Baku, Azerbaijan"
    )
    .openPopup();

  const ctx = document.getElementById("revenueChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Monthly Revenue",
          data: [5000, 8000, 12000, 15000, 20000, 30000],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Revenue",
        },
      },
    },
  });

  const eventName = document.getElementById("eventName");
  const eventDate = document.getElementById("eventDate");
  const venueName = document.getElementById("venueName");
  const venueAddress = document.getElementById("venueAddress");
  const venueCapacity = document.getElementById("venueCapacity");
  const organizer = document.getElementById("organizer");
  const description = document.getElementById("description");
  const ticketsAvailable = document.getElementById("ticketsAvailable");
  const category = document.getElementById("category");
  const eventPrice = document.getElementById("eventPrice");
  const ageRestriction = document.getElementById("ageRestriction");
  const posterURL = document.getElementById("posterURL");
  const duration = document.getElementById("duration");

  document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newEvent = {
      name: eventName.value,
      dateTime: eventDate.value,
      venueName: venueName.value,
      venueAddress: venueAddress.value,
      venueCapacity: +venueCapacity.value,
      organizer: organizer.value,
      description: description.value,
      ticketsAvailable: +ticketsAvailable.value,
      category: category.value,
      price: +eventPrice.value,
      ageRestriction: ageRestriction.value,
      posterURL: posterURL.value,
      duration: duration.value,
      soldTickets: 0,
    };

    axios
      .post(`${BASE_URL}events`, newEvent)
      .then((res) => {
        console.log(`Event added ${res.data}`);
      })
      .catch((err) => console.log(err));

    this.reset();
  });
});

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
const statNumber = document.querySelector(".stats-grid");
axios(`${BASE_URL}events`)
  .then((res) => {})
  .catch((err) => console.log(err));

const tBody = document.querySelector("tbody");

axios(`${BASE_URL}events`)
  .then((res) => {
    console.log(res.data);
    createTable(res.data);
  })
  .catch((err) => console.log(err));

function createTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((event) => {
    const trElem = document.createElement("tr");

    const eventName = document.createElement("td");
    eventName.textContent = event.name;

    const eventDate = document.createElement("td");
    eventDate.textContent = event.dateTime;

    const eventVanue = document.createElement("td");
    eventVanue.textContent = `${event.venueName} , ${event.venueAddress}`;

    const eventTicket = document.createElement("td");
    eventTicket.textContent = event.ticketsAvailable;

    const actionBtns = document.createElement("td");
    actionBtns.className="actionBtns"

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className="deleteBtn"

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className="editBtn"
    editBtn.style.marginRight = "10px";
    editBtn.addEventListener("click", () => {
      openEditModal(event);
    });

    deleteBtn.addEventListener("click", () => {
      deleteEvent(event.id, trElem);
    });

    actionBtns.append(editBtn,deleteBtn);

    trElem.append(eventName, eventDate, eventVanue, eventTicket, actionBtns);
    tBody.append(trElem);
  });
}

function deleteEvent(eventId, rowElement) {
  axios
    .delete(`${BASE_URL}events/${eventId}`)
    .then((res) => {
      rowElement.remove();
    })
    .catch((err) => console.log(err));
}

function uptadeStatistics() {
  axios(`${BASE_URL}events`)
    .then((res) => {
      const events = res.data;

      const totalEvents = events.length;
      const totalTicketSold = events.reduce(
        (acc, event) => acc + event.soldTickets,
        0
      );
      const totalRevenue = events.reduce(
        (acc, event) => acc + event.soldTickets * event.price,
        0
      );
      const upcomingEvents = events.filter(
        (event) => new Date(event.dateTime) > new Date()
      ).length;

      document.getElementById("totalEvents").textContent = totalEvents;
      document.getElementById("totalTicketsSold").textContent = totalTicketSold;
      document.getElementById(
        "totalRevenue"
      ).textContent = `$${totalRevenue.toLocaleString()}`;
      document.getElementById("upcomingEvents").textContent = upcomingEvents;

    })
    .catch((err) => console.log(err));
}



document.addEventListener("DOMContentLoaded", () => {
  uptadeStatistics(); 
});


const editModal = document.getElementById("editModal");
const closeModal = document.querySelector(".close");
const editEventForm = document.getElementById("editEventForm");
let currentEventId = null;


function openEditModal(event) {
  currentEventId = event.id;

  document.getElementById("editEventName").value = event.name;
  document.getElementById("editEventDate").value = event.dateTime.slice(0, 16);
  document.getElementById("editVenueName").value = event.venueName;
  document.getElementById("editVenueAddress").value = event.venueAddress;
  document.getElementById("editVenueCapacity").value = event.venueCapacity;
  document.getElementById("editOrganizer").value = event.organizer;
  document.getElementById("editDescription").value = event.description;
  document.getElementById("editTicketsAvailable").value = event.ticketsAvailable;
  document.getElementById("editCategory").value = event.category;
  document.getElementById("editPrice").value = event.price;
  document.getElementById("editAgeRestriction").value = event.ageRestriction;
  document.getElementById("editPosterURL").value = event.posterURL;
  document.getElementById("editDuration").value = event.duration;

  editModal.style.display = "block";
}

closeModal.addEventListener("click", () => {
  editModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === editModal) {
    editModal.style.display = "none";
  }
});


editEventForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const updatedData = {};

  if (document.getElementById("editEventName").value)
    updatedData.name = document.getElementById("editEventName").value;
  
  if (document.getElementById("editEventDate").value)
    updatedData.dateTime = document.getElementById("editEventDate").value;
  
  if (document.getElementById("editVenueName").value)
    updatedData.venueName = document.getElementById("editVenueName").value;
  
  if (document.getElementById("editVenueAddress").value)
    updatedData.venueAddress = document.getElementById("editVenueAddress").value;
  
  if (document.getElementById("editVenueCapacity").value)
    updatedData.venueCapacity = +document.getElementById("editVenueCapacity").value;
  
  if (document.getElementById("editOrganizer").value)
    updatedData.organizer = document.getElementById("editOrganizer").value;
  
  if (document.getElementById("editDescription").value)
    updatedData.description = document.getElementById("editDescription").value;
  
  if (document.getElementById("editTicketsAvailable").value)
    updatedData.ticketsAvailable = +document.getElementById("editTicketsAvailable").value;
  
  if (document.getElementById("editCategory").value)
    updatedData.category = document.getElementById("editCategory").value;
  
  if (document.getElementById("editPrice").value)
    updatedData.price = +document.getElementById("editPrice").value;
  
  if (document.getElementById("editAgeRestriction").value)
    updatedData.ageRestriction = document.getElementById("editAgeRestriction").value;
  
  if (document.getElementById("editPosterURL").value)
    updatedData.posterURL = document.getElementById("editPosterURL").value;
  
  if (document.getElementById("editDuration").value)
    updatedData.duration = document.getElementById("editDuration").value;

  if (Object.keys(updatedData).length === 0) {
    console.log("Heç bir dəyişiklik edilməyib.");
    return;
  }

  axios
    .patch(`${BASE_URL}events/${currentEventId}`, updatedData)
    .then((res) => {
      console.log("Event successfully updated:", res.data);
    })
    .catch((err) => console.error("Error updating event:", err));
});
