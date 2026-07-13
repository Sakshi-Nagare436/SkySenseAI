 --- SkySenseAI ---

SkySenseAI is a modern AI-powered weather forecasting web application built using Java Servlets, Maven, HTML, CSS, and JavaScript. It provides real-time weather information, intelligent weather suggestions, and an interactive user experience using the OpenWeather API.

  Features

- 🔍 Search weather by city name
- 📍 Get weather using current location
- 🌡️ Real-time temperature, humidity, pressure and wind speed
- 📅 5-Day weather forecast
- 🤖 AI-powered weather suggestions based on current conditions
- ❤️ Add and remove favourite cities
- 🕒 Recent search history
- 🌅 Sunrise and sunset timings
- 👁️ Visibility information
- 🌤️ Dynamic weather icons
- 🎨 Responsive and user-friendly interface

  Tech Stack

- Java
- Java Servlets
- Maven
- HTML5
- CSS3
- JavaScript
- OpenWeather API
- Apache Tomcat 10

 Project Structure


SkySenseAI
│
├── src/main/java
│ ├── controller
│ ├── service
│ └── model
│
├── src/main/webapp
│ ├── index.html
│ ├── css
│ ├── js
│ └── images
│
├── pom.xml
├── README.md
└── .gitignore

  Getting Started

1. Clone the repository.
2. Import it as a Maven project in Eclipse.
3. Configure Apache Tomcat 10.
4. Add your OpenWeather API key as a VM argument:


-DOPENWEATHER_API_KEY=YOUR_API_KEY


5. Start the Tomcat server.
6. Open the application in your browser.

  ⚙️ How It Works

1. User enters a city name or allows location access.
2. The frontend sends a request to the Java Servlet.
3. Servlet communicates with OpenWeather API.
4. Weather data is processed and displayed on the dashboard.
5. AI suggestions are generated based on weather conditions.

 🌐 API Used (external api) 

This project uses the OpenWeather API to fetch:
- Current weather data
- Forecast information
- Weather conditions


This project is developed for learning and portfolio purposes.