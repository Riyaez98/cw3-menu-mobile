document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var hamburger = document.querySelector('.hamburger');
    var menuMoblie = document.querySelector(".nav-primary-mobile");

    hamburger.addEventListener('click', openMenu);




    function openMenu(evt){
        evt.preventDefault();

        var cible = evt.currentTarget;

        if(cible.classList.contains("open")){
            cible.classList.remove("open");
            menuMoblie.classList.remove("open");
        }else {
            cible.classList.add("open");
            menuMoblie.classList.add("open");
        }

    }

});