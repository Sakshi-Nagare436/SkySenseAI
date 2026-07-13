function updateWeatherUI(data) {

    document.getElementById("cityName").innerHTML =
        "📍 " + data.name +
        " <button id='favBtn'>❤️</button>";

    document.getElementById("locationInfo").innerText =
        data.sys.country;


    document.getElementById("temperature").innerText =
        Math.round(data.main.temp) + "°C";


    document.getElementById("tempMax").innerText =
        Math.round(data.main.temp_max);


    document.getElementById("tempMin").innerText =
        Math.round(data.main.temp_min);



    const iconCode = data.weather[0].icon;


    const iconUrl =
        "https://openweathermap.org/img/wn/"
        + iconCode
        + "@2x.png";


    document.getElementById("description").innerHTML =
        "<img src='" + iconUrl + "'>" +
        "<br>" +
        data.weather[0].description;



    document.getElementById("feelsLike").innerText =
        Math.round(data.main.feels_like);


    document.getElementById("humidity").innerText =
        data.main.humidity;


    document.getElementById("wind").innerText =
        Math.round(data.wind.speed * 3.6);


    document.getElementById("pressure").innerText =
        data.main.pressure;


    document.getElementById("visibility").innerText =
        data.visibility / 1000;



    const sunrise = new Date(data.sys.sunrise * 1000);

    const sunset = new Date(data.sys.sunset * 1000);



    document.getElementById("sunrise").innerText =
        sunrise.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });



    document.getElementById("sunset").innerText =
        sunset.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });



    generateAIAdvice(data);



    function generateAIAdvice(data) {


        let advice = [];


        const temp = data.main.temp;

        const humidity = data.main.humidity;

        const weather = data.weather[0].main;

        const wind = data.wind.speed * 3.6;

        const visibility = data.visibility / 1000;

        const pressure = data.main.pressure;



        if (temp >= 35) {

            advice.push(
                "🥵 Very hot weather. Drink plenty of water and avoid direct sunlight."
            );

        }

        else if (temp >= 28) {

            advice.push(
                "🌤 Warm weather. Wear light clothes and stay hydrated."
            );

        }

        else if (temp <= 15) {

            advice.push(
                "🧥 Cold weather. Carry a jacket or warm clothes."
            );

        }

        else {

            advice.push(
                "😊 Temperature is comfortable today."
            );

        }



        if (weather === "Rain") {

            advice.push(
                "☔ Rain expected. Carry an umbrella before going outside."
            );

        }

        else if (weather === "Thunderstorm") {

            advice.push(
                "⚡ Thunderstorm detected. Avoid open areas."
            );

        }

        else if (weather === "Clouds") {

            advice.push(
                "☁️ Cloudy sky. Good weather for outdoor activities."
            );

        }

        else if (weather === "Clear") {

            advice.push(
                "☀️ Clear sky. Perfect time for outdoor activities."
            );

        }



        if (humidity > 80) {

            advice.push(
                "💧 High humidity. It may feel warmer than actual temperature."
            );

        }

        else if (humidity < 30) {

            advice.push(
                "🌵 Low humidity. Keep yourself hydrated."
            );

        }



        if (wind > 30) {

            advice.push(
                "💨 Strong winds today. Be careful while travelling."
            );

        }



        if (visibility < 5) {

            advice.push(
                "🌫 Low visibility. Drive carefully."
            );

        }



        if (pressure < 1000) {

            advice.push(
                "📉 Low pressure detected. Weather may change soon."
            );

        }



        advice.push(
            "🤖 SkySense AI recommends planning your day according to these conditions."
        );



        document.getElementById("aiAdvice").innerText =
            advice.join("\n\n");

    }



    changeBackground(data.weather[0].main);



    document.getElementById("favBtn")
        .addEventListener("click", function() {

            saveFavorite(data.name);

        });

}
function updateDateTime(){

    const now = new Date();


    const day =
        now.toLocaleDateString("en-US", {
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        });


    const time =
        now.toLocaleTimeString([], {
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit"
        });


    document.getElementById("dateTime").innerHTML =
        "📅 " + day +
        "<br>🕒 " + time;

}


updateDateTime();


setInterval(updateDateTime,1000);