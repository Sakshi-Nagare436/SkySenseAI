document.getElementById("searchBtn").addEventListener("click", searchWeather);

document.getElementById("locationBtn").addEventListener("click", getCurrentLocation);

// Search Weather
async function searchWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city.");
        return;

    }

    // Loading
    document.getElementById("temperature").innerText = "Loading...";

    try {

        const response = await fetch(
            "weather?city=" + encodeURIComponent(city)
        );

        const data = await response.json();

        // Invalid city
        if (data.cod && data.cod != 200) {

            document.getElementById("cityName").innerText =
                "❌ City Not Found";

            document.getElementById("temperature").innerText =
                "--";

            return;

        }

        updateWeatherUI(data);
        saveRecentSearch(data.name);

        document.getElementById("city").value = data.name;

        getForecast(data.name);

    } catch (error) {

        

        document.getElementById("cityName").innerText =
            "❌ City Not Found";

        document.getElementById("temperature").innerText =
            "--";

    }

}

// Current Location
function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported.");
        return;

    }

    navigator.geolocation.getCurrentPosition(
        showPosition,
        showError
    );

}

function showPosition(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeatherByLocation(latitude, longitude);

}

function showError() {

    alert("Unable to get your location.");

}

// Weather using GPS
async function getWeatherByLocation(latitude, longitude) {

    document.getElementById("temperature").innerText = "Loading...";

    try {

        const response = await fetch(
            "weather?lat=" + latitude + "&lon=" + longitude
        );

        const data = await response.json();

        updateWeatherUI(data);
        saveRecentSearch(data.name);

        document.getElementById("city").value = data.name;

        getForecast(data.name);

    } catch (error) {

        

        alert("Unable to fetch weather for your location.");

    }

}