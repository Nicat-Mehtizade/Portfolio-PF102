const BASE_URL = "https://restcountries.com/v3.1/all";

const cardMain = document.querySelector(".cardsMain");
const darkBtn = document.querySelector(".navbarRightSide");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("filterSelect");

function getData(query = "") {
  axios
    .get(BASE_URL)
    .then((res) => {
      console.log(res.data);
      const searchCountry = query
        ? res.data.filter((info) =>
            info.name.common.toLowerCase().includes(query.toLowerCase())
          )
        : res.data;
      createCard(searchCountry);
    })
    .catch((err) => console.log(err));
}

let timeout;
searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.trim();
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    getData(query);
  }, 500);
});

getData();

function createCard(arr) {
  cardMain.innerHTML = "";
  arr.forEach((card) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-12 col-md-6 col-lg-4 col-xl-3";

    const cardLink = document.createElement("a");
    cardLink.className="detailLink"
    cardLink.setAttribute("href", `details.html?name=${card.name.common}`);

    const cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";
    cardDiv.style.transition = "0.3s";

    const cardImg = document.createElement("img");
    cardImg.src = card.flags.svg;
    cardImg.className = "cardImg";

    const cardTitle = document.createElement("p");
    cardTitle.textContent = card.name.common;
    cardTitle.className = "cardTitle";

    const cardPopulation = document.createElement("p");
    cardPopulation.innerHTML = `<span class="label">Population:</span> ${card.population.toLocaleString()}`;
    cardPopulation.className = "cardPopulation";

    const cardRegion = document.createElement("p");
    cardRegion.innerHTML = `<span class="label">Region:</span> ${card.region}`;
    cardRegion.className = "cardRegion";

    const cardCapital = document.createElement("p");
    cardCapital.innerHTML = `<span class="label">Capital:</span> ${card.capital}`;
    cardCapital.className = "cardCapital";

    cardDiv.append(cardImg, cardTitle, cardPopulation, cardRegion, cardCapital);
    cardLink.append(cardDiv);
    cardWrapper.append(cardLink);
    cardMain.append(cardWrapper);
  });
}

let mode=localStorage.getItem("mode") || "light"

if (mode === "dark") {
    document.body.classList.add("dark");
    darkBtn.innerHTML = `<i class="fa-regular fa-sun" style="color: #FFD43B;"></i><span>Light Mode</span>`;
}

darkBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        darkBtn.innerHTML = `<i class="fa-regular fa-moon"></i><span>Dark Mode</span>`;
        localStorage.setItem("mode", "light");
    } else {
        document.body.classList.add("dark");
        darkBtn.innerHTML = `<i class="fa-regular fa-sun" style="color: #FFD43B;"></i><span>Light Mode</span>`;
        localStorage.setItem("mode", "dark");
    }
    document.body.style.transition = "0.7s";
});

sortSelect.addEventListener("change", (e) => {
  if (e.target.value == "" || e.target.value == "all") {
    getData();
  } else {
    axios
      .get(BASE_URL)
      .then((res) => {
        const sortedCountries = res.data.filter(
          (c) => c.region.toLowerCase() == e.target.value.toLowerCase()
        );
        createCard(sortedCountries);
      })
      .catch((err) => console.log(err));
  }
});
