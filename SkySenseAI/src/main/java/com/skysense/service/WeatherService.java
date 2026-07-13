package com.skysense.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.skysense.model.GeoLocation;
import com.skysense.config.ApiConfig;

public class WeatherService {

    private HttpClient client;

    public WeatherService() {

        client = HttpClient.newHttpClient();

    }

    // Search weather using city name
    public String getWeather(String city)
            throws IOException, InterruptedException {

        String url = ApiConfig.WEATHER_URL
                + "?q="
                + city.replace(" ", "%20")
                + "&appid="
                + ApiConfig.API_KEY
                + "&units=metric";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();

    }

    // Search weather using latitude and longitude
    public String getWeatherByLocation(String lat, String lon)
            throws IOException, InterruptedException {

        String url = ApiConfig.WEATHER_URL
                + "?lat="
                + lat
                + "&lon="
                + lon
                + "&appid="
                + ApiConfig.API_KEY
                + "&units=metric";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();

    }

    // Get 5-Day Weather Forecast
    public String getForecast(String city)
            throws IOException, InterruptedException {

        String url = ApiConfig.FORECAST_URL
                + "?q="
                + city.replace(" ", "%20")
                + "&appid="
                + ApiConfig.API_KEY
                + "&units=metric";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();

    }
 // Get weather using GeoLocation
    public String getWeather(GeoLocation location)
            throws IOException, InterruptedException {

        String url = ApiConfig.WEATHER_URL
                + "?lat="
                + location.getLat()
                + "&lon="
                + location.getLon()
                + "&appid="
                + ApiConfig.API_KEY
                + "&units=metric";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();

    }
    
    public String getAirQuality(String lat, String lon)
            throws IOException, InterruptedException {

        String url = ApiConfig.AIR_URL
                + "?lat="
                + lat
                + "&lon="
                + lon
                + "&appid="
                + ApiConfig.API_KEY;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();

    }
}