function changeBackground(weather) {

    if (weather === "Clear") {

        document.body.style.background =
            "#4FC3F7";

    }

    else if (weather === "Rain") {

        document.body.style.background =
            "#546E7A";

    }

    else if (weather === "Clouds") {

        document.body.style.background =
            "#78909C";

    }

    else {

        document.body.style.background =
            "#0F172A";

    }

}