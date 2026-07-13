package com.skysense.config;

public class ApiConfig {

    public static final String API_KEY =
            System.getProperty("OPENWEATHER_API_KEY");

    static {
        if (API_KEY == null || API_KEY.isBlank()) {
            throw new RuntimeException(
                "OPENWEATHER_API_KEY system property not set."
            );
        }
    }

    public static final String WEATHER_URL =
            "https://api.openweathermap.org/data/2.5/weather";

    public static final String FORECAST_URL =
            "https://api.openweathermap.org/data/2.5/forecast";

    public static final String AIR_URL =
            "https://api.openweathermap.org/data/2.5/air_pollution";
    
    public static final String GEO_URL =
    	    "https://api.openweathermap.org/geo/1.0/direct";
}