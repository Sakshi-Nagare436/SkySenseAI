package com.skysense.controller;

import com.skysense.service.WeatherService;
import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/air")
public class AirQualityServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String lat = request.getParameter("lat");
        String lon = request.getParameter("lon");

        WeatherService service = new WeatherService();

        String result;

        try {

            result = service.getAirQuality(lat, lon);

        } catch (Exception e) {

            e.printStackTrace();

            result = "{\"message\":\"Unable to fetch AQI\"}";

        }

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().print(result);

    }

}