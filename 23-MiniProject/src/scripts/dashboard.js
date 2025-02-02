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
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteEvent(event.id, trElem);
    });

    actionBtns.append(deleteBtn);

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
