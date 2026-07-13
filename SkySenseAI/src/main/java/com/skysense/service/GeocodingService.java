package com.skysense.service;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.google.gson.Gson;
import com.skysense.config.ApiConfig;
import com.skysense.model.GeoLocation;

public class GeocodingService {

    private HttpClient client;

    public GeocodingService() {

        client = HttpClient.newHttpClient();

    }

    public GeoLocation searchLocation(String place)
            throws IOException, InterruptedException {

        String encodedPlace =
                URLEncoder.encode(place, StandardCharsets.UTF_8);

        String url = ApiConfig.GEO_URL
                + "?q="
                + encodedPlace
                + "&limit=1"
                + "&appid="
                + ApiConfig.API_KEY;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request,
                HttpResponse.BodyHandlers.ofString());

        Gson gson = new Gson();

        GeoLocation[] locations =
                gson.fromJson(response.body(), GeoLocation[].class);

        if (locations != null && locations.length > 0) {

            return locations[0];

        }

        return null;

    }

}