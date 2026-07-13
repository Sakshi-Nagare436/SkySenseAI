function getForecast(city) {

    

    fetch("forecast?city=" + encodeURIComponent(city))
        .then(function(response) {
            return response.json();
        })
		.then(function(data) {

		    
		   
		    updateForecastUI(data);

		})
        .catch(function(error) {
            alert(error);
            
        });

}

function updateForecastUI(data) {

   

    var forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    for (var i = 0; i < data.list.length; i = i + 8) {

        var weather = data.list[i];

        var date = new Date(weather.dt_txt);

        var day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        var card =
            "<div class='day'>" +
            "<h3>" + day + "</h3>" +
            "<p>" + Math.round(weather.main.temp) + "°C</p>" +
            "<p>" + weather.weather[0].main + "</p>" +
            "</div>";

       

        forecast.innerHTML += card;

    }

    

}