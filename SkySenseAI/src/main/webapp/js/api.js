const API_KEY = "30309ef965d6a193456f73fea70d89c9";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {

    try {

        const response = await fetch(
            `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        return data;

    } catch (error) {

        alert(error.message);
        return null;

    }

}