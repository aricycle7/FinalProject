//NAVBAR STUFF
let nav_button = document.getElementsByClassName('nav_icon');
let nav = document.getElementsByClassName('nav')[0];

    nav_button[0].addEventListener("click", function() {
        this.classList.toggle("active");

        if (nav.style.display.match("block")) {
            console.log('pee')
            nav.style.display = "none";

        }
        else { 
            console.log('woosh')
            nav.style.display = "block";
        }
    })