const BASE_URL = "https://restcountries.com/v3.1";

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const countryName = urlParams.get("name");
  console.log(countryName);
  if (countryName) {
    axios
      .get(`${BASE_URL}/name/${countryName}`)
      .then((res) => {
        const country = res.data[0];
        console.log(country);
        createDetail(country);
      })
      .catch((err) => console.log(err));
  }
});

const detailsMain = document.querySelector(".detailsMain");
const darkBtn = document.querySelector(".navbarRightSide");
const backBtn = document.querySelector(".backBtn");

function createDetail(obj) {
  const cardMainDiv = document.createElement("div");
  cardMainDiv.className = "detailsMainDiv";

  const cardImg = document.createElement("img");
  cardImg.src = obj.flags.svg;
  cardImg.alt = obj.flags.alt;
  cardImg.className = "detailsImg";

  const cardTitle = document.createElement("h1");
  cardTitle.textContent = obj.name.common;

  const cardInfos = document.createElement("div");
  cardInfos.className = "detailDiv";

  const cardName = document.createElement("p");
  const nativeName = Object.keys(obj.name.nativeName);
  let nativeText = "";
  nativeName.forEach((key) => {
    const native = obj.name.nativeName[key];
    nativeText = native;
  });
  cardName.innerHTML = `<span class="label">Native Name:</span> ${nativeText.official}`;

  const cardPopulation = document.createElement("p");
  cardPopulation.innerHTML = `<span class="label">Population:</span> ${obj.population}`;

  const cardRegion = document.createElement("p");
  cardRegion.innerHTML = `<span class="label">Region:</span> ${obj.region}`;

  const cardSubRegion = document.createElement("p");
  cardSubRegion.innerHTML = `<span class="label">Sub Region:</span> ${obj.subregion}`;

  const cardCapital = document.createElement("p");
  cardCapital.innerHTML = `<span class="label">Capital:</span> ${obj.capital}`;

  const cardRightSide = document.createElement("div");
  cardRightSide.className = "detailDiv";

  const cardTopLevelDomain = document.createElement("p");
  cardTopLevelDomain.innerHTML = `<span class="label">Top Level Domain:</span> ${obj.tld}`;

  const cardCurrencies = document.createElement("p");
  const currencyKeys = Object.keys(obj.currencies);
  let currencyText = "";
  currencyKeys.forEach((key) => {
    const currency = obj.currencies[key];
    currencyText += `${currency.name} (${currency.symbol}) `;
  });
  cardCurrencies.innerHTML = `<span class="label">Currencies: </span>${currencyText}`;

  const cardLanguages = document.createElement("p");
  const languageValues = Object.values(obj.languages);
  cardLanguages.innerHTML = `<span class="label">Languages: </span>${languageValues.join(
    ","
  )}`;

  cardRightSide.append(cardTopLevelDomain, cardCurrencies, cardLanguages);

  const cardBorderCountries = document.createElement("p");
  cardBorderCountries.className = "borderCountries";

  if (obj.borders) {
    cardBorderCountries.innerHTML = `<span class="label">Border Countries: </span>`;
    const borderLinks = obj.borders
      .map((borderCode) => {
        const link = document.createElement("a");

        axios
          .get(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          .then((res) => {
            const countryName = res.data[0].name.common;
            link.href = `details.html?name=${countryName}`;
            link.textContent = borderCode;
            link.classList.add("countryBorder");
            cardBorderCountries.innerHTML += link.outerHTML;
          })
          .catch((err) => console.log(err));

        return link.outerHTML;
      })
      .join(",");
  } else {
    cardBorderCountries.innerHTML = `<span class="label">Border Countries: ${obj.name.common} has no border countries</span>`;
  }

  cardInfos.append(
    cardTitle,
    cardName,
    cardPopulation,
    cardRegion,
    cardSubRegion,
    cardCapital,
    cardBorderCountries
  );
  cardMainDiv.append(cardImg, cardInfos, cardRightSide);
  detailsMain.append(cardMainDiv);
}

backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

let mode = localStorage.getItem("mode") || "light";

if (mode === "dark") {
  document.body.classList.add("darkDetails");
  darkBtn.innerHTML = `<i class="fa-regular fa-sun" style="color: #FFD43B;"></i><span>Light Mode</span>`;
}

darkBtn.addEventListener("click", () => {
  if (document.body.classList.contains("darkDetails")) {
    document.body.classList.remove("darkDetails");
    darkBtn.innerHTML = `<i class="fa-regular fa-moon"></i><span>Dark Mode</span>`;
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.add("darkDetails");
    darkBtn.innerHTML = `<i class="fa-regular fa-sun" style="color: #FFD43B;"></i><span>Light Mode</span>`;
    localStorage.setItem("mode", "dark");
  }
  document.body.style.transition = "0.7s";
});
