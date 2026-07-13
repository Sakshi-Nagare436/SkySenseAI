function saveFavorite(city){

    let cities =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];


    if(!cities.includes(city)){

        cities.push(city);

    }


    localStorage.setItem(
        "favoriteCities",
        JSON.stringify(cities)
    );


    loadFavorites();

}



function loadFavorites(){

    const fav =
    document.getElementById("favoriteCities");


    let cities =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];


    if(cities.length===0){

        fav.innerHTML="No favourites yet";

        return;

    }


    fav.innerHTML="";


    cities.forEach(city=>{


        fav.innerHTML +=


        `<div class="favoriteCity">

            <span onclick="searchRecentCity('${city}')">
                ❤️ ${city}
            </span>

            <button class="removeFav"
            onclick="removeFavorite('${city}')">
                ❌
            </button>

        </div>`;


    });


}




function removeFavorite(city){


    let cities =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];


    cities = cities.filter(function(item){

        return item !== city;

    });


    localStorage.setItem(
        "favoriteCities",
        JSON.stringify(cities)
    );


    loadFavorites();


}



window.addEventListener("load",loadFavorites);