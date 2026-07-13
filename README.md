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

<img width="926" height="493" alt="Screenshot 2026-07-13 151641" src="https://github.com/user-attachments/assets/53fecf49-0be5-4d22-8675-997f6938cdb6" />
<img width="901" height="496" alt="Screenshot 2026-07-13 151717" src="https://github.com/user-attachments/assets/cf5770d6-61c5-409d-90ec-e454e213df5e" />
<img width="677" height="488" alt="Screenshot 2026-07-13 151807" src="https://github.com/user-attachments/assets/15a80c19-26c7-44fe-b900-3765b4c1d1e7" />
<img width="701" height="487" alt="Screenshot 2026-07-13 151828" src="https://github.com/user-attachments/assets/b24d793f-a465-47d5-9fac-48e8cf8b8f89" />
<img width="689" height="367" alt="Screenshot 2026-07-13 151848" src="https://github.com/user-attachments/assets/aa4a0584-2b37-41fc-8ef8-dfc5f88fb26a" />























