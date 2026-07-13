<%@ page language="java"
	contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>SkySense AI</title>

<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/responsive.css">

</head>

<body>

<div class="container">

<header>

<h1>☁ SkySense AI</h1>

<p>Your Intelligent Weather Companion</p>

</header>
<div id="dateTime"></div>

<div class="search-box">

<input
	type="text"
	id="city"
	placeholder="Enter City Name">

<button id="searchBtn">

🔍 Search

</button>

</div>
<div class="recent-card">

    <h3>🕒 Recent Searches</h3>

    <div id="recentSearches">

        No recent searches

    </div>
    
    <div class="favorite-card">

<h3>❤️ Favourite Cities</h3>

<div id="favoriteCities">

No favourites yet

</div>

</div>

</div>
<div class="location-box">

<button id="locationBtn">

📍 Use Current Location

</button>

</div>

<div class="weather-card">

<h2 id="cityName">

City Name

</h2>

<p id="locationInfo">

State, Country

</p>

<div class="temperature" id="temperature">

--°C

</div>

<p class="minMax">

⬆ <span id="tempMax">--</span>°C

&nbsp;&nbsp;&nbsp;

⬇ <span id="tempMin">--</span>°C

</p>

<div id="description">

Weather Description

</div>

<div class="details">

<p>🌡 Feels Like : <span id="feelsLike">--</span>°C</p>

<p>💧 Humidity : <span id="humidity">--</span>%</p>

<p>💨 Wind Speed : <span id="wind">--</span> km/h</p>

<p>📈 Pressure : <span id="pressure">--</span> hPa</p>

<p>👁 Visibility : <span id="visibility">--</span> km</p>

<p>☀ UV Index : <span id="uv">--</span></p>
<p>🌫 Air Quality : <span id="aqi">--</span></p>

<p>🌅 Sunrise : <span id="sunrise">--</span></p>

<p>🌇 Sunset : <span id="sunset">--</span></p>

<p>
🌫 Air Quality :
<span id="airQuality">Loading...</span>
</p>

<p>
☀ UV Index :
<span id="uv">Loading...</span>
</p>

</div>

</div>

<div class="forecast-card">

<h2>

📅 5-Day Forecast

</h2>

<div id="forecast">

Forecast will appear here...

</div>

</div>

<div class="ai-card">

<h2>

🤖 Smart Weather Insights

</h2>

<div id="aiAdvice">

Waiting for weather data...

</div>

</div>

</div>

<script src="js/api.js"></script>
<script src="js/location.js"></script>
<script src="js/ui.js"></script>
<script src="js/forecast.js"></script>
<script src="js/air.js"></script>
<script src="js/background.js"></script>
<script src="js/recent.js"></script>
<script src="js/favorite.js"></script>
<script src="js/app.js"></script>

</body>

</html>