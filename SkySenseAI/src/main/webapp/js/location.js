function generateAIAdvice(data) {

    let advice = "";

    if (data.main.temp > 35) {

        advice += "🥵 It is very hot today.<br>";
        advice += "💧 Drink plenty of water.<br>";

    }

    else if (data.main.temp < 15) {

        advice += "🧥 It is cold outside.<br>";
        advice += "🧣 Wear warm clothes.<br>";

    }

    else {

        advice += "😊 Pleasant weather today.<br>";

    }

    if (data.weather[0].main === "Rain") {

        advice += "☔ Carry an umbrella.<br>";

    }

    if (data.main.humidity > 80) {

        advice += "💦 Humidity is high today.<br>";

    }

    document.getElementById("aiAdvice").innerHTML =
        advice;

}