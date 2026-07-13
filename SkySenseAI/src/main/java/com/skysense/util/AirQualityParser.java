package com.skysense.util;


import org.json.JSONArray;
import org.json.JSONObject;

import com.skysense.model.AirQuality;



public class AirQualityParser {



    public static AirQuality parse(String json) {


        JSONObject object = new JSONObject(json);


        JSONArray list = object.getJSONArray("list");


        JSONObject data = list.getJSONObject(0);



        JSONObject main = data.getJSONObject("main");

        JSONObject components = data.getJSONObject("components");



        int aqi = main.getInt("aqi");


        double pm25 = components.getDouble("pm2_5");

        double pm10 = components.getDouble("pm10");

        double co = components.getDouble("co");

        double no2 = components.getDouble("no2");



        return new AirQuality(
                aqi,
                pm25,
                pm10,
                co,
                no2
        );


    }


}