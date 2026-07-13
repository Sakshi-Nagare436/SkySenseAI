package com.skysense.controller;


import com.skysense.model.GeoLocation;
import com.skysense.service.GeocodingService;
import com.skysense.service.WeatherService;


public class WeatherController {


    private WeatherService weatherService;
    private GeocodingService geocodingService;



    public WeatherController() {


        weatherService = new WeatherService();
        geocodingService = new GeocodingService();


    }



    // Search weather by city
    public String searchCity(String city) {


        try {


            return weatherService.getWeather(city);


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }




    // Search weather by current location
    public String searchLocation(String lat, String lon) {


        try {


            return weatherService.getWeatherByLocation(lat, lon);


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }




    // Get 5-Day Forecast
    public String getForecast(String city) {


        try {


            return weatherService.getForecast(city);


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }





    // Search location using Geocoding API
    public GeoLocation searchPlace(String place) {


        try {


            return geocodingService.searchLocation(place);


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }





    // Get Air Quality using latitude and longitude
    public String getAirQuality(String lat, String lon) {


        try {


            return weatherService.getAirQuality(lat, lon);


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }




    // Get Air Quality using GeoLocation object
    public String getAirQuality(GeoLocation location) {


        try {


            return weatherService.getAirQuality(
                    String.valueOf(location.getLat()),
                    String.valueOf(location.getLon())
            );


        } catch (Exception e) {


            e.printStackTrace();
            return null;


        }


    }



}