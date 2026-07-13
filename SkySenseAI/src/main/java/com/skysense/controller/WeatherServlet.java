package com.skysense.controller;

import java.io.IOException;

import com.skysense.model.GeoLocation;
import com.skysense.service.WeatherService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/weather")
public class WeatherServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String city = request.getParameter("city");

        String lat = request.getParameter("lat");

        String lon = request.getParameter("lon");

        WeatherController controller = new WeatherController();

        String weather = "";

        try {

            // Current Location
            if (lat != null && lon != null) {

                weather = controller.searchLocation(lat, lon);

            }

            // Search by City / Area
            else if (city != null && !city.isBlank()) {

                // If user entered Pune, Manjari
                if (city.contains(",")) {

                    GeoLocation location =
                            controller.searchPlace(city);

                    if (location != null) {

                        WeatherService service =
                                new WeatherService();

                        weather =
                                service.getWeather(location);

                    } else {

                        weather =
                                "{\"message\":\"Location not found\"}";

                    }

                }

                // Normal City Search
                else {

                    weather = controller.searchCity(city);

                }

            }

            else {

                weather =
                        "{\"message\":\"Invalid Request\"}";

            }

        } catch (Exception e) {

            e.printStackTrace();

            weather =
                    "{\"message\":\"Server Error\"}";

        }

        response.setContentType("application/json");

        response.setCharacterEncoding("UTF-8");

        response.getWriter().print(weather);

    }

}