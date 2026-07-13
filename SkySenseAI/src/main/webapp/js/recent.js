function saveRecentSearch(city) {

    let cities = JSON.parse(localStorage.getItem("recentCities")) || [];

    city = city.trim();

    cities = cities.filter(c => c.toLowerCase() !== city.toLowerCase());

    cities.unshift(city);

    if (cities.length > 5) {

        cities.pop();

    }

    localStorage.setItem(
        "recentCities",
        JSON.stringify(cities)
    );

    loadRecentSearches();

}

function loadRecentSearches() {

    const recentDiv =
        document.getElementById("recentSearches");

    const cities =
        JSON.parse(localStorage.getItem("recentCities")) || [];

    if (cities.length === 0) {

        recentDiv.innerHTML =
            "No recent searches";

        return;

    }

    recentDiv.innerHTML = "";

    cities.forEach(city => {

        recentDiv.innerHTML +=

        `<div class="recentCity"
            onclick="searchRecentCity('${city}')">

            ${city}

        </div>`;

    });

}

function searchRecentCity(city){

    document.getElementById("city").value = city;

    searchWeather();

}

window.onload = loadRecentSearches;