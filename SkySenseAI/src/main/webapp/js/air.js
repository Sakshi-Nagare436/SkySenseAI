async function getAirQuality(lat, lon) {

    try {

        const response = await fetch(
            "air?lat=" + lat + "&lon=" + lon
        );

        const data = await response.json();

        const aqi = data.list[0].main.aqi;

        let text = "";

        switch (aqi) {

            case 1:
                text = "Good 😊";
                break;

            case 2:
                text = "Fair 🙂";
                break;

            case 3:
                text = "Moderate 😐";
                break;

            case 4:
                text = "Poor 😷";
                break;

            case 5:
                text = "Very Poor ☠";
                break;

        }

        document.getElementById("aqi").innerText = text;

    }

    catch (error) {

        

    }

}