package com.skysense.model;


public class AirQuality {


    private int aqi;

    private double pm25;

    private double pm10;

    private double co;

    private double no2;



    public AirQuality(int aqi, double pm25, double pm10, double co, double no2) {

        this.aqi = aqi;
        this.pm25 = pm25;
        this.pm10 = pm10;
        this.co = co;
        this.no2 = no2;

    }



    public int getAqi() {

        return aqi;

    }



    public double getPm25() {

        return pm25;

    }



    public double getPm10() {

        return pm10;

    }



    public double getCo() {

        return co;

    }



    public double getNo2() {

        return no2;

    }



    public String getStatus() {


        switch(aqi) {


            case 1:
                return "Good";


            case 2:
                return "Fair";


            case 3:
                return "Moderate";


            case 4:
                return "Poor";


            case 5:
                return "Very Poor";


            default:
                return "Unknown";


        }


    }


}