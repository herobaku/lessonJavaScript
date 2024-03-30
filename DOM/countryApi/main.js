"use strict";

// Data
const url = "https://restcountries.com/v3.1/all";

// InnerHTML
const countryEl = document.querySelector(".countryAll .container .row");

// Search
const search = document.getElementById("search")

// Button
const darkMode = document.querySelector(".darkMode")

const allCountry = async () => {
  let desc = "";
  let allCountries = [];

  const getApi = await (await fetch(url)).json();
  allCountries = getApi.map(item => ({
    img: item.flags.svg,
    name: item.name.common,
    region: item.region,
    population: item.population,
    capital: item.capital,
  })).sort((a, b) => a.name.localeCompare(b.name));


  const displayCountries = (countries) => {
    desc = "";
    countries.forEach(item => {
      const { img, name, region, population, capital } = item;
      desc += `
        <article class="articleCountry">
          <img src="${img}" alt="flag" class="img-responsive">
          <div class="articleCountry__desc">
            <h2 class="articleCountry__desc-title">${name}</h2>
            <div class="articleCountry__desc-subtitle">
              <h4 class="articleCountry__desc-subtitle-title">Population: <span id="population">${population}</span></h4>
              <h4 class="articleCountry__desc-subtitle-title">Region: <span id="region">${region}</span></h4>
              <h4 class="articleCountry__desc-subtitle-title">Capital: <span id="capital">${capital}</span></h4>
            </div>
          </div>
        </article>`;
    });
    countryEl.innerHTML = desc;
  };


  displayCountries(allCountries);

  search.addEventListener("input", () => {
    const searchValue = search.value.trim().toLowerCase();
    const filteredCountries = allCountries.filter(item => item.name.toLowerCase().includes(searchValue));
    displayCountries(filteredCountries);
  });
};

allCountry();

// Dark Mode
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("active")
  if (!document.body.classList.contains("active")) {
    return localStorage.setItem("darkMode", "light")
  } else {
    localStorage.setItem("darkMode", "dark")
  }
})

const darkModeSave = () => {
  const saveDark = localStorage.getItem("darkMode")
  if (saveDark === "dark") {
    document.body.classList.toggle("active")
  }
}

darkModeSave()